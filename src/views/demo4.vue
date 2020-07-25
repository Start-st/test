<template>
    <div>
    <div class="top1">
        <ul class="slide-box2">
            <li>
                <img :src="imgUrl4">
                <p>{{name1}}</p>
            </li>
            <li>
                <img :src="imgUrl5">
                <p>{{name1}}</p>
            </li>
            <li>
                <img :src="imgUrl6">
                <p>{{name2}}</p>
            </li>
            <li>
                <img :src="imgUrl7">
                <p>{{name3}}</p>
            </li>
            <li>
                 <img :src="imgUrl8">
                 <p>{{name4}}</p>
            </li>
            <li>
                <img :src="imgUrl9">
                <p>{{name5}}</p>
            </li>
            <li>
                <img :src="imgUrl10">
                <p>{{name6}}</p>
            </li>
        </ul>
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
    <div class="top3">
        <div class="top3-1">
             <p class="p14">{{p14}}</p>
             <p class="p15">{{p15}}</p>
             <p class="p16">{{p16}}</p>
        </div>
        <div class="top3-2" v-for="(site,index) in sites" :key="index">
            <div class="all" :id="gernerateId(index)">{{site.name}}
                <img class="img3" :src="imgUrl11">
                <div class="right">
                    <div>
                        <p class="p17">{{p17}}</p>
                    </div>
                    <div class="right-2">
                        <img :src="imgUrl12">
                        <p class="p18">{{p18}}</p>
                        <img :src="imgUrl13">
                        <p class="p19">{{p19}}</p>
                    </div>
                    <div class="right-3">
                        <p class="p20">{{p20}}</p>
                        <p class="p21">{{p21}}</p>
                    </div>
                </div>  
            </div>
        </div>
        
    </div>
    <div class="center3">
        <div class="center3_but">
        <div class="but3">
           <div>
           <p><img class="p6" v-bind:src="imgUr2"></p>
           </div>
          </div>
          </div>
         <div class="buttom">
        
       </div>
      </div>
    </div>
    
</template>
<script>

export default{
    data(){
        return {
          p10:'热门',
          p11:' ·',
          p12:'6种',
          p13:'菜品名称',
          p14:'优秀人的选择',
          p15:' ·',
          p16:'6种',
          p17:'土豆爱上培根沙拉',
          p18:'351',
          p19:'58',
          p20:'￥26.35',
          p21:'+',
          imgUr2:require("../assets/购物车 (1).png"),
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
          imgUrl11:require("../assets/餐盘.png"),
          imgUrl12:require("../assets/标签 (1).png"),
          imgUrl13:require("../assets/心 爱心 - 副本.png"),
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
          sites:[
              {name:'',type:1},
              {name:'',type:2},
              {name:'',type:3},
              {name:'',type:4},
              {name:'',type:5},
          ]
      }
    },
    computed:{
    },
    methods:{
     gernerateId:function (index){
         return "person_" +index
     }
    },
    components:{
    
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
}
.slide-box2 li img{
  height: 70px;
  width: 70px;
  margin: 5px;
}
.slide-box2 li{
    width: 100px;
    height: 100px;
}
.slide-box2 p{
    font-weight: bold;
}
.slide-box2{
 display: -webkit-box;
 overflow-x: auto;
  /*适应苹果*/
 -webkit-overflow-scrolling:touch;
}
.slide-box2::-webkit-scrollbar {
display: none;
}
.top5{
  margin-top: 35px;
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
.top3{
  padding-left: 10px;
  padding-bottom: 150px;
}

.top3-1{
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

.top3-2{

    display: flex;
    flex-wrap: wrap;
}
.top3-2 .all{

margin-top: 20px;
width: 95%;
height: 120px;
border-radius: 60px 0 0px 60px;
background-color:white ;
box-shadow: 0px 0px 6px 0px rgb(197, 197, 197);
display: flex;
position: relative;
margin-left: auto;

}
.img3{
    box-shadow: 3px 5px 5px -1px rgb(197, 197, 197);
    height: 120px;
    width: 120px;
    border-radius: 60px;
    z-index: 999;
    display: flex;
}
.right{
    padding-top:10px;
    height: 120px;
    width: 100%;
    margin-left: 40px;
}
.p17{
    padding-top: 10px;
    font-weight: bold;
    display: flex;
    position: relative;

}
.right-2{
    padding-top: 10px;

    display: flex;
    
}
.right-2 img{
    height: 20px;
    width: 20px;
    margin-right: 5px;
}
.right-2 p{
    margin-top: 5px;
    color: gray;
     margin-right: 20px;
}
.right-3{
    padding-top: 20px;
    display: flex;

}
.p20{
    color:#13ab91;
    font-weight: bold;

}
.p21{

    position: relative;
    margin-left:auto;
    display: flex;
    width:30px;
    font-size: 20px;
}
.center3{

    height: 145px;
    margin: 0 auto;
    bottom:0px;
    z-index:9999;
    position:fixed;
    width:100%;

 }
 .center3_but{
   display: flex;
   justify-content: center;
 }
.but3{

  position: absolute;
  margin-top: 45px;
  display: flex;
  justify-content: center;
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
.buttom{
margin-top: 85px;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
height:60px;
background: white;
box-shadow:0px -1px 10px 5px #dfdfdf;
display: flex;
flex-direction: row;
}
</style>