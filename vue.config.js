module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            // 设计稿 375:37.5
            // 设计稿：750:75
            // Vant 是基于 375
            rootValue: 37.5, // 换算的基数(设计图750的根字体为75)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            // minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
            // mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            propList: ['*']
          })
        ]
      },
      sass: {
        prependData: `@import "~@/assets/css/variables.scss";`, //这儿的键名改了
      },
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