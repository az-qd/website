<template>
    <div class="about">
        <div class="top">
            <div @click="$router.push('/about/jianjie')" :class="{ active: $route.path === '/about/jianjie' }">公司简介
            </div>
            <div @click="$router.push('/about/yuanjing')" :class="{ active: $route.path === '/about/yuanjing' }">愿景使命
            </div>
            <div @click="$router.push('/about/address')" :class="{ active: $route.path === '/about/address' }">办公地点
            </div>
        </div>
        <img src="../../assets/city.jpg" alt="" style="margin-top: 4px;">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.about {

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
            width: 228.36px;
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