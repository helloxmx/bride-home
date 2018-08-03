<template>
    <div class="h100">
        <div class="h100" v-if="vWidth >= 1024">
            <pc-index></pc-index>
        </div>
        <div class="h100" v-else>
            <mobile-index></mobile-index>
        </div>
    </div>
</template>

<script>
import pcIndex from '@/views/pc/main.vue';
import mobileIndex from '@/views/mobile/index.vue';
export default {
    components:{
        pcIndex,
        mobileIndex
    },
    data () {
        return {

            isshow:false,
            vWidth:document.body.clientWidth,
            bubbles:6
        }
    },
    mounted(){
        let ths = this;

        //设备分辨率发生改变时
        window.onresize = () =>{
            ths.vWidth = document.body.clientWidth;
        }


    },
    methods: {


    }
}
</script>
<style lang="scss" scoped>

</style>
