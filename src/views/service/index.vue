<template>
    <div class="service">
        <div class="top">
            <div @click="$router.push('/service/government')"
                :class="{ active: $route.path === '/service/government' }">服务政府
            </div>
            <div @click="$router.push('/service/keyan')" :class="{ active: $route.path === '/service/keyan' }">服务科研
            </div>
            <div @click="$router.push('/service/newfarmer')" :class="{ active: $route.path === '/service/newfarmer' }">
                服务新农人
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.service {
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