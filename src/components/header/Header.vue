<template>
  <header class="header flex align-center justify-center">
    <slot name="left">
      <div class="icon-left flex-center">
        <van-icon name="arrow-left" size="20" />
      </div>
    </slot>
    <p class="ft-size-20">登录</p>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    default: ''
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  .header{
    height: 50px;
    background: #EBF3FA;
    position: relative;
    .icon-left{
      position: absolute;
      top: 8px;
      left: 10px;
      width: 32px;
      height: 32px;
      border-radius: 10px;
      border: 1px solid #E6EFF6;
      box-shadow: 5px 5px 8px #d1d9e6, -5px -5px 8px #fff;
      ::v-deep .van-icon{
        height: 20px;
      }
    }
  }
</style>