<template>
  <div class="banner">
    <ul class="clearfix">
      <li v-for="item of banner" :key="item.id"><img :src="baseUrl + item.banner" alt=""/>
        <div class="text-box">
          <h2>{{item.title}}</h2>
        </div>
      </li>
    </ul>
  </div> 
</template>
<script>

import $ from 'jquery';
import Swipe from '../assets/js/swipe.js'
import axios from 'axios'
export default {
    props:['banner'],
  updated(){
   
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })

  },
 
  
     
  

}
</script>

<style scoped>
 .banner{position: relative;overflow: hidden; z-index: 1}
 .banner ul{width:1000%;}
.banner li{float:left;position: relative;;width:8.4}
.banner img{height:6.4rem;display:block;width:100%}
.banner ul li .text-box{width:100%; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,125,0,0.5);line-height: 1.24rem;font-size:.5rem}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
</style>
