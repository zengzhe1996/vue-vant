const myPlugin = {
  install(Vue, options){
    
  }
}
// 自动注册插件
if (typeof window !== undefinde && window.Vue) {
  window.Vue.use(myPlugin)
}