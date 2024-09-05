<template>
    <div class="keyan">
        <div class="keyan__title">
            服务科研
        </div>
        <div class="keyan__content">无人车技术在智慧农业中可用于农田信息获取、精准施肥方面,提高农业生产的精准度和效率。</div>
        <div class="keyan__footer"><img src="../../assets/keyan.png" alt="">
            <p>科学研究</p>
            <p>创造农业无人车</p>
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

    .keyan__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 20px;

        p:nth-child(2) {
            width: 100%;
            text-align: center;
            position: absolute;
            top: 20%;
            left: 16%;
            color: #eff2f4;
            font-size: 29px;
            font-weight: bold;
            text-shadow: 0px 0px 10px #000000;
        }

        p:nth-child(3) {
            width: 100%;
            text-align: center;
            position: absolute;
            top: 75%;
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
}
</style>