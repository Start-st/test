<template class="tem">
  <div class="top-top">
    
    <div class="top">
        
        <div>
          <p class="date">{{ date }}</p>
          <img class="p2" v-bind:src="imgUr2">
          <img class="p1" v-bind:src="imgUrl">
          
        </div>
        <div class="top2">
          <img class="p3" v-bind:src="imgUr3">
          <p class="loc">{{ location }}</p>
          <img class="p7" v-bind:src="imgUr7">
        </div>
        <div class="top-t2">
        <swipe  v-model="index" style="height: 150px;border-radius: 25px; ;">
          <swipe-item style="height: 150px;" v-for="site in sites" :key="site" ><img class="swipe" :src="site.imgUrl" >
        </swipe-item>
      </swipe>
      </div>
      </div>

      <div class="center">
        <span>{{text}}</span>
        <ul class="slide-box">
          <li class="slide-item" v-for="item in items" :key="item">
            <img :src="item.imgUrl" >
          </li>          
        </ul>        
      </div>
      <div class="center2">
        <span>{{text2}}</span>      
        <p>{{text3}}</p>
        <img class="p8" :src="imgUr6" >
        <ul>
          <li >
            <img class="p8img1" :src="imgUr17">
            <span>水精灵</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
          </li>
          <li>
            <img class="p8img1" :src="imgUr18">
            <span>风精灵</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
            </li>
          <li>
            <img class="p8img1" :src="imgUr19">
            <span>喵精灵</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
            </li>
          <li>
            <img class="p8img1" :src="imgUr20">
            <span>火精灵</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
            </li>
          <li>
            <img class="p8img1" :src="imgUr21">
            <span>出生地1</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
            </li>
          <li>
            <img class="p8img1" :src="imgUr22">
            <span>出生地2</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
          </li>
          <li>
            <img class="p8img1" :src="imgUr23">
            <span>出生地3</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
            </li>
          <li>
            <img class="p8img1" :src="imgUr24">
            <span>阿黛尔</span>
            <p>图片来源：Msea</p>
            <div class="p8imgdiv">
              <img class="p8img2"  v-for="site2 in site2s" :key="site2"  :src="site2.imgUrl">
              <b>4.3</b>
            </div>
            </li>
        </ul>
      </div>
   
      <div class="center3">
        <div class="but3">
           <div>
           <p><img class="p6" v-bind:src="imgUr2"></p>
           </div>
          </div>
       <div class="buttom">
        <div  class="but1">
          <img class="p4" v-bind:src="imgUr4" > <br>
          <b>{{shouye}}</b>
        </div>
         
         <div class="but2">
          <img class="p5" v-bind:src="imgUr5" >   
          <b>{{yonghu}}</b>
         </div>
       </div>
         
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      index:0,
     location:'冒险岛',
     date:'11/14/2020 周日',
     imgUrl:require("../assets/搜索 (1).png"),
     imgUr2:require("../assets/购物车 (1).png"),
     imgUr3:require("../assets/位置.png"),
     imgUr4:require("../assets/首 页 (1).png"),
     imgUr5:require("../assets/用户.png"),
     imgUr7:require("../assets/右边.png"),
     imgUr6:require("../assets/向下.png"),
     imgUr17:require("../assets/angle1.webp"),
     imgUr18:require("../assets/angle2.webp"),
     imgUr19:require("../assets/angle3.webp"),
     imgUr20:require("../assets/angle4.webp"),
     imgUr21:require("../assets/rbn_item01.png"),
     imgUr22:require("../assets/rbn_item02.png"),
     imgUr23:require("../assets/rbn_item03.png"),
     imgUr24:require("../assets/MapleStorySEA_v195_RISE_Adele_1600x1200.jpg"),
     text:"人物Npc",
     text2:"内容资料",
     text3:"综合排序",
     shouye:"首页",
     yonghu:"用户",
      
     items:[
       {imgUrl:require("../assets/481350927.gif")},
       {imgUrl:require("../assets/1479970750.gif")},
       {imgUrl:require("../assets/rise_npc3-reverse.png")},
       {imgUrl:require("../assets/rise_npc4.png")},
       {imgUrl:require("../assets/rise_npc5-reverse.png")},
       {imgUrl:require("../assets/rise_npc6.png")},
     ],
      sites:[
        {imgUrl:require("../assets/dunkel_map_bg-p-800.jpeg")},
        {imgUrl:require("../assets/guild_map_bg-p-1600.jpeg")},
        {imgUrl:require("../assets/lucid_map_bg-p-1600.jpeg")},
      ],
      site2s:[
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星.png")},
        {imgUrl:require("../assets/星星 (1).png")},
      ],
    }
  },
  components: {
  
  },

  created(){
  },
  watch:{},
  methods:{
 
  }
}
</script>


<style scoped lang="less">

.date{

  margin: 15px;
  position: absolute;
  width: 150px;
  font-size: 18px;
  color: white;;
}
.top2{

 padding-top: 50px;
}
.loc{
  float: left;
  margin-top: 5px;
  width: 70px;
  font-size: 18px;
  color: white;;
}
.top-top{

  height: 300px;
}
.top{
  margin-bottom: 100px;
  height:170px;
  width: 100%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow:0px 20px 25px #bfefd2;
  background: linear-gradient(180deg,#15ad8e,#97d246);
}
.p1{
  margin-top: 15px;
  position: relative;
  right: 30px;
  float: right;
  height: 20px;
  width: 20px;
}
.p2{
  margin-top: 15px;
  position: relative;
  right: 25px;
  float: right;
  height: 22px;
  width: 22px;
}
.p3{
  margin-left: 25px;

   float: left;
  height: 25px;
  width: 25px;
}
.top-t2{
  margin-top: 60px;
  margin-left: 5%;
  height: 150px;
  width: 90%;
  
}
.center3{
    height: 145px;
    margin: 0 auto;
    bottom:0px;
    z-index:9999;
    position:fixed;
    width:100%;

 }
.buttom{
margin-top: 85px;

border-top-left-radius: 30px;
border-top-right-radius: 30px;
height:60px;
background: white;
box-shadow:0px -1px 10px 5px #dfdfdf;

}
.but1{
  float: left;
  margin-left: 50px;

  width: 30px;
  height: 100px;

}
.but1 b{

  width: 40px;
  font-size: 10px;
  height: 20px;
  color: #15ad8e;


}
.but2{
  float: right;
  margin-right: 50px;
  width: 30px;
  height: 100px;

}
.but2 b{
  
  width: 40px;
  font-size: 10px;
  height: 20px;
}
.p4{
  margin-top: 5px;

  height: 30px;
  width: 30px;
  margin-bottom: 5px;
}
.p5{
  margin-top: 5px;

  height: 30px;
  width: 30px;
  margin-bottom: 5px;
}
.but3{
  
  position: absolute;

  margin-left: 40%;
  margin-top: 45px;

}
.but3 div{

  margin-top: 40px;
  height: 40px;
  width: 80px;
  border-radius:0px 0px 40px 40px;
  background: white;
  box-shadow:inset 0px -15px 20px -2px #dfdfdf;
  border: 1px solid transparent;
}
.but3 p{

  background: #15ad8e;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  margin-top: -38px;
  margin-left: 4px;

}
.p6{
  height: 30px;
  width: 30px;
  margin-top: 20px;


}
.p7{
  margin-top: 7px;
   float: left;
  width: 20px;
  height: 20px;
}
.center{
  margin:0 auto;
  height: 150px;
  width: 90%;
  border:1px solid white;
  margin-top: 20px;
}
.center span{
  font-size: 16px;
   font-weight: bold;
  float: left;
}
.center2{
  margin:0 auto;
  height: 900px;
  width: 90%;
  border:1px solid white;
  margin-top: 20px;

}
.center2 span{
  font-size: 16px;
  font-weight: bold;
  float: left;
}
.center2 p{
  font-size: 15px;
  font-weight: bold;
  float: right;
  color: dimgray;
}
.p8{
  margin: 5px;
  float: right;
  height: 15px;
  width: 15px;
}
.swipe{
 
  height: 150px;
  width: 100%;
}
.slide-item img{
  height: 100px;
  width: 85px;
  box-shadow:2px 2px 10px 1px gray;
  margin: 5px;
}
ul,li{

  list-style: none;;

        }

.slide-box{

            margin-top:40px;

            display: -webkit-box;

            overflow-x: auto;

            /*适应苹果*/

            -webkit-overflow-scrolling:touch;

        }

        .slide-item{

            width: 120px;

            height: 150px;

        }

        /*隐藏掉滚动条*/

        .slide-box::-webkit-scrollbar {

         display: none;

       }
       

.center2 ul{
  margin-top: 25px;
  width: 100%;
}
.center2 ul li {

  width: 40%;
  height: 180px;
  margin-left: 7%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  float: left;
  flex-direction:column;

  box-shadow: 0 3px 5px -1px rgb(197, 197, 197);
}
.center2 ul li .p8img1{
  border-radius: 10px;
  margin: 0 auto;
  height: 80ox;
  width: 120px;

}
.center2 ul li span{
  margin-top: 5px;
  font-size: 13px;


}
.center2 ul li p{
  font-size: 10px;
  color: darkgray;
  float:left;
  margin-top: 5px;
}
.center2 ul li div{
  position: relative;
  margin: 0 auto;
  float: left;
  margin-top: 5px;
}
.p8img2{
  height: 15px;
  width: 15px;
  float: left;
}
.p8imgdiv b{
  font-size: 10px;
  color: darkgray;
  margin-left: 12px;
  margin-top: 2px;
  float:left
}

</style>
