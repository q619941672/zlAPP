<template>
	<view class="mine" @click="">
		<view class="tx"><h>我的</h><image src="../../static/mine/sz.png"></image></view>
			<view class="coll" @click="gochildmine" :mine="mine">
				<image src="../../static/mine/lj.jpeg"></image>
				<p>{{mine[0].name}}<h6>董事长</h6></p>
				<p1>{{mine[0].componey}}</p1>
				<p2>{{mine[0].adress}}</p2>
				<image src="../../static/mine/dy.png" id="dy"></image>
			</view>

    <view class="grid">
	  <uni-grid :column="4" :show-border="false" @change="even">
	    <uni-grid-item v-for="(item, index) in imgarr" :index="index" :key="index" class="uni-grid-item">
	       <view class="grid-item-box" >
			   <view> <image :src="item.img" class="identify-head" mode="aspectFill" ></image></view>
	           <view><text class="gemmologist-name">{{item.text}}</text></view>
	       </view>
	    </uni-grid-item>
	  </uni-grid>
	</view>
	</view>
</template>

<script>
	import childMine from './childmine/childMine.vue'
	export default{
		data(){
			return{
				imgarr:[
					{img:'../../static/mine/11.jpg',text:'我的收藏'},
					{img:'../../static/mine/22.jpg',text:'浏览记录'},
					{img:'../../static/mine/33.jpg',text:'我的文件'},
					{img:'../../static/mine/44.jpg',text:'我要开店'},
					{img:'../../static/mine/55.jpg',text:'信息发布'},
					{img:'../../static/mine/66.jpg',text:'联系客服'},
					{img:'../../static/mine/77.jpg',text:'我的评论'},
					{img:'../../static/mine/88.jpg',text:'我的发票'},
					{img:'../../static/mine/99.jpg',text:'我的卡卷'},
					{img:'../../static/mine/10.jpg',text:'我的积分'},
					{img:'../../static/mine/12.jpg',text:'我的地址'},
				],
				mine:[
					{name:'雷军',componey:'北京小米科技有限公司',adress:'北京市海定区安宁庄路小米科技园'}
				]
			}
		},
		components:{
			childMine
		},
		methods:{
			gochildmine(){
				uni.navigateTo({
					url:'./childmine/childMine'
				})
			}
		}
	}
</script>

<style>
	.tx{
		text-align: center;
		font-size: 15px;
		height: 40px;
	}
	.tx h{
		line-height: 40px;
	}
	.tx image{
		position: fixed;
		
		width: 30px;
		height: 30px;
		right: 0;
		top: 5px;
	}
	.coll{
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius:10px ;
		margin-left: 20px;
		margin-right: 20px;
		box-shadow: 0 0 5px #d1d1d1;
		padding: 15px;
		margin-top: 15px;
	}
	.coll image{
		border-radius: 50%;
		width: 80px;
		height: 80px;
	}
	.coll p{
		position: absolute;
		font-size: 3px;
		left: 130px;
		top: 80px;
	}
	.coll p1{
		font-size: 3px;
		position: absolute;
		left: 130px;
		top: 100px;
	}
	.coll p2{
		font-size: 3px;
		position: absolute;
		left: 130px;
		top: 120px;
	}
	.coll h6{
		position: absolute;
		text-align: center;
		left: 160px;
		top: 81px;
		font-size: 2px;
		width: 40px;
		color: white;
		background-color: #318fd9;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		border-top-left-radius: 5px;
		border-top-right-radius:5px ;
	}
	#dy{
		position: absolute;
		width: 20px;
		height: 20px;
		right: 25px;
		top: 100px;
	}
	.grid {
		text-align: center;	
	}
	.identify-head {
		width: 64px; 
		height: 64px;
	}
	.gemmologist-name{
		font-size: 10px;
		width: 50rpx;
		margin-top: 10px;
	}
	.uni-grid-item{
		margin-top: 30rpx;
	}
</style>
