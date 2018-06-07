// 接口ip地址
let ip;
// node环境
const nodeEnv = process.env.NODE_ENV;
switch (nodeEnv) {
  case "development":
    // ip = "http://10.247.67.53:8082";  //  坤哥的ip
    ip = "http://learn.zmgongzuoshi.top/v1"; //  测试
    break;
  case "test":
    ip = "http://learn.zmgongzuoshi.top/v1"
    break;
  case "production":
    ip = "http://learn.sunlands.site/v1";
    break;
  default:
    ip = "0.0.0.0";
    break;
}
// 接口前缀


// 应用程序接口配置
const api_config = {ip};

export default api_config;
