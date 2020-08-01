import loading from '../components/loading/loading.vue'

let instance = null;

let myPlugin = {
  install(Vue){
    let Component =  Vue.extend(loading) // loading 是独立的组件，extend的作用是将loading与vue关联起来
    let vm = new Component().$mount() // 组件实例化，使用$mount可以获取loading组件的vm层
    document.body.appendChild(vm.$el) // 将组件挂载到body上
    class Loading{
      constructor(text = 'Loading'){
        this.text = text
      }
      show(){
        vm.show = true
        vm.text = this.text
      }
      hide(){
        vm.show = false
      }
    }
    instance = new Loading()
    Vue.prototype.$loading = instance
  }
}

export default myPlugin // 这种导出方便通过vue实例调用
export { instance } // 这种导出方便其他文件调用