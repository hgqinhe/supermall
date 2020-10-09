import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/mn',
        timeout: 5000
    })

    // 2. axios的拦截器
    // axios请求拦截器
    instance.interceptors.request.use(config => {
        // console.log(config)
        // 请求拦截的作用
        // 1. 比如config中的一些信息不符合服务器的请求
        // 2. 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        // 3. 比如特殊网络请求（例如登录请求是需要携带（token）令牌），必须携带特殊的信息

        // 返回拦截结果
        return config
    }, err => {})

    // axios响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    // 最终axios封装,axios中有ES6的Promise封装，成功回调then()和失败回调catch已经包含
    return instance(config)

}