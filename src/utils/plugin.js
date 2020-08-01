import loading from '../components/loading/loading.vue'

export default{
  install(Vue){
    let Component =  Vue.extend(loading) // loading 是独立的组件，extend的作用是将loading与vue关联起来
    let vm = new Component().$mount() // 组件实例化，使用$mount可以获取loading组件的vm层
    document.body.appendChild(vm.$el) // 将组件挂载到body上
    Vue.prototype.$loading = function (text = '加载中...') {
      vm.show = true
      vm.text = text
    }
    Vue.prototype.$loading.close = function () {
      vm.show = false
    }
  }
}