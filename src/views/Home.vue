<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
}
</script>
<style lang="scss" scoped>
    .home{
        width: 100%;
        height: 100%;
        // display: flex;
        // flex-direction: column;
    }
    .main{
        // flex: 1;
    }
    header,footer{
        height: 50px;
        background: red;
        flex-shrink: 0;
    }
</style>
