<template>
    <div class="yuanjing">
        <p>愿景使命</p>
        <div class="image">
            <div class="img1">
                <p>愿景</p>
                <p>成为全球领先的农业综合服务商</p>
            </div>
            <div class="img2">
                <p>使命</p>
                <p>用科技改变传统农业，用服务缔造美好生活</p>
            </div>
            <div class="img3">
                <p>价值观</p>
                <p>走正道，做正事。人为本，德为上。</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.yuanjing {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    p {
        width: 100%;
        height: 300px;
        line-height: 300px;
        text-align: center;
        font-weight: bold;
        font-size: 39px;
        color: #1f1f1f;
    }

    .image {
        width: 60%;
        height: 700px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        padding: 0 20px;

        .img1,
        .img2,
        .img3 {
            width: 1440px;
            height: 200px;
            margin-bottom: 20px;

            p:nth-child(1) {
                width: 100%;
                height: 100px;
                text-align: center;
                color: white;
                line-height: 100px;
            }

            p:nth-child(2) {
                width: 100%;
                height: 100px;
                text-align: center;
                color: #ff6600;
                line-height: 100px;
            }
        }

        .img1 {
            background-image: url("../../assets/3.png");
        }

        .img2 {
            background-image: url("../../assets/2.png");
        }

        .img3 {
            background-image: url("../../assets/1.png");
        }
    }

}
</style>