<template>
    <!-- 顶部 -->
    <div class="my-header-box">
        <div class="my-header">
            <div class="logo">
                <img src="@/assets/img/icon/logo.png" alt=""><img src="@/assets/img/icon/logoWhiteBride.png" alt="">
            </div>
            <div class="menu">
                <ul>
                    <li :class="{'focus-line':isFocus}" @click="linkToHome">
                    <span>首页</span>
                    </li>
                    <li :class="{'focus-line':!isFocus}" @click="linkToAboutUs">
                        <span>关于我们</span>
                    </li>
                </ul>
            </div>
            <div class="customer-login">
                <div class="customer-btn">
                    商户登录
                </div>
            </div>
        </div>
        <div class="head-line"></div>
    </div>
</template>
<script>
export default {
    props:['isFocus'],
    data(){
        return {
        }
    },
    methods:{
        linkToHome(){
            let ths = this;

            ths.$router.push({name:'main'});

        },
        linkToAboutUs(){
            let ths = this;

            ths.$router.push({name:'aboutUs'});

        }
    }
}
</script>
<style lang="scss" scoped>
//头部

@media (min-width: 1024px)and(max-width: 1440px) {
    .my-header{
        width: 100%;
        height: 78px;
        padding-top: 14px;
        .logo{
            width: calc(100% - 380px);
            display: inline-block;
            img:first-child{
                width: 46px;
            }
            img:nth-child(2){
                width: 76px;
                margin: 0 0 4px 12px;
            }
        }
        .menu{
            display: inline-block;
            ul{
                width: 100%;
                li{
                    display: inline-block;
                    margin-right:50px;
                    text-align: right;
                    cursor: pointer;
                    span{
                        padding: 10px 0px;
                        font-size:14px;;
                    }
                }
                .focus-line{
                    span{
                        border-bottom: 3px solid #ffffff;
                    }
                }
            }
        }
        .customer-login{
            margin-left: 14px;
            vertical-align: middle;
            display: inline-block;
            padding-bottom: 14px;
            .customer-btn{
                font-size:14px;
                border: 1px solid #ffffff;
                border-radius:4px;
                text-align: center;
                padding: 2px 8px;
                &:hover{
                    background: #ffffff;
                    color: #ee678f;
                }
            }
        }
    }
}
// @media (min-width: 1440px)and(max-width: 1680px) {
//     .my-header{
//         width: 100%;
//         height: 96px;
//         padding-top: 18px;
//         .logo{
//             width: 47%;
//             display: inline-block;
//             img:first-child{
//                 width: 58px;
//             }
//             img:nth-child(2){
//                 width: 92px;
//                 margin: 0 0 4px 12px;
//             }
//         }
//         .menu{
//             display: inline-block;
//             width:33%;
//             ul{
//                 width: 100%;
//                 li{
//                     display: inline-block;
//                     width: 98px;
//                     text-align: center;
//                     cursor: pointer;
//                     span{
//                         padding: 10px 0px;
//                         font-size:1.4rem;
//                     }
//                 }
//                 .focus-line{
//                     span{
//                         border-bottom: 2px solid #ffffff;
//                     }
//                 }
//             }
//         }
//         .customer-login{
//             margin-left: 14px;
//             vertical-align: middle;
//             display: inline-block;
//             padding-bottom: 14px;
//             .customer-btn{
//                 font-size:1.4rem;
//                 border: 1px solid #ffffff;
//                 border-radius:6px;
//                 text-align: center;
//                 padding: 2px 8px;
//                 &:hover{
//                     background: #ffffff;
//                     color: #ee678f;
//                 }
//             }
//         }
//     }
// }
// @media (min-width: 1680px)and(max-width: 1919px) {
//     .my-header{
//         width: 100%;
//         padding-top: 24px;
//         .logo{
//             width: 47%;
//             display: inline-block;
//             img:first-child{
//                 width: 58px;
//             }
//             img:nth-child(2){
//                 width: 92px;
//                 margin: 0 0 4px 12px;
//             }
//         }
//         .menu{
//             display: inline-block;
//             width:33%;
//             ul{
//                 width: 100%;
//                 li{
//                     display: inline-block;
//                     width: 98px;
//                     text-align: center;
//                     cursor: pointer;
//                     span{
//                         padding: 10px 0px;
//                         font-size:1.4rem;
//                     }
//                 }
//                 .focus-line{
//                     span{
//                         border-bottom: 2px solid #ffffff;
//                     }
//                 }
//             }
//         }
//         .customer-login{
//             margin-left: 14px;
//             vertical-align: middle;
//             display: inline-block;
//             padding-bottom: 14px;
//             .customer-btn{
//                 font-size:1.4rem;
//                 border: 1px solid #ffffff;
//                 border-radius:6px;
//                 text-align: center;
//                 padding: 2px 8px;
//                 &:hover{
//                     background: #ffffff;
//                     color: #ee678f;
//                 }
//             }
//         }
//     }
// }
@media (min-width: 1440px)and(max-width: 1680px){
    .my-header{
        width: 1200px;
        margin: 0 auto;
        padding: 13px 0px 0px 0px;
        .logo{
            width: 40%;
            display: inline-block;
            img:first-child{
                width: 50px;
                height: 50px;
            }
            img:nth-child(2){
                width: 82px;
                margin: 0 0 4px 16px;
            }
        }
        .menu{
            width: calc(60% - 158px);
            display: inline-block;
            text-align: right;
            ul{
                width: 100%;
                li{
                    display: inline-block;
                    margin-right: 85px;
                    text-align: center;
                    cursor: pointer;
                    span{
                        font-size:18px;
                        display: inline-block;
                        line-height: 16px;
                    }
                }
                .focus-line{
                    span{
                        border-bottom: 4px solid #ffffff;
                    }
                }
            }
        }
        .customer-login{
            display: inline-block;
            .customer-btn{
                width: 120px;
                height: 40px;
                line-height: 40px;
                font-size:18px;
                border: 1px solid #ffffff;
                border-radius:4px;
                text-align: center;
                &:hover{
                    background: #ffffff;
                    color: #ee678f;
                }
            }
        }
    }

}
@media (min-width: 1680px){
    .my-header{
        width: 1200px;
        margin: 0 auto;
        padding: 13px 0px 0px 0px;
        .logo{
            width: 40%;
            display: inline-block;
            img:first-child{
                width: 50px;
                height: 50px;
            }
            img:nth-child(2){
                width: 82px;
                margin: 0 0 0 16px;
            }
        }
        .menu{
            width: calc(60% - 158px);
            display: inline-block;
            text-align: right;
            ul{
                width: 100%;
                li{
                    display: inline-block;
                    margin-right: 85px;
                    text-align: center;
                    cursor: pointer;
                    span{
                        font-size:18px;
                        display: inline-block;
                        line-height: 40px;
                    }
                }
                .focus-line{
                    span{
                        border-bottom: 4px solid #ffffff;
                    }
                }
            }
        }
        .customer-login{
            display: inline-block;
            .customer-btn{
                width: 120px;
                height: 40px;
                line-height: 40px;
                font-size:18px;
                border: 1px solid #ffffff;
                border-radius:4px;
                text-align: center;
                &:hover{
                    background: #ffffff;
                    color: #ee678f;
                }
            }
        }
    }

}
.my-header-box{
    width: 100%;
    position: relative;
    top: 0px;
    color: #ffffff;
    //头部下划线
    .head-line{
        height: 1px;
        background-color: #eeeeee;
        opacity: 0.2;
    }
}
</style>
