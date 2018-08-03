<template>
    <div class="pc-content-one">
        <div class="one-left">
            <h1>新娘Go</h1>
            <h2>OUR DREAM WEDDING</h2>
            <p>"新娘GO APP全新上线啦！
                <br>关于新娘GO全方位开启全新的婚礼策划攻略，婚礼知识，婚礼筹备等！让你们了解更多的婚礼攻略，定制个人的新娘日记，让每一对新人都全身心的筹备自己婚礼里面，一起打造属于你们的独一无二的婚礼！
                更多功能模块，婚礼筹备，新娘日记，从而实现您的婚礼梦！"
            </p>
            <!-- 首页内容下载app 按钮部分 -->
            <div class="load-app">
                <ul>
                    <li class="app-item" v-for="(item,index) in appList" :key="index">
                        <img class="appIcon1" :src="item.imgUrl" alt="">
                        <img class="appIcon2" :src="item.imgUrl2" alt="">
                        {{item.name}}
                    </li><li class="app-item">
                        <img class="appIcon1" src="@/assets/img/pc/defaultQRcode.png" alt="">
                        <img class="appIcon2" src="@/assets/img/pc/icon_hover_QRcode.png" alt="">
                        扫码下载
                        <div class="downQR">
                            <img class="appIcon3" src="@/assets/img/common/ewm.jpg" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="one-right">
            <img src="@/assets/img/common/phone_one.png" alt="">
        </div>
        <div class="pull-down">
            <pull-down @pullDownFn="pullDownFn"></pull-down>
        </div>
    </div>
</template>
<script>
import pullDown from '@/components/pull-down';
export default {
    components:{
        pullDown//下拉箭头
    },
    data(){
        return {
            appList:[{
                imgUrl:require('@/assets/img/pc/defaultApple.png'),
                imgUrl2:require('@/assets/img/pc/icon_hover_apple.png'),
                name:'App Store'
            },
            {
                imgUrl:require('@/assets/img/pc/defaultAndroid.png'),
                imgUrl2:require('@/assets/img/pc/icon_hover_Android.png'),
                name:'Android'
            }]
        }
    },
    methods:{
        pullDownFn(){
            let ths = this;

            ths.$emit('pullDownFn');
        }
    }
}
</script>

<style lang="scss" scoped>
.pc-content-one,.content-two{
    width: 1200px;
    margin: auto;
}
@media (min-width: 1024px)and(max-width: 1366px){
    .pc-content-one{
        margin-top: 60px ;
    }
}
@media (min-width: 1366px)and(max-width: 1440px){
    .pc-content-one{
        margin-top: 90px ;
    }
}
@media (min-width: 1440px){
    .pc-content-one{
        margin-top: 110px ;
    }
}
//第一部分内容
.pc-content-one{
    position: absolute;
    width: 100%;
    color: #ffffff;
    .one-left,.one-right{
        display: inline-block;
        vertical-align: top;
    }
    .one-left{
        width: 63%;
        margin-right: 28px;
        //下载app按钮
        .load-app{
            margin-top: 6%;
            .app-item{
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                background: rgba(255, 255, 255, 0.3);
                img{
                    vertical-align: middle;
                }
                .appIcon1{
                    display: inline-block;
                }
                .appIcon2{
                    display: none;
                }
                .downQR{
                    display: none;
                }
            }
            .app-item:hover{
                background: rgba(255, 255, 255,1);
                color: #ee678f;
                .appIcon1{
                    display: none;
                }
                .appIcon2{
                    display: inline-block;
                }
                .downQR{
                    margin-left:3px;
                    margin-top: 20px;
                    background: #ffffff;
                    padding: 20px;
                    display: block;
                    img{
                        width: 100%;
                    }
                }
            }

        }
    }

}
.pull-down{
    margin-top: 18px;
}
</style>
