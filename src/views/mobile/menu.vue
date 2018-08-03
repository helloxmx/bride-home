<template>
    <div class="menu" @click="openMenuFn">
        <img src="@/assets/img/mobile/icon_white_menu.png" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        //打开导航
        openMenuFn(){
            let ths = this;

            ths.$emit('openMenuFn');
        }
    }
}
</script>

<style lang="scss" scoped>
.menu{
    text-align: right;
    margin-top: 14%;
    margin-right: 10%;
    img{
        width: 22px;
    }
}
</style>
