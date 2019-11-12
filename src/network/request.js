import axios from 'axios';

export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: "https://www.nanshig.com/mobile/index.php",
        timeout: 5000
    })

    //拦截器
    //请求拦截
    // instance.interceptors.request.use(config => {
    //     //比如一些信息不符合服务器的要求
    //     //比如发送网络请求界面有请求的图标
    //     //登录携带（token）必须携带特殊的信息
    //     return config
    // }, err => {

    // })

    //响应拦截
    // instance.interceptors.response.use(res => {
    //     console.log(res);
    //     return res.data
    // }, err => {
    //     console.log(err);

    // })



    //发送真正的网络请求
    return instance(config)
}