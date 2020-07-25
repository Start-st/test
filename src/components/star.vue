<template>
 <div class="p8imgdiv">
   <img class="p8img2"  v-for="(site2,index) in site2s" :key="index"  :src="site2.imgUrl">             
</div>
  
</template>
<script>
export default {
    data(){
        return{
        site2s:[
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星 (1).png")},
      ],
        }
    }
}
</script>

<style>
.p8img2{
  height: 15px;
  width: 15px;
}
</style>