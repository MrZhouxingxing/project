<template>
    <div class="column" v-if="list.length!=0">
      <header>
          <span class='back' onclick='window.history.go(-1)' ></span>
		<h3>专家名单</h3>
	</header>
	<section id="main">
		<router-link v-for="item of list" :key="item._id"
		:to="'/detail/'+item._id">
		   <div class="box-t">
		     <img :src="baseUrl+item.icon " alt="">
		     <div class="box">
		     	<h4><i>{{item.name}}</i><span>{{item.type[0]}}</span></h4>
		     	<p>{{item.history}}</p>
		     	<p>{{item.des}}</p>
		     </div>
		    </div>
		     <div class="box-b">
		       <b v-for="item of item.type" :key="item">{{item}}</b>
		     </div>
		</router-link>
		
	</section>
	<footer>
		<router-link  to="/follow" active-class="active"><i class="i1"></i><span>免费咨询</span></router-link>
		<router-link to="/map" active-class="active"><i class="i2"></i><span>地理查询</span></router-link>
		<router-link to="/user"><i class="i3"></i><span>个人中心</span></router-link>
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
			  list:[]
		  }
	  },
	  activated(){
		  axios({
			  url:'/api/home',
			  params:{_page:1,_limit:6}
		  }).then(
			  
				  res=>this.list=res.data.data 
			  
			 
		  )
	  }
  }
</script>  
<style scoped>
header{height:1.32rem;background:#098fe4;position: relative;}
header .back{position:absolute;width:0.5rem;height:0.5rem; background:url(../assets/images/history1.png) no-repeat 0 0; background-size:100%; left:0.5rem;top:0.45rem}
header h3{margin-left:.27rem;background:#098fe4;display: block;font-size:.55rem;line-height:1.32rem;color:#fff;text-align: center;font-weight: 700;}
#main{padding:0 27px;background:#efefef;}
#main h3{font:.4rem/.7rem "";color:#000;padding-top: .13rem;}
#main a{display:block;height:3.78rem;background: #fff;border-top:1px solid #dddddd;padding-top:.26rem;margin-top: .22rem}
#main a .box-t {display: flex;margin-bottom:.33rem;}
#main a .box-t img{width:1.56rem;height:1.58rem;border-radius:50%;margin-right:.45rem;}
#main a .box-t .box{flex:1;font:.29rem/.42rem "";color:#595758;}
#main a .box-t .box h4{font:.4rem/.61rem "";color:#333333;}
#main a .box-t .box h4 span{padding:.1rem 0 0 .24rem;}
#main a .box-b{overflow:hidden;border:.01rem solid #dddddd;padding:0 .07rem;}
#main a .box-b b{border-radius:.05rem;font:.28rem/.46rem "";float:left;background:#6ec7ff;padding:0 .18rem;margin:.17rem .11rem;}
footer{z-index:10;position:fixed;left:0;bottom:0;right:0;display: flex;justify-content: space-around;padding-top:.2rem;border-top: .02rem solid #d2d2d2}
footer a i{display: block;width:.58rem;height:.57rem;margin:0 auto;background:url(../assets/images/footer2.png) no-repeat 0 0/.57rem 1.71rem;}
footer a span{display:block;font:.3rem/.62rem "";color:#717171;text-align: center;}
.dian{height:1.43rem;}
footer a i.i2{background-position: left center;}
footer a.active i.i2{background-position: left center;}
footer a i.i3{background-position: left bottom;}

</style>