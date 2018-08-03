<template>
    <div class="load-box">
        <button v-if="isPink" :class="{'load-btn':true,'pink':isPink}">下载APP</button>
        <button v-else :class="{'load-btn':true,'white':!isPink}">下载APP</button>
    </div>
</template>
<script>
export default {
    props:['isPink'],
    data(){
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.load-box{
    width: 100%;
    text-align: center;
    margin-top: 6vw;
    .load-btn{
        margin: auto;
        width: 48vw;
        height: 12vw;
        font-size: 4.8vw;
        border: 0;
        border-radius: 7vw;
        }
    .pink{
        color: #ffffff;
        box-shadow: 0px 8px 30px 0px  rgba(238, 97, 139, 0.24);
        background: -webkit-linear-gradient(90deg, #EE3E72, #FF739E); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(90deg, #EE3E72, #FF739E); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(90deg, #EE3E72, #FF739E); /* Firefox 3.6 - 15 */
        background: linear-gradient(90deg, #EE3E72, #FF739E); /* 标准的语法（必须放在最后） */
    }
    .white{
        color: #333333;
        background: #ffffff;
        font-family: PingFangSC-Medium;
        font-weight: normal;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 2px;
        color: #ee678f;
    }
}
</style>

