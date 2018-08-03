<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="page">
                <pink-bubble :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                <pull-down :isMobile="true" @pullDownFn="pullDownFn"></pull-down>
            </div>
        </div>
        <div class="swiper-slide" v-for="(item,index) in articleList" :key="index">
            <div class="page content-item">
                <pink-bubble :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                <div class="item">
                    <img :src="item.imgUrl" alt="">
                    <h3>{{item.type}}</h3>
                    <p>{{item.title}}</p>
                </div>
                <pull-down :isMobile="true" @pullDownFn="pullDownFn"></pull-down>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="page">
                <m-footer></m-footer>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import pinkBubble from '@/components/pinkBubble';
import pullDown from '@/components/pull-down';
import mMenu from '@/views/mobile/menu-nav';//导航页
import defMenu from '@/views/mobile/menu';
import mFooter from '@/views/mobile/footer';
import loadBtn from '@/views/mobile/load-btn';
import localData from '@/assets/js/localData';

export default {
    components:{
        pinkBubble,
        pullDown,//下拉箭头
        mMenu,
        defMenu,
        loadBtn,
        mFooter
    },
    data(){
        return {
            isthis:false,
            isMenu:false,
            mySwiper:null,
            isFocus:true,
            articleList:localData.articleList,//本地数据
            footerList:localData.footerList
        }
    },
    mounted(){
        let ths = this;

        ths.isthis=true;
        window.touchmove= function(event){
            // alert('momo')
        }
        ths.mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            followFinger:true,
            iOSEdgeSwipeDetection:true,
            autoHeight:true,
            onSlideChangeStart: function(swiper){
                ths.isthis = false;
                console.log(ths.isthis)
            },
            onSlideChangeEnd: function(swiper){
                ths.isthis = true; //切换结束时，告诉我现在是第几个slide
                console.log(ths.isthis)
            }
            // ,
            // onTouchEnd: function(swiper){
            //     ths.isthis = false; //切换结束时，告诉我现在是第几个slide
            // }
        });

    },
    methods:{
        //打开菜单
        openMenuFn(){
            let ths = this;

            ths.isMenu = true;
        },
        //关闭菜单
        closeMenuFn(){
            let ths = this;

            ths.isMenu = false;
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
    width: 100%;
    height: 100%;
}
.swiper-wrapper{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    width: 100%;
    height: 100%;
    text-align: center;
    color: #333;
    .page{
        width: 100%;
        height: 100%;
    }
    .content-item{
        vertical-align: middle;
    }
    // .page{
    //     width: 100%;
    //     height: 100%;
    // }
    .item{
        margin-top: 6vh;
        img{
            display: block;
            margin: auto;
            width: 56%;
            -moz-box-shadow:0px 10px 10px 0px rgba(93, 97, 104, 0.2);
            -webkit-box-shadow:0px 10px 10px 0px rgba(93, 97, 104, 0.2);
            box-shadow:0px 10px 10px 0px rgba(93, 97, 104, 0.2);
            border-radius: 12% 12% 12% 12%/6% 6% 6% 6%;
        }
        h3{
            margin-top: 8px;
            font-size: 2.0rem;
            color:#333333;
        }
        p{
            font-size: 1.4rem;
            color: #aaaaaa;
        }
    }
}
</style>
