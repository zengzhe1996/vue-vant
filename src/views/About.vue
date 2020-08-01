<template>
  <div class="about">
    <!-- <div class="div1">1</div>
    <div class="div2">2</div> -->
  </div>
</template>
<script>
  import api from '@/api/home'
  export default{
    data(){
      return{

      }
    },
    methods: {

    },
    mounted(){
      this.$loading()
      let params = {
        a: [1,2,3]
      }
      let formData = new FormData()
      formData.append('a', 1)
      formData.append('b', 1)
      api.list().then(res => {
        console.log(res)
      })
      setTimeout(() => this.$loading.close(), 2000)
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
