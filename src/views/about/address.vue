<template>
    <div class="address">
        <div class="youxia">
            <p>办公地点</p>
            <div class="didian">
                <div class="hb">河北省邢台市</div>
                <div class="ad">地址：河北省邢台经济开发区留村镇永安路以东，西南俎村南，六方村北地块</div>
                <div class="phone">联系方式：0319-3138939</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.address {
    width: 60%;
    height: 100%;
    margin: 0 auto;

    .youxia {
        margin-bottom: 200px;

        p {
            width: 100%;
            height: 200px;
            line-height: 200px;
            text-align: center;
            font-weight: bold;
            font-size: 39px;
            color: #1f1f1f;
        }

        .didian {
            width: 60%;
            height: 200px;
            box-shadow: 0px 0px 10px #ccc;
            margin-bottom: 20px;
            margin: 0 auto;

            .hb {
                color: #878787;
                font-size: 26px;
                width: 100%;
                padding-bottom: 10px;
                border-bottom: 1px solid #878787;
                text-align: center;
                margin-bottom: 20px;
                padding-top: 20px;
            }

            .ad {
                width: 100%;
                text-align: center;
                color: #878787;
                margin-bottom: 20px;
            }

            .phone {
                width: 100%;
                text-align: center;
                color: #878787;
            }
        }
    }

}
</style>