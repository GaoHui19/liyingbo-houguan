// axios 二次封装
import axios from "axios"
const instance = axios.create({
    baseURL: 'http://114.116.26.78/api',
    timeout: 10000,
    method:'POST'
})
instance.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token')
    if(token){
        config.headers['Authorization'] = 'Bearen' + token
    }
    return config
}, function (err) {
    console.log(err);
    // showDialog({ message: err.message })
})
instance.interceptors.response.use(function (res) {
    console.log(res);
    if(res.status == 401 && token){
        alert('登录超时，请重新登录')
    }
    return res

}, function (err) {
    console.log(err);
})
export default instance