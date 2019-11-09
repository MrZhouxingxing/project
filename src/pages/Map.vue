<template>
   <div >
      <header>
          <span class='back' onclick='window.history.go(-1)' ></span>
		<h3>地图</h3>
	</header>
    <div id="allmap" style="height:600px"></div>
    <input type="text" v-model="start" placeholder="起始点" class="inp1">
    <input type="text" v-model="end" placeholder="结束点" class="inp2">
    <input type="button" value="搜索路线" @click="search" class="btn">


    <hr>
    <input type="text" v-model="eat" placeholder="医院" class="inp3">
    <input type="button" value="搜索" @click="searchEat" class="btn">
   </div> 
</template>
<script>
  export default {
  data(){
    return {
      start:'',
      end:'',
      eat:''
    }
  },
  methods:{
    search(){
      //创建路线实例
      var driving = new BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true},policy: 'BMAP_DRIVING_POLICY_AVOID_HIGHWAY'});

      this.map.clearOverlays(); //清除覆盖物
            driving.search(this.start,this.end);//检索路线
       
    },
    searchEat(){
      //创建一个搜索实例
      var local =  new BMap.LocalSearch(this.map, {renderOptions: {map: this.map, autoViewport: false}});  

      this.map.clearOverlays(); //清除覆盖物
      
      //检索周边
      local.searchNearby(this.eat,this.point,5000);

      this.marker = new BMap.Marker(this.point);  // 创建标注
      this.map.addOverlay(this.marker);// 将标注添加到地图中

    }
  },
  mounted(){
    this.map = new BMap.Map("allmap");    // 创建Map实例
    this.point = new BMap.Point(121.4979538030,31.3847636119)
    this.map.centerAndZoom(this.point, 14);  // 初始化地图,设置中心点坐标和地图级别
    this.marker = new BMap.Marker(this.point);  // 创建标注
    this.map.addOverlay(this.marker);// 将标注添加到地图中
    this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    this.map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    let _this=this;
    this.map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
    this.map.addEventListener("click",function(e){
        alert(e.point.lng + "," + e.point.lat);
       _this.map.addOverlay(e.point.lng,e.point.lat);
	}); 
  }
}
</script>
<style>
  header{height:1.32rem;background:#098fe4;position: relative;}
header .back{position:absolute;width:0.5rem;height:0.5rem; background:url(../assets/images/history1.png) no-repeat 0 0; background-size:100%; left:0.5rem;top:0.45rem}
header h3{margin-left:.27rem;background:#098fe4;display: block;font-size:.55rem;line-height:1.32rem;color:#fff;text-align: center;font-weight: 700;}
.inp1{width:220px;height:30px;background:#098fe4;color:#000;}
.inp2{width:220px;height:30px;background:#098fe4;color:#000;}
.inp3{width:220px;height:30px;background:#098fe4;color:#000;}
.btn{width:30px;height:30px;text-align: center;}
</style> 