<template>
     <div class="pc-footer-box">
        <div class="footer-line"></div>
        <footer>
            <ul class="">
                <li v-for="(item,index) in footerList" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <span>{{item.text}}</span>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>

import localData from '@/assets/js/localData';
export default {
    data(){
        return {
            footerList:localData.footerList
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
