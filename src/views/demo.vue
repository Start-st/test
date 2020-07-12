<template>
  <div class="slide-show" @mouseover="cleanInv" @mouseout="invIndex">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <!--设置动画的过度，图片滚动效果-->
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src"/>
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src"/>
        </transition>
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(preIndex)"></li>
      <li v-for="(item,index) in slides" @click="goto(index);">
        <a :class="{on:index===nowIndex}">{{index+1}}</a>
      </li>
      <li @click="goto(nextIndex)">></li>
    </ul>
  </div>
</template>
<script>
export default{
    data(){
        return {
            nowIndex:0,
            isShow:true
      }
    },
    computed:{//通过计算属性控制nowIndex值，来实现向前向后翻页
      preIndex(){
        if(this.nowIndex === 0){
          return this.slides.length-1;
        }else{
          return this.nowIndex-1;
        }
      },
      nextIndex(){
        if(this.nowIndex === this.slides.length-1){
          return 0;
        }else{
          return this.nowIndex+1;
        }
      }
    },
    methods:{
      goto(index){
        this.isShow = false;
        //延迟10ms执行下一步
        setTimeout(()=>{
          this.isShow = true;
          this.nowIndex = index;
        },10)
      },
      invIndex(){
        this.invId = setInterval(()=>{
          // console.log(123);
          this.goto(this.nextIndex);
        },this.speed);
      },
      cleanInv(){
        clearInterval(this.invId);//清除自动轮播
      }
    },
    mounted(){
      console.log(this.slides);
      this.invIndex();//自动轮播
    }
}
</script>
<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);/*transition不支持用left控制*/
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
  }
</style>