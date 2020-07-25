<template>
  <div class="top">
    <div class="top1">
      <p class="p1">{{p1}}</p>
      <p class="p2">{{p2}}</p>
      <p class="p3">{{p3}}</p>
      <star-Item class="star"></star-Item>
      <div>
      <p class="p4">{{p4}}</p>
      <p class="p5">{{p5}}</p>
      <div class="p6-div">
          <p class="p6" @click="todemo4">{{p6}}</p>
      </div>
      </div>
    </div>
    <div class="top2">
        <swipe style="height:200px">
          <swipe-item  v-for="(site,index) in sites" :key="index" ><img class="swipe" :src="site.imgUrl" >
        </swipe-item>
      </swipe>
    </div>
    <div class="top3">
      <p><img :src="imgurl1"></p>
      <p class="p7">{{p7}}</p>
      <p class="p8">{{p8}}</p>
    </div>
    <div class="top4">
      <p><img :src="imgurl2"></p>
      <p class="p9">{{p9}}</p>
    </div>
    <div class="top5">
      <div class="top5-1">
        <p class="p10">{{p10}}</p>
        <p class="p11">{{p11}}</p>
        <p class="p12">{{p12}}</p>
      </div>
      <div class="top5-2">
        <ul class="slide-box">
          <li class="slide-item" v-for="(item,index) in items" :key="index">
            <img class="img1" :src="item.imgUrl" >
            <p>{{p13}}</p>
            <img class="img2" :src="imgUrl3">
          </li>         
        </ul>        
      </div>
    </div>
    <div class="top6">
      <div class="top6-1">
        <p class="p14">{{p14}}</p>
        <p class="p15">{{p15}}</p>
        <p class="p16">{{p16}}</p>
      </div>
      <div class="top6-2" >
        <div class="top6-2-1">
        <div>
          <img :src="imgUrl4">
          <p>{{name1}}</p>
        </div>
        <div>
          <img :src="imgUrl5">
          <p>{{name1}}</p>
        </div>
        <div>
          <img :src="imgUrl6">
          <p>{{name2}}</p>
        </div>
        <div>
          <img :src="imgUrl7">
          <p>{{name3}}</p>
        </div>
        <div>
          <img :src="imgUrl8">
          <p>{{name4}}</p>
        </div>
        <div>
          <img :src="imgUrl9">
          <p>{{name5}}</p>
        </div>
        <div>
          <img :src="imgUrl10">
          <p>{{name6}}</p>
        </div>
        </div>
      </div>
    </div>

  </div>
  
</template>
<script>
import star from '../components/star'
export default{
    data(){
        return {
          p1:'1.5Food(丹溪北路)',
          p2:'留言',
          p3:'义乌市丹溪北路18号',
          p4:'平均价格',
          p5:'￥26.00',
          p6:'加入清单',
          p7:'9:00am-20:00pm',
          p8:'开业时间',
          p9:'1366454389 / 0579-85123456',
          p10:'热门',
          p11:' ·',
          p12:'6种',
          p13:'菜品名称',
          p14:'优秀人的选择',
          p15:' ·',
          p16:'7种',
          imgurl1:require("../assets/时间.png"),
          imgurl2:require("../assets/电 话.png"),
          imgUrl3:require("../assets/HOT (1).png"),
          imgUrl4:require("../assets/蔬菜沙拉.png"),
          name1:'蔬菜沙拉餐',
          imgUrl5:require("../assets/蔬菜沙拉2.png"),
          imgUrl6:require("../assets/食物,面条.png"),
          name2:'面条',
          imgUrl7:require("../assets/肉 (1).png"),
          name3:'肉食',
          imgUrl8:require("../assets/饮料.png"),
          name4:'饮料',
          imgUrl9:require("../assets/面包.png"),
          name5:'全麦面包',
          imgUrl10:require("../assets/三明治.png"),
          name6:'三明治',



          sites:[
            {imgUrl:require("../assets/3.jpg")},
            {imgUrl:require("../assets/2.jpg")},
            {imgUrl:require("../assets/1.jpg")},
            {imgUrl:require("../assets/4.jpg")},
        ],
         items:[
            {imgUrl:require("../assets/I6@[E(NO@HPLPT$VXA[K2QE.png")},
            {imgUrl:require("../assets/CU2IH{9)Z4S9BQ_8L$[5COY.png")},
            {imgUrl:require("../assets/[$O99PP8JPBB}I338(10SXW.png")},
            {imgUrl:require("../assets/33.jpg")},
            {imgUrl:require("../assets/44.jpg")},
            {imgUrl:require("../assets/55.jpg")},
            {imgUrl:require("../assets/66.jpg")},
            {imgUrl:require("../assets/77.jpg")},   
        ],
       
       
      }
    },
    computed:{
      
    },
    methods:{
     todemo4(){
       this.$router.push({path:'/demo4'})
     }
    },
     components:{
      starItem:star,
    },
    created(){
      
    },
    mounted(){
    }
}
</script>
<style scoped>
.top1{
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
}
.p1{
  font-size:20px;
  font-weight: bold;
   position: absolute;
   display: flex;
}
.p2{
  color: rgb(179, 177, 177);
  font-size: 15px;
   font-weight: bold;
   position: relative;
    margin-left:auto;
   display: flex;
   width: 35px;
   margin-top: 5px;

}
.p3{
 display: flex;
  position: relative;
  margin-top: 5px;
  color: rgb(179, 177, 177);
  font-size: 15px;
   font-weight: bold;
}
.p4{
  width: 100px;
  margin-top: 10px;
  font-weight: bold;
  display: flex;
  position: absolute;
}
.p5{
margin-top: 35px;
font-weight: bold;
display: flex;
position: absolute;
}
.p6-div{
  padding-top: 10px;
  display: flex;
  position: relative;
  margin-top: 10px;
}
.p6{
  margin-left: auto;
  padding-top: 2px;
  border-radius: 25px;
  justify-content: center;
  width: 80px;
  border: 1.5px solid #13ab91;
  line-height: 25px;
   color: #13ab91; 
}
.star{
  display: flex;
  position: relative;
  margin-top: 10px;
}
.top2{
  margin-top: 20px;
  border: 0.1px solid #fafafa;
  width: 100%;
}
.swipe{
  height: 200px;
  width: 100%;
}
.top3{
  padding: 10px;
  margin-top: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
}
.top3 p img{
  height: 25px;
  widows: 25px;
  margin-right: 10px;
} 
.p7{
  margin-top: 10px;
  margin-right: 10px;
}
.p8{
  padding:5px;
  background-color:#f2b830 ;
  color: white;
  border-radius: 5px;
}
.top4{
  padding-left: 10px;
  display: flex;
  position: relative;
  flex-direction: row;
}
.top4 p img{
  height: 25px;
  widows: 25px;
  margin-right: 10px;
} 
.p9{
  margin-top: 10px;
  margin-right: 10px;
}
.top5{
  margin-top: 55px;
  padding: 10px;
}
.top5-1{
  display: flex;
  flex-direction: row;
}
.p10{
  font-size: 20px;
  font-weight: bold;
}
.p11{
  color: #13ab91;
  font-size: 35px;
  margin-left: 10px;
  line-height: 32px;
}
.p12{
  color: #13ab91;
  font-size: 17px;
  line-height: 32px;
}
.slide-item .img1{
  height: 100px;
  width: 100px;
  margin: 5px;
  border-radius: 10px;
}
.slide-item .img2{
  height: 18px;
  width: 40px;
  border-radius: 5px;
}
ul,li{
  list-style: none;
}
.slide-box{
 display: -webkit-box;
 overflow-x: auto;
  /*适应苹果*/
 -webkit-overflow-scrolling:touch;
}
.slide-item{
padding-top: 20px;
width: 110px;
height: 180px;
}
/*隐藏掉滚动条*/
.slide-box::-webkit-scrollbar {
display: none;
}
.slide-item p{
  display:flex;
  position: relative;
  padding-left: 5px;
}
.slide-item .img2{
  display:flex;
  position: relative;
  margin-left: 5px;
}
.top6{
  margin-top: 20px;
  padding: 10px;
}
.top6-1{
  display: flex;
  flex-direction: row;
}
.p14{
  font-size: 20px;
  font-weight: bold;
}
.p15{
  color: #13ab91;
  font-size: 35px;
  margin-left: 10px;
  line-height: 32px;
}
.p16{
  color: #13ab91;
  font-size: 17px;
  line-height: 32px;
}

.top6-2-1{

  display: inline-grid;
  grid-template-columns: 2fr 2fr;
}
.top6-2 div div{
  margin: 8px;
  box-shadow: 0 3px 5px -1px rgb(197, 197, 197);
  border-radius: 10px;
  background-color:white;
  width: 160px;
  height: 160px;
}
.top6-2 div div img{
  padding-top: 10px;
  width: 100px;
  height: 100px;
}
.top6-2 div div p{
  padding-top: 15px;
  font-weight: bold;
}
</style>