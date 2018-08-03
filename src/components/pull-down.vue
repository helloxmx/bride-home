<template>
    <div class="pull-down" @click="pullDownFn">
        <img v-if="isMobile" class="load-down load-down-m" src="@/assets/img/common/icon_down.png" alt="">
        <img v-else class="load-down load-down-pc" src="@/assets/img/common/icon_down.png" alt="">
    </div>
</template>
<script>
export default {
    props:['isMobile'],
    methods:{
        pullDownFn(){
            let ths = this;

            ths.$emit('pullDownFn');
        }
    }
}
</script>

<style lang="scss" scoped>
//下拉箭头
.pull-down{
    width: 100%;
    text-align: center;
    position:relative;
    animation:mymove 2s infinite;
    -webkit-animation:mymove 2s infinite; /*Safari and Chrome*/
}
.load-down-m{
    width: 8vw;
}
@media (min-width: 1024px)and(max-width: 1366px){
    .load-down-pc{
        width:22px;
        height: 12px;
    }
}
@media (min-width: 1366px)and(max-width: 1680px){
    .load-down-pc{
        width:30px;
        height: 16px;
    }
}
@media (min-width: 1680){
    .load-down-pc{
        width:42px;
        height: 23px;
    }
}


@keyframes mymove
{
from {
    top:10px;
}
to {
    top:30px;
    opacity: 0.1;
}
}

@-webkit-keyframes mymove /*Safari and Chrome*/
{
from {top:10px;}
to {
    top:30px;
    opacity: 0.1;}
}
</style>
