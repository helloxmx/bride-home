<template>
    <div class="my-footer">
        <div class="footer-content">
            <div class="logo">
                <div class="logo-left">
                    <img src="@/assets/img/icon/logo.png" alt="">
                </div>
                <div class="logo-right">
                    <img src="@/assets/img/icon/logoBlackBride.png" alt="">
                    <span>OUR DREAM WEDDING</span>
                </div>
            </div>
            <div class="my-load">
                <load-btn :isPink="false"></load-btn>
            </div>

            <ul class="footer-list">
                <li v-for="(item,index) in footerList" :key="index">
                    <div class="img-box">
                        <img :src="item.imgUrl2" alt="">
                    </div>
                    <span>{{item.text2}}</span>
                </li>
            </ul>
        </div>
        <!-- 背景红圈 -->
        <div class="pink-circle-footer">
        </div>
    </div>
</template>
<script>
import pinkBubble from '@/components/pinkBubble';
import localData from '@/assets/js/localData';
import loadBtn from '@/views/mobile/load-btn';
export default {
    components:{
        loadBtn,
        pinkBubble
    },
    data(){
        return {
            footerList:localData.footerList
        }
    }
}
</script>
<style lang="scss" scoped>
.my-footer{
    position: absolute;
    width: 100%;
    height: 100%;
    color: #ffffff;
    padding:6%;
}
.pink-circle-footer{
    position: absolute;
    bottom:0;
    left:0;
    z-index: -2;
    width: 100vw;
    height: 100vw;
    border-radius:90% 0% 0 0 / 80% 0% 0% 0% ;
    background: -webkit-linear-gradient(0deg, #EE3E72, #FF739E); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(0deg, #EE3E72, #FF739E); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(0deg, #EE3E72, #FF739E); /* Firefox 3.6 - 15 */
    background: linear-gradient(0deg, #EE3E72, #FF739E); /* 标准的语法（必须放在最后） */

}

@media screen and(max-width: 480px){
    body{
        font-size: 12.8px;
    }
    .footer-content{
        position: relative;
        z-index: 1;
        margin-top: 16vh;
        .logo{
            .logo-left{
                display: inline-block;
                padding-right:14px;
                vertical-align: middle;
                img{
                    width:60px;
                    border-radius:10px;
                    box-shadow: -4px 7px 23px 1px rgba(160, 160, 160, 0.16);
                }
            }
            .logo-right{
                display: inline-block;
                text-align: left;
                vertical-align: middle;
                img{
                    width:82px;
                }
                span{
                    display: block;
                    font-family: PingFangSC-Regular;
                    font-size: 0.5rem;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #1b1b1b;
                    margin-top: -8px;
                }
            }
        }

    }
    .my-load{
        margin-top: 38vh;
    }
    .footer-list{
        margin-top: 8%;
        text-align: left;
        li{
            padding: 2px 0px;
        }
        .img-box,span{
            display: inline-block;
            vertical-align: top;
        }
        .img-box{
            width: 16px;
            margin-right: 6px;
            img{
                width: 100%;
            }
        }

        span{
            width: calc(100% - 28px);
            font-size: 0.8rem;
        }
    }

}
@media (min-width: 480px) and(max-width: 768px){
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
