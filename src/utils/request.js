import axios from 'axios';
import qs from 'qs';
import { Notify } from 'vant';

axios.withCredentials = true; // 支持跨域
axios.defaults.timeout = 10 * 1000; // 请求超时时间
axios.defaults.baseURL = 'www.baidu.com'; // baseURL
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'; // 自定义请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 默认请求头Content-Type设置

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  Notify('1111')

  return response;
}, error => {
  // 对响应错误做点什么
  console.log(error, 11111)

  return Promise.reject(error);
});

let Instance = class request{
  get(url, params = {}){
    return axios.get(url, {params}).then(response => {
      if(response.success){
        Promise.resolve(response.data)
      }
      Promise.reject(response.message)
    }).catch( error => {
      Notify(error.message)
      console.log(error)
    })
  }
  // axios 请求头默认为content-type:application/json
  postJson(url, data = {}){
    return axios.post(url, data, { headers: { 'Content-Type': 'application/json;charset=UTF-8'}}).then(response => {
      console.log(response)
      if(response.success){
        Promise.resolve(response.data)
      }
      Promise.reject(response.message)
    }).catch( error => {
      Notify(error.message)
      console.log(error)
    })
  }
  // arrayFormat: 'brackets' === a[] = 1, a[] = 2
  // allowDots: true === a[1] = 1, a[2] = 2 多层对象嵌套, 可用
  // var paramsQs = qs.stringify(params, {arrayFormat: 'brackets'})
  postForm(url, data = {}){
    return axios.post(url, data, { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
      console.log(response)
      if(response.success){
        Promise.resolve(response.data)
      }
      Promise.reject(response.message)
    }).catch( error => {
      Notify(error.message)
      console.log(error)
    })
  }
}
export default new Instance()