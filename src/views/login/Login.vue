<template>
  <div class="flex-column h-100 wrapper">
    <my-header></my-header>
    <div class="flex-1 container flex-column">
      <h1 class="text-right welcome">欢迎您！</h1>
      <span class="text-right mg-top-15 c-gray pd-row-10">使用账号登录或创建账户，即可享</span>
      <span class="text-right mg-top-10 c-gray pd-row-10">受更多的服务体验</span>
      <div class="flex flex-between btn-box pd-row-10 mg-top-20">
        <button class="btn">创建新账户</button>
        <button class="btn login-btn c-white">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/header/Header'
export default {
  components: {
    MyHeader
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  .wrapper{
    .container{
      padding-top: 350px;
      .welcome{
        font-size: 26px;
        font-weight: 500;
      }
      .btn-box{
        .btn{
          width: 45%;
          height: 45px;
          background: transparent;
          border: 1px solid #E6EFF6;
          border-radius: 10px;
          box-shadow: 5px 5px 8px #d1d9e6, -5px -5px 8px #fff;
        }
        .login-btn{
          background: linear-gradient(to right, #8990FC, #454FFA);
        }
      }
    }
  }
  .c-gray{
    color: $c-gray;
  }
</style>