<template>
    <div class="government">
        <div class="government__title">
            服务政府
        </div>
        <div class="government__content" style="
        width: 1600px;">了解政府的支持和鼓励方向。‌通过研究最新的政策方向，‌公司可以调整自己的业务方向，‌确保与政府政策保持一致</div>
        <div class="government__footer"><img src="../../assets/zhengfu.png" alt="">
            <p>服务政府</p>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.government {
    width: 60%;
    margin: 0 auto;

    .government__title {
        font-size: 24px;
        color: #1f1f1f;
        font-weight: bold;
        margin: 50px 0;
    }

    .government__content {
        font-size: 16px;
        color: #999999;
        margin-bottom: 70px;
    }

    .government__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 20px;

        p:nth-child(2) {
            width: 100%;
            text-align: center;
            position: absolute;
            top: 50%;
            right: 0%;
            color: #eff2f4;
            font-size: 29px;
            font-weight: bold;
            text-shadow: 0px 0px 10px #000000;
        }


        p:hover {
            color: #ff6600;
        }
    }
}
</style>