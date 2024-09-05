<template>
    <div class="ke">
        <div class="top">
            <div @click="$router.push('/ke/shzr')" :class="{ active: $route.path === '/ke/shzr' }">社会责任
            </div>
            <div @click="$router.push('/ke/kcxfz')" :class="{ active: $route.path === '/ke/kcxfz' }">可持续发展
            </div>
        </div>
        <img src="../../assets/发展.png" alt="" style="margin-top: 4px;">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.ke {

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
            width: 50%;
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