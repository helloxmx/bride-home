<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <!-- 背景 -->
                <div class="bg-extra">
                    <div class="pink-circle"></div>
                    <h1 class="pink-circle-word">WEDDING！</h1>
                    <pink-bubble :isPcBall="true" :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                </div>
                <header-pc :isFocus="true"></header-pc>
                <content-one @pullDownFn="pullDownFn()"></content-one>
            </div>
            <div class="swiper-slide" v-for="(item,index) in articleList" :key="index">
                <div v-if="item.typeOne">
                    <pink-bubble :isPcBall="true" :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                    <div class="pc-content-two item-type-one">
                        <div class="two-one-left">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="two-one-right">
                            <h2>{{item.type}}</h2>
                            <div class="gray-line"></div>
                            <h3>{{item.title}}</h3>
                            <p>{{item.text}}</p>
                        </div>
                        <pull-down></pull-down>
                    </div>
                </div>
                <div v-else>
                    <pink-bubble :isPcBall="true" :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                    <div class="pc-content-two">
                        <div class="two-two-left">
                            <h2>{{item.type}}</h2>
                            <div class="gray-line"></div>
                            <h3>{{item.title}}</h3>
                            <p>{{item.text}}</p>
                        </div>
                        <div class="two-two-right">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <pull-down @pullDownFn="pullDownFn"></pull-down>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <pink-bubble :isPcBall="true" :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                <div class="pc-content-two">
                    <div class="two-one-left">
                        <img src="@/assets/img/common/phone_one.png" alt="">
                    </div>
                    <div class="two-one-right">
                        <h2>婚街</h2>
                        <div class="gray-line"></div>
                        <h3>筹备您的婚礼吧</h3>
                        <p>在这里您可以开始计划自己的婚礼了哦，有关于婚礼的一切都可以在这里开始计划起来，也有婚礼商品选择！</p>
                    </div>
                </div>
                <!-- 底部 -->
                <footer-pc></footer-pc>
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
import contentOne from '@/views/pc/content-one'
import pinkBubble from '@/components/pinkBubble';
import pullDown from '@/components/pull-down';
import localData from '@/assets/js/localData';
import headerPc from '@/views/pc/header';
import backTop from '@/views/pc/back-top';
import footerPc from '@/views/pc/footer'
export default {
    components:{
        pinkBubble,
        pullDown,//下拉箭头
        headerPc,
        backTop,
        contentOne,
        footerPc
    },
    data(){
        return {
            isthis:false,
            mySwiper:null,
            footerList:localData.footerList,
            articleList:localData.articleList
            // ,{
            //     imgUrl:require('@/assets/img/pc/defaultQRcode.png'),
            //     imgUrl2:require('@/assets/img/pc/icon_hover_QRcode.png'),
            //     name:'扫码下载',
            //     style:{
            //         backgroundImage: 'url(' + require('@/assets/img/pc/defaultQRcode.png') + ')'
            //     }
            // }
            // ]
        }
    },
    mounted(){
        let ths = this;

        ths.isthis = true;
        ths.mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            keyboardControl : true,
            mousewheelControl : true,
            onSlideChangeStart: function(swiper){
                ths.isthis = false;
                console.log(ths.isthis)
            },
            onSlideChangeEnd: function(swiper){
                ths.isthis = true; //切换结束时，告诉我现在是第几个slide
                console.log(ths.isthis)
            }
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

.content{
    margin: 80px 0px;
    position: relative;
    font-size: 1.6rem;
}
.swiper-container{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    width: 100%;
    height: 100%;
}

</style>
