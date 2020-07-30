<template>
    <div class="wrap">
        <div class="header"></div>
        <div class="main">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad">
                    <van-cell  v-for="item in list" :key="item" :title="item" />
                </van-list>
            </van-pull-refresh>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data(){
        return{
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        }
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                this.list = [];
                this.refreshing = false;
                }

                for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 40) {
                this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .wrap{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header, .footer{
        height: 1rem;
        background: red;
        flex-shrink: 0;
    }
    .main{
        flex: 1;
        overflow: auto;
    }
</style>
