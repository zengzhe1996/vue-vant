module.exports = {
  // configureWebpack: {
  //   plugins: {
  //     "postcss-pxtorem": {
  //       // 设计稿 375:37.5
  //       // 设计稿：750:75
  //       // Vant 是基于 375
  //       rootValue: 37.5,
  //       propList: ["*"]
  //     }
  //   },
  // },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue:75,      // 新版本的是这个值
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  },
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