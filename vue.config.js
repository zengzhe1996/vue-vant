module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://10.254.23.8:9529",
        changeOrigin: true, // 是否支持跨域
        ws: true, // 是否代理ws
        secure: false, // true为不接受运行在 HTTPS 上，且使用了无效证书的后端服务器
        pathRewrite: { // 重写api 把api替换为''
          '^/api': ''
        }
      }
    }
  }
}