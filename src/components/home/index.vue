<template>
    <div class="home">
        <!-- 回到顶部 -->
        <el-backtop :bottom="100">
            <div style="
                    height: 100%;
                    width: 100%;
                    background-color: #f2f5f6;
                    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
                    text-align: center;
                    line-height: 40px;
                    color: #1fac9c;
                    border-radius: 50%;
                ">
                顶
            </div>
        </el-backtop>
        <div class="top">
            <div class="top1">
                <span class="top-left">欢迎来到樱紫农业科技！</span>
                <div class="top-right">
                    <span>农业无人车</span>
                </div>
            </div>
            <div class="center">
                <div class="center1">
                    <div>
                        <img src="../../assets/logo.png" alt="" class="img1" @click="$router.push('/index')"
                            style="cursor: pointer;" />
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom1">
                    <ul class="ullist">
                        <li @click="$router.push('/index')" :class="{ active: $route.path === '/index' }">首页</li>
                        <li @click="$router.push('/about')" :class="{ active: $route.path === '/about/jianjie' }">
                            关于樱紫
                        </li>
                        <li @click="$router.push('/ke'), console.log($route)"
                            :class="{ active: $route.path === '/ke/shzr' }">
                            可持续发展
                        </li>
                        <!-- <li @click="$router.push('/news')" :class="{ active: $route.path === '/news/action' }">新闻资讯
                        </li> -->
                        <li @click="$router.push('/service')"
                            :class="{ active: $route.path === '/service/government' }">服务中心
                        </li>
                        <li @click="$router.push('/person')" :class="{ active: $route.path === '/person' }">人才
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <div class="footer" style="margin-top: 100px;">
            <!-- <div class="footer_top">
            </div> -->
            <div class="footer_bottom">
                <div class="footer_bottom1">
                    <span>版权所有 © 2024 樱紫农业科技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>地址：河北省邢台经济开发区留村镇永安路以东，西南俎村南，六方村北地块&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>电话：0319-3138939&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router'
// const router = useRouter()
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;

    .top {
        width: 100%;
        height: 216px;
        background-color: #ffffff;
        border-bottom: 1px solid #e3e3e3;
        margin-bottom: 20px;

        .top1 {
            width: 60%;
            height: 39px;
            line-height: 39px;
            font-size: 14px;
            color: #1fac9c;
            margin: 0 auto;
            overflow: hidden;

            .top-left {
                color: #a2b116;
                font-size: 17px;
            }

            .top-right {
                width: 200px;
                height: 39px;
                float: right;
                font-weight: 900;
                font-size: 24px;
                // 文字倾斜
                // color: #1fac9c;
                color: #a2b116;
                text-align: center;
                font-style: italic;
                line-height: 39px;
            }
        }
    }

    .center {
        width: 100%;
        height: 150px;
        background-color: #f5f5f5;

        .center1 {
            width: 60%;
            height: 150px;
            margin: 0 auto;

            div {
                width: 225px;
                margin: 0 auto;

                .img1 {
                    width: 225px;
                    height: 150px;
                }
            }


        }

    }

    .bottom {
        width: 100%;
        height: 45px;
        background-color: #7ab498;
        border-bottom: 3px solid #ff8d40;

        .bottom1 {
            width: 60%;
            height: 45px;
            margin: 0 auto;

            .ullist {
                width: 100%;
                list-style: none;
            }

            .ullist li {
                float: left;
                width: 20%;
                height: 45px;
                line-height: 45px;
                text-align: center;
                font-size: 16px;
                color: #ffffff;


            }

            .ullist li:hover {
                background-color: #ff8d40;
            }

            .active {
                background-color: #ff8d40;
            }
        }
    }


    .footer {
        width: 100%;

        .footer_top {
            width: 100%;
            height: 240px;
            background-color: #1fac9c;
            border-bottom: 3px solid #ff8d40;
        }

        .footer_bottom {
            width: 100%;
            height: 60px;
            background-color: #2c3e50;

            .footer_bottom1 {
                width: 60%;
                height: 60px;
                margin: 0 auto;
                line-height: 60px;
                font-size: 14px;
                color: #ffffff;
                text-align: center;
            }
        }
    }
}
</style>