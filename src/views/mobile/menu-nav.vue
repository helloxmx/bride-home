<template>
    <transition name="fade">
        <div class="bg-cover">
            <span @click="closeMenuFn">
                <img src="@/assets/img/mobile/icon_white_Close.png" alt="">
            </span>
            <ul class="items">
                <li @click="linkToMHomeFn">
                    <span :class="{'isFocus':isHome}">首页</span>
                </li>
                <li @click="linkToAboutUsFn">
                    <span :class="{'isFocus':!isHome}">关于我们</span>
                </li>
            </ul>
        </div>
    </transition>
</template>
<script>
export default {
    props:['isHome'],
    data(){
        return {

        }
    },
    methods:{
        //打开首页
        linkToMHomeFn(){
            let ths = this;

            ths.$router.push({name:'mobileHome'});
            ths.$emit('closeMenuFn');
        },
        //打开关于我们
        linkToAboutUsFn(){
            let ths = this;

            ths.$router.push({name:'mobileAboutUS'});
            ths.$emit('closeMenuFn');
        },
        //关闭导航
        closeMenuFn(){
            let ths = this;

            ths.$emit('closeMenuFn');
        }
    }
}
</script>

<style lang="scss" scoped>
.bg-cover{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.88);
    padding-top:14%;
    img{
        float: right;
        margin-right: 10%;
        width: 28px;
    }
    .items{
        margin-top: 44%;
        text-align: center;
        li{
            padding: 16px;
            span{
                padding: 4px 0px;
                font-size: 4.8vw;
                color: #ffffff;
            }
        }
        .isFocus{
            font-size: 4.8vw;
            font-weight: bold;
            border-bottom:2px solid #ffffff;
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
