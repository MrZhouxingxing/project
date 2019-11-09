<template>
   <div class="content">
     <div id="login">
			 <div class="login-top">
				注册 | <router-link to="/login"> 登录</router-link>
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
       <h1 @click='selectIcon' id="selectIcon" style="width:2.5rem;height:.4rem;background:#09f;border-radius:.05rem;margin:0 auto;color:#fff;font:12px/.4rem '';cursor: pointer;text-align:center;">点击上传头像</h1>
     <input type="file" id="icon" style='display:none'>
			<div class="login-button" @click="reg">
				注册
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
      password:'',
      errM:''
    }
  },
  methods:{
    selectIcon(){
      let input = document.getElementById('icon');
      input.click()
    },
    reg(){

      let formData = new FormData();
      formData.append('username',this.username)
      formData.append('password',this.password)
      let input = document.getElementById('icon')
      formData.append('icon',input.files[0])
      
      axios({
        url:'/api/reg',
        method:'post',
        data: formData
      }).then(
        res=>res.data.err===0?this.$router.push('/login'):this.errMess=res.data.msg
      )
    }
  }
}
</script>

<style scoped>
   @import url("../assets/css/style.css");
    @import url("../assets/css/reset.css");
  </style>

