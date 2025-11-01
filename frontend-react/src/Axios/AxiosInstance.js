import axios from "axios";
export const axiosInstance = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/v1/'
})
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token')
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})
axiosInstance.interceptors.response.use(response => response, error =>
    const originalrequest = error.config
    if(error.response.status === 401 && !originalrequest._retry) {
        originalrequest._retry = true
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        window.location.href = '/login'
    }
)