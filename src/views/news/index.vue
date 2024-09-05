<template>
    <div class="news">
        <div class="top">
            <div @click="$router.push('/news/action')" :class="{ active: $route.path === '/news/action' }">企业动态</div>
            <div @click="$router.push('/news/video')" :class="{ active: $route.path === '/news/video' }">视频中心</div>
        </div>
        <img src="../../assets/banner-video.jpg" alt="" style="margin-top: 4px;">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.news {
    .top {
        width: 60%;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        color: #666666;

        div {
            width: 400px;
            text-align: center;
        }

        div:hover {
            height: 100%;
            border-bottom: 4px solid #ff6600;
            color: #ff6600;
        }

        .active {
            height: 100%;
            border-bottom: 4px solid #ff6600;
            color: #ff6600;
        }
    }

}
</style>