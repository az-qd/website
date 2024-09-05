<template>
    <div class="shzr">
        <p class="title">社会责任</p>
        <div class="one">
            <img src="../../assets/4.png" alt="" />
            <p class="title1">稳定就业</p>
            <p class="content1">截至2024年7月，公司每年提供超100个岗位，提供大量大学生就业机会，以及专业化、系统化、实战化的就业在学习，被授予邢台市大学生见习基地称号。</p>
        </div>

        <div class="two">
            <img src="../../assets/5.png" alt="" />
            <p class="title1">乡村振兴，助力脱贫攻坚</p>
            <p class="content1">
                樱紫农业利用数字化手段，助力乡村振兴，在政府管理端，打造信息化管理平台，对扶贫项目、扶贫资金、扶贫进度等通过数据进行呈现跟踪，推动扶贫工作公开有序推进；
                在产业发展端，促进一二三产融合，打造产供销一体化模式，促进农民增产增收，装满农民的布袋子，鼓起贫困农民的钱袋子。为农业可持续发展贡献科技力量。
            </p>
        </div>

        <div class="three">
            <img src="../../assets/6.png" alt="" />
            <p class="title1">助力植保病虫害防治</p>
            <p class="content1">
                推进全国绿色防控建设进程，“绿色防治”是以促进农作物安全生产，减少化学农药使用量为目标，采取生态控制、生物防治、物理防治、化学生态防治和科学用药等环境友好型措施来控制有害生物的有效行为。</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.shzr {
    .title {
        font-size: 39px;
        font-weight: 700;
        text-align: center;
        margin-top: 100px;
    }

    .one {
        width: 80%;
        height: 400px;
        margin: 0 auto;
        margin-top: 100px;

        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        .title1 {
            position: absolute;
            top: 26%;
            left: 5%;
            font-size: 22px;
            font-weight: bold;
        }

        .content1 {
            width: 600px;
            position: absolute;
            top: 39%;
            left: 5%;
            font-size: 18px;
            font-weight: bold;
            color: #999999;
            text-indent: 35px;
        }
    }

    .two {
        width: 80%;
        height: 400px;
        margin: 0 auto;
        margin-top: 100px;

        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        .title1 {
            position: absolute;
            top: 26%;
            right: 30%;
            font-size: 22px;
            font-weight: bold;
        }

        .content1 {
            width: 600px;
            position: absolute;
            top: 39%;
            right: 6%;
            font-size: 18px;
            font-weight: bold;
            color: #999999;
            text-indent: 35px;
        }
    }

    .three {
        width: 80%;
        height: 400px;
        margin: 0 auto;
        margin-top: 100px;

        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        .title1 {
            position: absolute;
            top: 26%;
            left: 5%;
            font-size: 22px;
            font-weight: bold;
        }

        .content1 {
            width: 600px;
            position: absolute;
            top: 39%;
            left: 5%;
            font-size: 18px;
            font-weight: bold;
            color: #999999;
            text-indent: 35px;
        }
    }
}
</style>