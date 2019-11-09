<template>
  <div id="app">
  <transition
			enter-active-class = "animated fadeIn"
			leave-active-class = "animated fadeOut"
      mode="out-in"
    >
    <keep-alive>
      <router-view></router-view>
    </keep-alive> 
  </transition>
  </div>
</template>

<script>
 import Header from './components/Header'
   import Home from './pages/Home'
   import Follow from './pages/Follow'
   import Column from './pages/Column'
   import Footer from './components/Footer'
   import User from './pages/User'
   import Login from './pages/Login'
   import Reg from './pages/Reg'
   import Detail from './pages/Detail'
   import Error404 from './pages/Error404'
   import Solider from "./components/Solider"
export default {
  name: 'app',
  components: {
     Header,Home,Footer,Follow,Column,User,Login,Reg,Detail,Error404,Solider
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
