import axios from 'axios';
import sessionStore from './sessionStore';
import tools from "@/utils/tools"
const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 60000
});

service.interceptors.request.use(config => {

	let paramData = config.data || {};
	const token = sessionStore.get() || ''
	if (config.file) {
		// 包含文件方式
		const fromdata = new FormData()

		for (const key of Object.keys(paramData)) {
			fromdata.append(key, paramData[key])
		}
		fromdata.append('access_token', token)
		if ("post" === config.method || "put" === config.method) {
			config.data = fromdata;
		}


		if ("get" === config.method || "delete" === config.method) {
			config.params = config.params || fromdata
			// 删除data中数据
			config.data = ''
		}

	} else {
		// 普通的 json 方式
		let data = paramData
		data.access_token = token

		if ("post" === config.method || "put" === config.method) {
			config.data = data;
		}
		if ("get" === config.method || "delete" === config.method) {
			config.params = config.params || data
			// 删除data中数据
			config.data = ''
		}
	}

	return config;

},
	error => {
		return Promise.reject();
	}
);

service.interceptors.response.use(response => {
	if (response.status === 200) {
		if (response.data.access_status.code === 40000) {
			// 删除
			tools.logout()
			setTimeout(() => {
				window.location.href = '/login'
			})
		} else {
			return Promise.resolve(response.data);
		}
	}
}, error => {
	const {
		response
	} = error
	if (response) {
		return Promise.reject(response.data.result);
	} else {
		//取消请求
	}
})

export default service;