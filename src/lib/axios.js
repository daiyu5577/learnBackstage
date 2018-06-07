/* axios配置 */
import axios from "axios";
import api_config from "@/api/api-config";
import utility from "@/lib/utility";
import router from "@/router";

// 接口ip
axios.defaults.baseURL = api_config.ip;
// 超时时间
axios.defaults.timeout = 8000;

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    console.error("请求已发送，但请求有误！");
    return Promise.reject(error);
  });

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    if (response.data.code === 403) {
      router.push({name: "login"});
      return;
    }
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    console.error("服务端响应异常！");
    return Promise.reject(error);
  });

export default axios;
