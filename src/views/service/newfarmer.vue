<template>
    <div class="keyan">
        <div class="keyan__title">
            服务新农人
        </div>
        <div class="keyan__content">农业无人车服务保障节本增效 激发产业活力</div>
        <div class="keyan__footer"><img src="../../assets/xinnongren.png" alt="">
            <p>服务新农人</p>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.keyan {
    width: 80%;
    margin: 0 auto;

    .keyan__title {
        font-size: 24px;
        color: #1f1f1f;
        font-weight: bold;
        margin: 50px 0;
    }

    .keyan__content {
        font-size: 16px;
        color: #999999;
        margin-bottom: 70px;
    }

    p:nth-child(2) {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 90%;
        right: 30%;
        color: #eff2f4;
        font-size: 29px;
        font-weight: bold;
        text-shadow: 0px 0px 10px #000000;
    }

    p:hover {
        color: #ff6600;
    }
}
</style>