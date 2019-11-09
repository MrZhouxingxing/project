<template>
    <div class="follow">
       <header >
		 <span class='back' onclick='window.history.go(-1)' ></span>
		<h3>免费咨询</h3>
	</header>
	<section id="main">
	   <div class="box">
	   	 <span>姓名：</span>
	   	 <input type="text" placeholder="请输入真实姓名">
	   </div>
	    <div class="box">
	   	 <span>性别：</span>
	   	 <input type="text" placeholder="请输入您的性别">
	   </div>
	    <div class="box">
	   	 <span>手机号：</span>
	   	 <input type="tel" placeholder="请输入您的手机号">
	   </div>
	    <div class="box">
	   	 <span>出生年月：</span>
	   	 <input type="text" placeholder="请输入出生年月">
	   </div>
	    <div class="box1">
	   	 <i>所在省市:</i>
	   	 <select name="省" id="">
	   	 	<option value="">上海市</option>
	   	 </select>
	   	 <select name="市" id="">
	   	 	<option value="">上海市</option>
	   	 </select>
	   </div>
      <tr>
            	<td class="td1">病状描述:</td>
            	<td><textarea class="area"></textarea></td>
            	
            </tr>
         <tr>
            	<td>上传附件：</td>
            	<td>
                	<input type="file" id="ff" />
                	<label for="ff" class="lab" >上传</label>
                </td>
          
            </tr>
	   <a href="" class="sure">确定</a>
	</section>
    </div>
</template>
<script>
  
   
</script>  
<style scoped>
  header{height:1.32rem;background:#098fe4;}
header h3{margin-left:.27rem;background:#098fe4;display: block;font-size:.55rem;line-height:1.32rem "";color:#fff;text-align: center;font-weight: 700;}
#main{padding:.78rem .4rem 0 .4rem;}
header .back{position:absolute;width:0.5rem;height:0.5rem; background:url(../assets/images/history1.png) no-repeat 0 0; background-size:100%; left:0.5rem;top:0.45rem}
#main .box{height:1.06rem;border:.01rem solid #dddddd;display: flex;margin-bottom: .28rem;}
#main .box span{font-size:.36rem;line-height:1rem;color:#9c9c9c;margin-left:.55rem;}
#main .box input{border:0;font:.34/1rem "";color:#c8c8c8;}
#main .sure{display: block;font-size:.35rem;line-height:1.1rem;color:#fff;background: #098fe4;text-align: center;border-radius:.05rem;}
#main .box1{margin-bottom: .25rem;}
#main .box1 i{font-size:.35rem;line-height: .81rem;color:#9b9b9b;}
#main .box1 select{width:3.85rem;height:.81rem;border-color: #dcdedd;margin-left:.28rem;}
.td1{font-size:.35rem;color:#9b9b9b;} 
.area{height:2.87rem;vertical-align: top;width:8.08rem;;border-color: #dcdedd;}
</style>