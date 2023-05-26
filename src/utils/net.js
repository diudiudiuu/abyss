import axios from 'axios'
const net = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 60000
})

net.interceptors.request.use(config => {
	return config
},
	error => {
		return Promise.reject()
	}
)

net.interceptors.response.use(response => {
	return response
}, error => {
	return Promise.reject()
})

export default net