<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <!-- 背景 -->
                <div class="bg-extra">
                    <div class="pink-circle"></div>
                    <h1 class="pink-circle-word">WEDDING！</h1>
                </div>
                 <!-- 顶部 -->
                <header-pc :isFocus="false"></header-pc>
                <div class="content-about">
                    <div class="content-one">
                        <h1>关于我们</h1>
                        <h2>ABOUT US</h2>
                        <p>九合之网络科技有限公司，成立于2017年年底，目前处于初创时期，公司背景雄厚，初创团队在婚庆行业拥有十数年服务经验。旗下产品的【新娘GO】为中国结婚消费的新人提供婚礼，婚宴及其相关的婚嫁相关的全程服务，以全面，专业，可信赖，高互动的内容，多层次，多维度地影响最广泛的婚礼新人们，打造庞大的新人内容聚集的圈层和在线交易的婚嫁产品消费的营销平台！ 更多功能模块，婚礼筹备，新娘日记，从而实现您的婚礼梦！
                        </p>
                    </div>
                    <div class="content-two">
                        <ul>
                            <li v-for="(item,index) in imgList" :key="index">
                                <img :src="item.imgUrl" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <footer-pc class="about-footer"></footer-pc>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
        <back-top @backTop="backTop"></back-top>
    </div>
</template>
<script>
import pullDown from '@/components/pull-down';
import headerPc from '@/views/pc/header';
import backTop from '@/views/pc/back-top';
import footerPc from '@/views/pc/footer'
export default {
    components:{
        pullDown,//下拉箭头
        headerPc,
        backTop,
        footerPc
    },
    data(){
        return {
            mySwiper:null,
            isFocus:false,
            imgList:[
                {
                    imgUrl:require('@/assets/img/common/1.jpg')
                },
                {
                    imgUrl:require('@/assets/img/common/2.jpg')
                },
                {
                    imgUrl:require('@/assets/img/common/3.jpg')
                },
                {
                    imgUrl:require('@/assets/img/common/4.jpg')
                },
                {
                    imgUrl:require('@/assets/img/common/5.jpg')
                },
                {
                    imgUrl:require('@/assets/img/common/6.jpg')
                },
                {
                    imgUrl:require('@/assets/img/common/7.jpg')
                },
                {
                    imgUrl:require('@/assets/img/common/8.jpg')
                }
            ]
        }
    },
    mounted(){
        let ths = this;

        ths.mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            keyboardControl : true,
            mousewheelControl : true
        });
    },
    methods:{
        //回到顶部
        backTop() {
            let ths = this;

            ths.mySwiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
        },
        //下拉
        pullDownFn(){
            let ths = this;

            ths.mySwiper.slideNext();
        }

    }
}
</script>

<style lang="scss" scoped>
.swiper-container{
    height: 100%;
}
.swiper-wrapper{
    height: 100%;
}
.swiper-slide{
    height: 100%;
}
.content{
    margin: 80px 0px;
    position: relative;
    font-size: 1.6rem;
}
.about-footer{
    position: absolute;
    bottom:0;
    z-index: 8;
}

</style>
