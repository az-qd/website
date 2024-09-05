<template>
    <div class="person">
        <img src="../../assets/人才背景.jpg" alt="">
        <div class="one">
            <p class="title">人才理念</p>
            <p class="content">
                人才是企业发展的源源动力。托普云农格外重视人才的吸引与培养。公司建立
                <span>完善的人才内训计划与晋升机制</span>，为优秀人才创造良好的成长平台，帮助员工在工作生活中充分发挥自身价值。
            </p>
            <p class="smalltitle">员工关爱</p>
            <p class="contenttwo">
                樱紫科技立志打造一个共建共生共享的命运共同体，为樱紫科技职员提供职业成长平台，以发展为前提，以可持续为目的，关爱员工，推出
                <span>“爱心住房”、“人才培养计划”等福利政策</span>，帮助员工更好地工作生活，实现自我价值，享受人生。
            </p>
            <img src="../../assets/person.png" alt="">
        </div>
        <div class="two">
            <div class="con">
                <p class="title">员工福利</p>
                <p class="smalltitleone">员工生日会</p>
                <p class="contentone"> 公司每月组织员工集体生日会，为员工精心准备<span>茶歇、 生日礼物</span>，设置丰富的互动游戏 </p>
                <p class="smalltitletwo">节假日慰问</p>
                <p class="contenttwo"> 每逢中秋、圣诞、春节等节日，公司均 <span>为员工精心挑选节日礼品，并结合节日主题举行相关团建活动</span>，增加员工对企业的
                    <span>归属感</span>、同事一家亲的 <span>认同感</span>
                </p>
                <p class="smalltitlethree">公司团建</p>
                <p class="contentthree"> 公司定期 <span>组织全体员工旅游团建</span>，<span> 增强</span>员工团体协作意识，<span>集体荣誉感</span> </p>
                <p class="smalltitlefour">趣味运动会</p>
                <p class="contentfour"> 内容包括包 <span>饺子大赛、拔河比赛、趣味接力赛</span>等等，上下一心共同营造团结协作、和谐融洽、积极向上又充满爱的工作氛围 </p>
            </div>
            <img src="../../assets/福利.jpg" alt="" class="tupian">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.person {
    width: 100%;
    height: 100%;

    .one {
        width: 60%;
        margin: 0 auto;
        background-color: #fff;
        position: relative;
        margin-bottom: 150px;
        margin-top: 100px;

        .title {
            font-size: 30px;
            font-weight: 700;
            margin: 20px 0;
        }

        .content {
            width: 50%;
            color: #a69999;
            font-size: 18px;
            text-indent: 2em;
            line-height: 30px;
            margin-bottom: 20px;

            span {
                color: black;
            }
        }

        .smalltitle {
            font-size: 20px;
            font-weight: 400;
            margin: 20px 0;
        }

        .contenttwo {
            width: 50%;
            font-size: 16px;
            color: #a69999;
            text-indent: 2em;
            line-height: 30px;

            span {
                color: black;
            }
        }

        img {
            position: absolute;
            right: 0;
            top: 0;
            width: 500px;
            height: 350px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
        }
    }

    .two {
        width: 60%;
        margin: 0 auto;
        background-color: #fff;
        margin-bottom: 150px;
        position: relative;

        .tupian {
            width: 510px;
            height: 390px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            border-radius: 60px;
            position: absolute;
            top: 20%;
            right: 0;
        }

        .con {
            .title {
                font-size: 30px;
                font-weight: 700;
                margin: 20px 0;
            }

            .smalltitleone {
                font-size: 20px;
                font-weight: 400;
                margin: 20px 0;
            }

            .contentone {
                width: 50%;
            }

            .title {
                font-size: 30px;
                font-weight: 700;
                margin: 25px 0;
            }

            .smalltitleone {
                font-size: 20px;
                font-weight: 400;
                margin: 20px 0;
            }

            .contentone {
                width: 55%;
                color: #a69999;
                font-size: 18px;
                text-indent: 2em;
                line-height: 30px;
                margin-bottom: 20px;

                span {
                    color: black;
                }
            }

            .smalltitletwo {
                font-size: 20px;
                font-weight: 400;
                margin: 20px 0;
            }

            .contenttwo {
                width: 55%;
                font-size: 16px;
                color: #a69999;
                text-indent: 2em;
                line-height: 30px;

                span {
                    color: black;
                }
            }

            .smalltitlethree {
                font-size: 20px;
                font-weight: 400;
                margin: 20px 0;
            }

            .contentthree {
                width: 55%;
                color: #a69999;
                font-size: 18px;
                text-indent: 2em;
                line-height: 30px;
                margin-bottom: 20px;

                span {
                    color: black;
                }
            }

            .smalltitlefour {
                font-size: 20px;
                font-weight: 400;
                margin: 20px 0;
            }

            .contentfour {
                width: 55%;
                font-size: 16px;
                color: #a69999;
                text-indent: 2em;
                line-height: 30px;

                span {
                    color: black;
                }
            }
        }
    }
}
</style>