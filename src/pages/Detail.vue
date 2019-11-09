<template>
  <div class="detail" v-if="detail._id"> 
   <header>
	    <span class='back' onclick='window.history.go(-1)' ></span>
		<h3>{{detail.name}}</h3>
	</header>
	<section id="main">
		<a href="javescript:;">
		   <div class="box-t">
		     <img :src="baseUrl + detail.icon" alt="">
		     <div class="box">
		     	<h4><i>{{detail.name}}</i><span v-for="item of detail.type" :key="item">{{item}}</span></h4>
		     	<p>{{detail.history}}</p>
		     	
		     </div>
		    </div> 
		     <div class="box-b">
		       <b v-for="a of detail.type" :key="a">{{a}}</b>
		     </div>
		</a>
	</section>
	<article>
	   <div class="box">
		  <p v-html="detail.content"></p>
	   </div>	
	</article>
	<footer>
		<a href="" class="active"><i class="i1"></i><span>首页</span></a>
		<a href=""><i class="i2"></i><span>医生</span></a>
		<a href=""><i class="i3"></i><span>咨询</span></a>
	</footer>
	<div class="dian"></div>
  </div> 
  <div v-else><img src="../assets/images/timg.gif" alt=""></div>
</template>
<script>
import axios from 'axios'
  export default {
     data(){
     return {
        detail:{}
     }
  },
  activated(){
  axios({
     url:'/api/home/'+this.$route.params.id
  }).then(
	  
		   res=>this.detail=res.data.data
	 
    
  )
  },
   
  }
</script>  
<style scoped>
  
header{height:1.32rem;background:#098fe4;}
header .back{position:absolute;width:0.5rem;height:0.5rem; background:url(../assets/images/history1.png) no-repeat 0 0; background-size:100%; left:0.5rem;top:0.45rem}
header h3{margin-left:.27rem;background:#098fe4;display: block;font-size:.55rem;line-height:1.32rem;color:#fff;text-align: center;font-weight: 700;}
#main a{display:block;height:2.78rem;background: #fff;padding-top:.26rem;}
#main a .box-t {display: flex;margin-bottom:.33rem;}
#main a .box-t img{width:1.56rem;height:1.58rem;border-radius:50%;margin:0 .45rem 0 .25rem;}
#main a .box-t .box{flex:1;font-size:.29rem;line-height: .42rem;color:#595758;}
#main a .box-t .box h4{font-size:.4rem;line-height: .61rem;color:#333333;}
#main a .box-t .box h4 span{padding:.1rem 0 0 .24rem;}
#main a .box-b{overflow:hidden;border:.01rem solid #dddddd;padding:0 .07rem;}
#main a .box-b b{border-radius:.05rem;font-size:.28rem;line-height: .46rem;float:left;background:#6ec7ff;padding:0 .18rem;margin:.17rem .11rem;}
article{background:#efefef;}
article .box{padding:0 .25rem;background: #fff;margin:.21em .25rem;}
article h4{font-size:.35rem;line-height: .58rem;color:#333333;padding-top: .32rem;}
article p{font-size:.3rem;line-height: .74rem ;color:#595758;text-indent: .73rem;}
footer{z-index:10;position:fixed;left:0;bottom:0;right:0;display: flex;justify-content: space-around;padding-top:.2rem;border-top: .02rem solid #d2d2d2}
footer a i{display: block;width:.6rem;height:.53rem;margin:0 auto;background:url(../assets/images/footer3.png) no-repeat 0 0/.6rem 1.62rem;}
footer a span{display:block;font-size:.3rem;line-height: .62rem ;color:#717171;text-align: center;}
.dian{height:1.43rem;}
footer a i.i2{background-position: left center;}
footer a i.i3{background-position: left bottom;}
footer a.active span{color:#088ee3;}
</style>