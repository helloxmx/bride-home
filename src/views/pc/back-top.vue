<template>
    <div class="suspend-btn">
        <div class="suspend-ewm">
            <div class="ewm-png">
                <img src="@/assets/img/common/ewm.jpg" alt="">
                <div class="ewm-word">扫我下载App</div>
            </div>
            <div class="ewm-none">
                <img class="is-normal" src="@/assets/img/pc/button_default_QR.png" alt="">
                <img class="is-hover" src="@/assets/img/pc/button_hover_QR.png" alt="">
            </div>
        </div>
        <div class="back-top" @click="backTop()">
            <img class="is-normal" src="@/assets/img/pc/button_default_top.png" alt="">
            <img class="is-hover" src="@/assets/img/pc/button_hover_top.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        backTop(){
            let ths = this;

            ths.$emit('backTop');
        }

    }
}
</script>
<style lang="scss" scoped>
//悬浮二维码
.suspend-btn{
    position:fixed;
    bottom:130px;
    right:15%;
    z-index: 5;
    text-align: right;
    .suspend-ewm{
        position: relative;
        text-align: center;
        .ewm-png{
            display: none;
        }
        .ewm-none{
            .is-normal{
                display: inline-block;
            }
            .is-hover{
                display: none;
            }
        }
    }
    .suspend-ewm:hover{
        .ewm-png{
            position: absolute;
            top: 0px;
            width: 174px;
            height: 194px;
            right:calc(14% + 70px);
            display: inline-block;
            border-radius:10px;
            background: #ffffff;
            padding: 26px 26px 10px 26px;
            box-shadow: 0px 10px 10px 0px rgba(93, 97, 104, 0.1);
            border: solid 1px #f8c2d2;
            .ewm-word{
                font-family: PingFangSC-Regular;
                font-size: 20px;
                line-height: 20px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ee678f;
            }
            img{
                width: 120px;
            }
        }
        .ewm-none{
            .is-normal{
                display: none;
            }
            .is-hover{
                display: inline-block;
            }
        }
    }
    .back-top{
        .is-normal{
            display: inline-block;
        }
        .is-hover{
            display: none;
        }
    }
    .back-top:hover{
        .is-normal{
            display: none;
        }
        .is-hover{
            display: inline-block;
        }
    }
}
</style>
