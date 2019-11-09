<template>
    <div class="home">
         
         <header>
		<h3>医生在线</h3>
	</header>
	
	<Solider :banner="banner" ></Solider>
	<section id="main">
	  <router-link to='/follow'><span></span><p>免费咨询</p></router-link>
	   <router-link to='/column'><span class="span2"></span><p>专家推荐</p></router-link>
	   <a href="javascript:;"><span class="span3"></span><p>门诊服务</p></a>
	   <router-link to='/user'><span class="span4"></span><p>个人信息</p></router-link>
	</section>	
    </div> 
</template>
<script>
   import Solider from '../components/Solider'

   import axios from 'axios'
   export default {
       data(){
		   return {
			   banner:[]
		   }
	   },
       components:{
           Solider
	   },
	   activated(){
          axios({
              url:'/api/banner',
              params:{_page:1,_limit:5}
          }).then(
              
          (res)=>{this.banner=res.data.data}
          
      )
      }
   }
</script>
<style scoped>

header{height:1.32rem;background:#098fe4;}
header h3{display: block;font-size:.55rem ;line-height:1.32rem ;color:#fff;text-align: center;font-weight: 700;}

#main{background:#efefef;overflow: hidden;}
#main a{padding-top:.74rem;float:left;width:5.04rem;height: 4.96rem;margin:.2rem 0 .1rem .2rem;background:#fff;}
#main a span{display: block;width:2.74rem;height:2.74rem;margin:0 auto;background:url(../assets/images/mainbg.png) no-repeat 0 0/5.56rem 5.52rem;}
#main a p{text-align: center;font-size:.62rem;line-height:1.49rem;color:#343434;}
#main a span.span2{background-position: right top;}
#main a span.span3{background-position: left bottom;}
#main a span.span2{background-position: right bottom;}
</style>