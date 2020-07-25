<template>
<!-- 测试组件 -->
    <div>
      <!-- 使用外部组件 -->
      <view-item ></view-item>
      <view-item ></view-item>
      <view-item ></view-item>
    </div>

</template>
<script>
import Swiper from 'swiper'
import view from '../components/view'
export default{
    data(){
        return {
         
      }
    },
    computed:{
    },
    methods:{
     
    },
    components:{
      viewItem:view,
    },
    created(){
      
    },
    mounted(){
     
    }
}
</script>
<style scoped>
  
  
</style>