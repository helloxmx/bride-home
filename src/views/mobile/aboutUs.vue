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
                        <div class="about-logo">
                           <h2>关于我们</h2>
                           <p>ABOUT US</p>
                        </div>
                        <div class="about-header-content">
                            <p>九合之网络科技有限公司，成立于2017年年底，目前处于初创时期，公司背景雄厚，初创团队在婚庆行业拥有十数年服务经验。旗下产品的【新娘GO】为中国结婚消费的新人提供婚礼，婚宴及其相关的婚嫁相关的全程服务，以全面，专业，可信赖，高互动的内容，多层次，多维度地影响最广泛的婚礼新人们，打造庞大的新人内容聚集的圈层和在线交易的婚嫁产品消费的营销平台!</p>
                            <div class="header-img">
                                <img src="@/assets/img/common/pic.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <pull-down :isMobile="true" @pullDownFn="pullDownFn"></pull-down>
                </div>
                <m-menu v-if="isMenu" @closeMenuFn="closeMenuFn"></m-menu>
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
import mMenu from '@/views/mobile/menu-nav';
import defMenu from '@/views/mobile/menu';
import mFooter from '@/views/mobile/footer';
import localData from '@/assets/js/localData';

export default {
    components:{
        pinkBubble,
        pullDown,//下拉箭头
        mMenu,
        defMenu,
        mFooter
    },
    data(){
        return {
            isthis:false,
            isMenu:false,
            mySwiper:null,
            isFocus:true,
            articleList:localData.articleList//本地数据
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
                console.log(ths.isthis)
            },
            onSlideChangeEnd: function(swiper){
                ths.isthis = true; //切换结束时，告诉我现在是第几个slide
                console.log(ths.isthis)
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
    .content-item{
        vertical-align: middle;
    }
    .page{
        width: 100%;
        height: 100%;
    }
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
    font-size: 4.0rem;
    opacity: 0.05;
}
.pink-circle-word2{
    position: absolute;
    top:52%;
    font-size: 4.0rem;
    opacity: 0.05;
}
.wapper{
    position: absolute;
    font-size: 1.8rem;
    top: 0;
    width: 100%;
    font-family: 'PingFang SC'
}
//头部
.my-header-m{
    .about-logo{
        width: 100%;
        position: relative;
        margin-top: 24px;
        margin-bottom: 18px;
        h2{
            font-size: 2.0rem;
            line-height: 2.0rem;
        }
        p{
            font-size: 1.8rem;
        }
    }
    .about-header-content{
        background: #ffffff;
        width: 90%;
        margin: auto;
        box-shadow: -4px 7px 23px 1px rgba(160, 160, 160, 0.16);
        border-radius: 10px;
        padding: 14px;
        p{
            color: #333333;
            font-size: 0.8rem;
            line-height: 1.2rem;
            text-align: left;
            margin-bottom: 14px;
        }
        .header-img{
            img{
                width:100%;
            }
        }
    }
}
</style>
