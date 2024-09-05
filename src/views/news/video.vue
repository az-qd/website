<template>
    <div class="news">
        <div class="contanier">
            <video src="../../assets/企业宣传.mp4" controls muted></video>
            <video src="../../assets/企业宣传.mp4" controls muted></video>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.news {
    .contanier {
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 37px;
        margin-bottom: 20px;

        video {
            width: 550px;
            height: 350px
        }
    }
}
</style>