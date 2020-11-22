<template>
	<view class="grmessage">
		<image src="../../../static/mine/ewm.png" id="sz"></image>
		<view class="gexx">
			<view id="c1"><image src="../../../static/mine/lj.jpeg"></image><h5>更改</h5></view>
			<view class="input" id="c2"><input type="text" value="雷军" /><h5>更改</h5></view>
			<view class="input" id="c3"><input type="text" value="13216895215" /><h5>更改</h5></view>
			<view class="input" id="c4"><input type="text" value="" placeholder="请修改您的个性签名"/><h5>更改</h5></view>
		</view>
		<view class="gsrz">
			<h4>公司认证</h4>
			<h5>更改</h5>
			<view><image src="../../../static/mine/1.jpg"></image></view>
			<view class="gs1">
				<p><b>北京小米科技有限公司</b></p>
				<p><b>董事长</b></p>
				<p>北京市海定区安宁庄路小米科技园</p>
			</view>
			</view>
		<view class="gsrz">
			<h4>店铺认证</h4>
			<h5 id="gg">更改</h5>
			<view><image src="../../../static/mine/2.jpg"></image></view>
			<view class="gs2">
				<p><b>北京小米科技有限公司</b></p>
				<p><b>董事长</b></p>
				<p>北京市海定区安宁庄路小米科技园</p>
			</view>
			</view>
	</view>
</template>

<script>
	export default{
		props:{
			mine:{
				type: Array
			},
			
		}
	}
</script>

<style>
	#sz{
		position: fixed;
		top: 5px;
		right: 5px;
    	width: 30px;
		height: 30px; 
		z-index: 999;
	}
	.input{
		padding-top: 10px;
		height: 40px;
		border-bottom: 1px #d1d1d5 solid;
	}
	.gexx{
		margin: 0 10px 0 10px;
		padding: 30px 30px 0 30px;
		border-bottom: 3px solid #d1d1d5;
	}
	.gexx image{
		position: relative;
		left: 2px;
		border-radius: 50%;
		width: 80px;
		height: 80px;
		
	}
	.gexx h5{
		position: fixed;
		text-align: center;

		width: 50px;
		color: #318fd9;
	}
	#c4 h5{
		right: 45px;
		top: 280px;
	}
	#c4{
		border-bottom: none;
	}
	#c1 h5{
		right: 45px;
		top: 120px;
	}
	#c2 h5{
		right: 45px;
		top: 170px;
	}
	#c3 h5{
		right: 45px;
		top: 230px;
	}
	.gsrz{
		border-bottom: 3px solid #d1d1d5;
		margin: 0 10px 0 10px;
		padding: 10px;
	}
	.gsrz h5{
		position: fixed;
		right: 57px;
		top: 325px;
		color: #318fd9;
	}
	.gsrz image{
		width: 20vh;
		height: 15vh;
		margin-top: 10px;
	}
	.gs1 p{
		font-size: 2vh;
		margin-top: 10px;
	}
	.gs1{
		position: absolute;
		left: 25vh;
		top: 47vh;
	}
	.gs2 p{
		font-size: 2vh;
		margin-top: 10px;
	}
	.gs2{
		position: absolute;
		left: 25vh;
		top: 70vh;
	}
	#gg{
		top: 72.5vh;
	}
</style>
