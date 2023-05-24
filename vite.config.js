import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';

function pathResolve(dir) {
	return resolve(__dirname, ".", dir);
}

export default defineConfig(({ command, mode }) => {

	// 根据当前工作目录中的 `mode` 加载 .env 文件
	const env = loadEnv(mode, process.cwd())

	const {
		VITE_BASE_URL,
	} = env

	return {
		base: "/",
		plugins: [vue()],
		resolve: {
			alias: {
				"@": pathResolve("src"),
				"vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
			}
		},
		optimizeDeps: {
			include: ['axios'],
		},
		build: {
			target: 'modules',
			outDir: 'dist',
			assetsDir: 'assets',
			minify: 'terser', // 混淆器
			sourcemap: false,
			brotliSize: false,
			// 消除打包大小超过500kb警告
			chunkSizeWarningLimit: 2000,
			terserOptions: {
				compress: {
					warnings: true,
					drop_console: true,  //打包时删除console
					drop_debugger: true, //打包时删除 debugger
					pure_funcs: ['console.log'],
				},
				output: {
					// 去掉注释内容
					comments: true,
				},
			},
		},
		server: {
			host: 'localhost', // 默认是 localhost
			port: '8000', // 默认是 3000 端口
			cors: true,
			open: true,
			hmr: {
				overlay: true,
			},
			proxy: {
				[VITE_BASE_URL]: {
					target: VITE_BASE_URL, //代理接口
					rewrite: (path) => path.replace(new RegExp(VITE_BASE_URL, "g"), "")
				}
			}
		}
	}
});