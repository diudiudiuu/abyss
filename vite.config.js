import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';

const pathResolve = (dir) => {
	return resolve(__dirname, ".", dir);
}

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

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

			rollupOptions: {
				output: {
					entryFileNames: 'assets/js/[name]-[hash].js',
					chunkFileNames: 'assets/js/[name]-[hash].js',
					// 资源文件进行分类
					assetFileNames(chunkInfo) {
						// 分类 js css images font vendor 文件夹
						// 获取文件后缀 
						const ext = chunkInfo.name.split('.')[1]

						switch (ext) {
							case 'js':
								return 'assets/js/[name]-[hash].[ext]'
							case 'css':
								return 'assets/css/[name]-[hash].[ext]'
							case 'vue':
								return 'assets/js/[name]-[hash].[ext]'
							case 'png':
							case 'jpg':
							case 'jpeg':
							case 'gif':
							case 'svg':
								return 'assets/images/[name]-[hash].[ext]'
							case 'woff':
							case 'woff2':
							case 'eot':
							case 'ttf':
							case 'otf':
								return 'assets/font/[name]-[hash].[ext]'
							default:
								return 'assets/vendor/[name]-[hash].[ext]'
						}
					},

					// 去除一些特殊字符 服务器有可能不支持
					sanitizeFileName(name) {
						const match = DRIVE_LETTER_REGEX.exec(name);
						const driveLetter = match ? match[0] : '';
						// substr 是被淘汰語法，因此要改 slice
						return (
							driveLetter +
							name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
						);
					}
				}
			}

		},
		server: {
			host: 'localhost', // 默认是 localhost
			port: '8888',
			cors: true,
			open: true,
			hmr: {
				overlay: true,
			},
			proxy: {
				[VITE_BASE_URL]: {
					target: VITE_BASE_URL, //代理接口
					changeOrigin: true,
					rewrite: (path) => path.replace(new RegExp(VITE_BASE_URL, "g"), "")
				}
			}
		}
	}
});