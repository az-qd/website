<template>
    <div class="index">
        <!-- <video src="https://oss-image.dfs168.com/market/274/wegom.mp4" width="100%" height="600px" loop
            autoplay></video> -->
        <!-- <div class="boss">
            <div class="img"><img src="../../assets/banner.png" style="width: 100%;height: 100%;" alt=""></div>
            <div class="text">
                <span style="color: #51b1a2; font-size: 28px;text-align: center;">谁是<span
                        style="color: #ff8d6b; font-size: 28px;">樱紫农业</span>?
                </span>
                <p
                    style="line-height: 2; color: #996767;margin-top: 20px;letter-spacing: 3px;text-indent: 32px; font-size: 20px;">
                    樱紫农业科技河北有限公司成立于2019年2月，注册资金600万元，是一家在以创新发展、融合发展、绿色发展为主线，以环境综合治理提升、建设美丽乡村为宗旨，高标准、高水平、高质量推进农业农村现代化的高科技企业。
                </p>
            </div>
        </div> -->
        <div style="position: relative;">
            <img src="../../assets/banner-service.jpg" alt="">
            <p style="position: absolute;top: 46%; color: white; font-size: 29px;font-weight: bold;right: 45%;">樱紫农业科技
            </p>
        </div>

        <div class="beijing">
            <div class="beijing1">
                <p class="p1">公司简介</p>
                <p class="p2">
                    樱紫农业科技河北有限公司成立于2019年2月，注册资金600万元，是一家在以创新发展、融合发展、绿色发展为主线，以环境综合治理提升、建设美丽乡村为宗旨，高标准、高水平、高质量推进农业农村现代化的高科技企业。
                    公司引进车厘子先进种植技术，建设“樱紫车厘子发展示范园”，公司目前有三个示范园：
                    其中“留村车厘子发展示范园”位于邢台经济开发区留村镇占地约150亩。“平乡车厘子发展示范园”位于邢台市平乡县，占地面积316亩，“广宗车厘子发展示范园”位于邢台市广宗县，占地面积160亩。
                </p>
                <div class="list">
                    <div class="li">
                        <p>3个</p>
                        <p>示范园</p>
                    </div>

                    <div class="li">
                        <p>150亩</p>
                        <p>留村车厘子发展示范园</p>
                    </div>

                    <div class="li">
                        <p>316亩</p>
                        <p>平乡车厘子发展示范园</p>
                    </div>

                    <div class="li">
                        <p>160亩</p>
                        <p>广宗车厘子发展示范园</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="containe">
            <div style="margin-bottom: 15px;">
                <span class="span1" style="margin-bottom: 50px;">公司文化</span>
                <span class="span2">&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            </div>
            <span class="spansm">为每一个农民的丰收，奉献自己的专业知识和青春年华，为中国农业的提升，孜孜不倦，奋斗终生！</span>

            <div class="three">
                <div style="display: flex;">
                    <div class="t1">
                        <div></div>
                    </div>
                    <div class="t2">
                        <p style="font-size: 22px;color: #a2b116;margin-top: 14px;">使命</p>
                        <p style="font-size: 17px;color: #a2b116;margin-top: 16px;">提升农业价值</p>
                    </div>
                </div>
                <div style=" display: flex;">
                    <div class="t3">
                        <div></div>
                    </div>
                    <div class="t4">
                        <p style="font-size: 22px;color: #a2b116;margin-top: 14px;">愿景</p>
                        <p style="font-size: 17px;color: #a2b116;margin-top: 16px;">孜孜不倦帮助每一位农民丰收</p>
                    </div>
                </div>

                <div style="display: flex;">
                    <div class="t5">
                        <div></div>
                    </div>
                    <div class="t6">
                        <p style="font-size: 22px;color: #a2b116;margin-top: 14px;">价值观</p>
                        <p style="font-size: 17px;color: #a2b116;margin-top: 3px;">客户第一，诚信担当，执行力，团队协作，激情，拼搏</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.index {
    width: 100vw;

    .boss {
        width: 60%;
        margin: 0 auto;
        display: flex;
        margin-top: 20px;
        margin-bottom: 20px;

        .img {
            width: 400px;
            height: 300px;
            background-color: #ccc;
            margin-right: 20px;
        }

        .text {
            width: 500px;
            margin: 0 auto;
        }
    }

    .beijing {
        width: 70%;
        margin: 0 auto;
        margin-top: 40px;

        .beijing1 {
            .p1 {
                font-size: 39px;
                color: #005c38;
                margin-bottom: 40px;
            }

            .p2 {
                font-size: 22px;
                color: #666666;
                line-height: 3;
                text-indent: 40px;
                margin-bottom: 100px;
            }

            .list {
                display: flex;
                justify-content: space-between;
                margin-bottom: 100px;

                .li {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p:nth-child(1) {
                        font-size: 48px;
                        color: #005c38;
                    }

                    p:nth-child(2) {
                        font-size: 22px;
                        color: #333333;
                    }
                }
            }
        }
    }

    .containe {
        width: 70%;
        height: 200px;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;

        div {
            .span1 {
                font-size: 39px;
                font-weight: 600;
                color: #333333;
                margin-right: 20px;
            }

            .span2 {
                width: 350px;
                height: 20px;
                border-bottom: 2px solid #005c38;
            }
        }

        .spansm {
            font-size: 22px;
            color: #666666;
            margin-top: 15px;
        }

        .three {
            margin-top: 60px;
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-between;
            margin-right: 10px;

            .t1,
            .t3,
            .t5 {
                width: 50px;
                height: 105px;
                border: 1px solid #d7d7d7;
                background-color: #ececec;

                div {

                    border-bottom: 50px solid transparent;
                    border-top: 50px solid transparent;
                    border-left: 50px solid #a2b116;
                }
            }

            .t2,
            .t4,
            .t6 {
                width: 380px;
                height: 105px;
                background-color: #f7f7f7;
                border: 1px solid #d7d7d7;
                text-align: center;

                p {
                    color: #005c38 !important;
                    font-weight: bold;
                }
            }

            .t2:hover {
                background-color: #666666;
            }

            .t4:hover {
                background-color: #666666;
            }

            .t6:hover {
                background-color: #666666;
            }
        }
    }
}
</style>