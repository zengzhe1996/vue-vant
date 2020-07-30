import axios from 'axios';
import qs from 'qs';
import { Notify } from 'vant';

// headers = {headers: {'Content-Type': 'application/json;charset=UTF-8'}}
// headers = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
// headers = {headers: {'Content-Type': 'multipart/form-data'}}
axios.withCredentials = true;
axios.defaults.timeout = 10 * 1000;
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
  Notify('1111')
  // 对响应数据做点什么
  return response;
}, error => {
  console.log(error, 11111)
  // 对响应错误做点什么
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
  // 根据参数自动判断以json格式传参还是以FormData格式传参
  post(url, params = {}){
    return axios.post(url, params, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
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
  // allowDots: true === a[1] = 1, a[2] = 2
  postParam(url, params = {}){
    var paramsQs = qs.stringify(params, {arrayFormat: 'brackets'})
    return axios.post(url, paramsQs).then(response => {
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