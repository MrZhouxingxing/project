import VueRouter from 'vue-router';
import vue from 'vue';
vue.use(VueRouter)
import Home from '../pages/Home'
import Follow from '../pages/Follow'
import Column from '../pages/Column'
import User from '../pages/User'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Mapadd from "../pages/Map"
import Detail from '../pages/Detail'
import Error404 from '../pages/Error404'
let routes =[
    {path:'/home',component:Home},
    {path:'/follow',component:Follow},
    {path:'/column',component:Column},
    {path:'/User',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/map',component:Mapadd},
    {path:'/detail/:id',component:Detail},
    {path:'/',redirect:'/home'},
    {path:'*',component:Error404},
];
let router =new VueRouter({
    mode:"hash",
    routes:routes
});
export default router;