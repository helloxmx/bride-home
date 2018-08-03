<template>
    <div>
        <ul v-if="isPcBall" class="my-ball">
            <li v-for="(item,index) in pcItems" :key="index" :class="item.type"></li>
        </ul>
        <ul v-else class="my-ball1">
            <li v-for="(item,index) in mobileItems" :key="index" :class="item.type"></li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['isPcBall'],
    data(){
        return {

            pcItems:[{
                type:'ball1'
            },{
                type:'ball2'
            },{
                type:'ball3'
            },{
                type:'ball4'
            },{
                type:'ball5'
            },{
                type:'ball6'
            },{
                type:'ball7'
            },{
                type:'ball8'
            },{
                type:'ball9'
            }],
            mobileItems:[{
                type:'ball1'
            },{
                type:'ball2'
            },{
                type:'ball3'
            },{
                type:'ball4'
            },{
                type:'ball5'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
.my-ball,.my-ball1{
    z-index: -1;
    top:0%;
    width: 100%;
    height: 100%;
    li{
        top:100%;
        position: relative;
        border-radius: 50%;
        box-shadow: 0px 8px 26px 0px rgba(214, 24, 91, 0.22);
        background: -webkit-linear-gradient(90deg, #EE3E72, #FF739E); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(90deg, #EE3E72, #FF739E); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(90deg, #EE3E72, #FF739E); /* Firefox 3.6 - 15 */
        background: linear-gradient(90deg, #EE3E72, #FF739E); /* 标准的语法（必须放在最后） */
    }
}
.my-ball{
    .ball1{
        width: 60px;
        height: 60px;
        top:20%;
        left: 40%;
    }
    .ball2{
        width: 24px;
        height: 24px;
        top:12%;
        left: 65%;
    }
    .ball3{
        width: 40px;
        height: 40px;
        top:33%;
        left: 10%;
    }
    .ball4{
        width: 30px;
        height: 30px;
        top:40%;
        left: 56%;
    }
    .ball5{
        width: 24px;
        height: 24px;
        top:30%;
        left: 94%;
    }
    .ball6{
        width: 60px;
        height: 60px;
        top:66%;
        left: 28%;
    }
    .ball7{
        width: 30px;
        height: 30px;
        top:70%;
        left:47%;
    }
}


.my-ball1{
    .ball1{
        width: 8vw;
        height: 8vw;
        top:14%;
        left: 18%;
    }
    .ball2{
        width: 4vw;
        height: 4vw;
        top:42%;
        left: 36%;
    }
    .ball3{
        width: 8vw;
        height: 8vw;
        top:56%;
        left: 85%;
    }
    .ball4{
        width: 6vw;
        height: 6vw;
        top:64%;
        left: 75%;
    }
    .ball5{
        width: 4vw;
        height: 4vw;
        top:88%;
        left: 85%;
    }
}


</style>
