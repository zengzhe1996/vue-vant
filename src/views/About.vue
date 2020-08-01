<template>
  <div class="about">
    <div class="div1">1</div>
    <div class="div2">2</div>
  </div>
</template>
<script>
  import api from '@/api/home'
  import {instance} from '@/utils/plugin'
  export default{
    data(){
      return{

      }
    },
    methods: {

    },
    mounted(){
      // instance.show()
      this.$loading.show()
      let params = {
        a: [1,2,3]
      }
      let formData = new FormData()
      formData.append('a', 1)
      formData.append('b', 1)
      api.list().then(res => {

      })
      // setTimeout(() => this.$loading.hide(), 2000)
    }
  }
</script>
<style lang="scss" scoped>
  .div1{
    width: 100px;
    height: 100px;
    background: black;
    color: white;
    font-size: .24rem;
  }
  .div2{
    width: 2rem;
    height: 2rem;
    background: red;
    color: white;
  }
</style>
