<template>
   <div class="content">
   <div id="login">
			<div class="login-top">
			<router-link to="/reg" active-class="_active"> 注册</router-link> | <router-link to="/login" active-class="_active"> 登录</router-link>
			</div>
			<!-- <div class="login-center clearfix">
				<div class="login-center-img"><img src="../assets/images/name.png"/></div>
				<div class="login-center-input">
					<input v-model="username" type="text" name="" value="" placeholder="请输入您的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的用户名'"/>
					<div class="login-center-input-text">用户名</div>
				</div>
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="../assets/images/password.png"/></div>
				<div class="login-center-input">
					<input v-model="password" type="password" name="" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
					<div class="login-center-input-text">密码</div>
				</div>
			</div> -->
      <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
     <input type="file" id="icon" style='display:none'>
			<div class="login-button" @click="login">
				登陆
			</div>
     
      <li class="tis" style="color:red;margin:.2rem .2rem;">{{errM}}</li>
		</div>
   
</div>

</template>

<script>
import axios from 'axios'
export default {

  data(){
    return {
      username:'',
      password:'' ,
      errM:''
    }
  },

  methods:{

    login(){
      axios({
        url:'/api/login',
        method:'post',
        data:{
          username:this.username,
          password:this.password
        }
      }).then(
        res => res.data.err === 0 ? this.$router.push('/user') : this.errMess = res.data.msg
      )
    }

  }
}
</script>


<style scoped>
   @import url("../assets/css/style.css");
    @import url("../assets/css/reset.css");
   ._active{color:yellow}
   
  </style>
