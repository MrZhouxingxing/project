<template>
     <div class="content" style="padding-bottom:10px;">
     <van-notice-bar :scrollable="true">
  大药房活动火爆中！！！！
</van-notice-bar>
          <span class='back' @click='back' ></span>
       <div class="header">
          <h2><img :src="baseUrl + user.icon" alt=""/></h2>
        <div class="user-box">
      <a href="javascript:;">昵称:{{user.nikename}}</a>
      
    </div>
    </div>
  <van-panel title="动态" desc="描述信息" status="状态">
  <div>我很懒什么也没留下</div>
  <van-cell-group>
  <van-cell title="详情信息" value="内容" />
  <van-cell title="我的病例" value="内容" />
  <van-cell title="收藏夹" value="内容" />
  <van-cell title="发表文章" value="内容" />
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
  <div slot="footer">
    
    <van-button size="small" type="danger" @click="logout">注销</van-button>
  </div>
</van-panel>
</div> 
</template>
  <script>
  import axios from 'axios'
  export default {
    data(){
      return {
        user:[]
      }
    },
    beforeRouteEnter(to,from,next){
      axios({
        url:'/api/user',
      }).then(
        res=>res.data.err === 0 ? next(_this=>_this.user=res.data.data):next('/login')
      )
    },
    methods:{
    logout(){
      
      axios({
        url: "/api/logout",
        method:'delete'
      }).then(
        res => res.data.err === 0 ? this.$router.push('/home') : this/router.push("/user")
      )
      
    },
    back(){
      this.$router.push("/home");
    }
  }
  }
  </script>  
  
<style scoped>
   .content{max-width:8.4rem; margin:0 auto; margin-bottom:0.8rem;}
.content .header{width:8.4rem;height:2.84rem; background:#9e9a95; padding-top:0.4rem;}
 .back{position:absolute;width:0.5rem;height:0.5rem; background:url(../assets/images/history1.png) no-repeat 0 0; background-size:100%; left:0.5rem;top:0.45rem}
.header h2{width:1.02rem;height:1.02rem; border-radius:50%; margin:0 auto;}
.header h2 img{width:100%;height:1rem}
.header .user-box{width:1.14rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;}
.user-box a{color:#fff;}
.header ul{ margin-top:0.4rem;}
.header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
.header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
.header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
.header ul li p.end{ border:0;}



</style>