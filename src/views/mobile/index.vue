<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="page">
                <div>
                    <div class="pink-circle"></div>
                    <h1 class="pink-circle-word1">OUR DREAM</h1>
                    <h1 class="pink-circle-word2">WEDDING！</h1>
                    <pink-bubble :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                </div>
                <div class="wapper">
                    <div class="my-header-m">
                        <defMenu @openMenuFn="openMenuFn"></defMenu>
                        <div class="logo">
                            <div class="logo-left">
                                <img src="@/assets/img/icon/logo.png" alt="">
                            </div>
                            <div class="logo-right">
                                <img src="@/assets/img/icon/logoWhiteBride.png" alt="">
                                <span>OUR DREAM WEDDING</span>
                            </div>
                        </div>
                    </div>
                </div>
                <load-btn :isPink="true"></load-btn>
                <pull-down :isMobile="true" @pullDownFn="pullDownFn"></pull-down>
                <m-menu v-if="isMenu" :isHome="true" @closeMenuFn="closeMenuFn"></m-menu>
            </div>
        </div>
        <div class="swiper-slide" v-for="(item,index) in articleList" :key="index">
            <div class="page content-item">
                <pink-bubble :class="{'start':isthis,'end':!isthis}"></pink-bubble>
                <div class="mobile-item">
                    <img :src="item.imgUrl" alt="">
                    <h3>{{item.type}}</h3>
                    <p>{{item.title}}</p>
                </div>
                <pull-down :isMobile="true" @pullDownFn="pullDownFn"></pull-down>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="page">
                <pink-bubble :class="{'start':isthis,'end':!isthis}"></pink-bubble>
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

        ths.isthis = true;
        window.touchmove= function(event){
            // alert('momo')
        }
        ths.mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            followFinger:true,
            keyboardControl:true,
            mousewheelControl:true,
            iOSEdgeSwipeDetection:true,
            autoHeight:true,
            onSlideChangeStart: function(swiper){
                ths.isthis = false;
            },
            onSlideChangeEnd: function(swiper){
                ths.isthis = true; //切换结束时，告诉我现在是第几个slide
            }
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
    color: #ffffff;
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

}
.pink-circle{
    position: relative;
    top:0;
    left:0;
    z-index: -2;
    width: 100vw;
    height: 70vh;
    border-radius:0 0 100% 0%/0% 0% 60% 0%;
    background: -webkit-linear-gradient(90deg, #EE3E72, #FF739E); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(90deg, #EE3E72, #FF739E); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(90deg, #EE3E72, #FF739E); /* Firefox 3.6 - 15 */
    background: linear-gradient(90deg, #EE3E72, #FF739E); /* 标准的语法（必须放在最后） */
}
.pink-circle-word1{
    position: absolute;
    top: 60px;
    right:-108px;
    font-size: 60px;
    opacity: 0.05;
}
.pink-circle-word2{
    position: absolute;
    top:52%;
    font-size: 60px;
    opacity: 0.05;
}
.wapper{
    position: absolute;
    font-size: 1.8rem;
    top: 0;
    width: 100%;
    font-family: 'PingFang SC'
}

@media screen and(max-width: 480px){
    body{
        font-size: 12.8px;
    }
    //头部
.my-header-m{
    .logo{
        margin-top: 28px;
        .logo-left{
            img{
                width:68px;
                border-radius:10px;
                box-shadow: -4px 7px 23px 1px rgba(160, 160, 160, 0.16);
            }
        }
        .logo-right{
            margin-top: 3%;
            img{
                display: block;
                width: 96px;
                margin: auto;
            }
            span{
                display: block;
                margin: auto;
                font-family: PingFangSC-Regular;
                font-size: 6px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
            }
        }
    }
}
    .mobile-item{
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
            margin-top: 14px;
            font-size: 1.4rem;
            color:#333333;
        }
        p{
            font-size: 1.0rem;
            color: #aaaaaa;
        }
    }
}
@media (min-width: 480px) and(max-width: 768px){
    //头部
.my-header-m{
    .logo{
        margin-top: 28px;
        .logo-left{
            img{
                width:16vw;
                border-radius:10px;
                box-shadow: -4px 7px 23px 1px rgba(160, 160, 160, 0.16);
            }
        }
        .logo-right{
            margin-top: 3%;
            img{
                display: block;
                width: 24vw;
                margin: auto;
            }
            span{
                display: block;
                margin: auto;
                font-family: PingFangSC-Regular;
                font-size: 2.2vw;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
                margin-left: -36px;
            }
        }
    }
}
    body{
        font-size: 12.8px;
    }
    .mobile-item{
        margin-top: 6vh;
        img{
            display: block;
            margin: auto;
            width: 45%;
            -moz-box-shadow:0px 10px 10px 0px rgba(93, 97, 104, 0.2);
            -webkit-box-shadow:0px 10px 10px 0px rgba(93, 97, 104, 0.2);
            box-shadow:0px 10px 10px 0px rgba(93, 97, 104, 0.2);
            border-radius: 12% 12% 12% 12%/6% 6% 6% 6%;
        }
        h3{
            margin-top: 36px;
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
