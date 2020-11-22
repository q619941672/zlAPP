<template>
	<!-- <view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
	</view> -->
<view class="index">
	<view class="serach">
		<uni-nav-bar>
			<uni-search-bar :radius="100" @confirm="search" cancelButton="none" id="sea" placeholder="请输入关键字"></uni-search-bar>
			<view slot="left" id="img1"><image src="../../static/index-img/1.jpg"></image></view>
			<view slot="right"><image src="../../static/index-img/2.jpg"></image></view>
		</uni-nav-bar>
	</view>
    <view class="grid">
	  <uni-grid :column="4" :show-border="false" @change="even">
	    <uni-grid-item v-for="(item, index) in dataList" :index="index" :key="index" class="uni-grid-item">
	       <view class="grid-item-box" >
			   <view> <image :src="item.image" class="identify-head" mode="aspectFill" ></image></view>
	           <view><text class="gemmologist-name">{{item.text}}</text></view>
	       </view>
	    </uni-grid-item>
	  </uni-grid>
	</view>
</view>

</template>

<script>
	// import Row from '@/components/oveui-layout/row/row.vue';
	// import oCol from '@/components/oveui-layout/o-col/o-col.vue';
	// export default {
	//     components:{Row,oCol}
	// }
	
	
	// export default {
	// 	data() {
	// 		return {
	// 			href: 'https://uniapp.dcloud.io/component/README?id=uniui'
	// 		}
	// 	},
	// 	methods: {

	// 	}
	// }
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
    components: {
uniGrid,uniGridItem,uniSearchBar,uniNavBar
},
data(){
return{
dataList:[
    {image:'../../static/index-img/e-commerce-platform.png',text:'电商平台',url:"../../pages/index/u1"},  
    {image:'../../static/index-img/city-information.png',text:'同城信息',url:"../../pages/index/u2"},  
    {image:'../../static/index-img/logistics-service.png',text:'物流服务',url:"../../pages/index/u3"},  
	{image:'../../static/index-img/building-trades.png',text:'建筑行业',url:"../../pages/index/u1"},  
    {image:'../../static/index-img/house-property-information.png',text:'房产信息',url:"../../pages/index/u2"},  
    {image:'../../static/index-img/resources-recovery.png',text:'资源回收',url:"../../pages/index/u3"},  
	{image:'../../static/index-img/sand-building-materials.png',text:'沙石建材',url:"../../pages/index/u1"},  
    {image:'../../static/index-img/car-information.png',text:'汽车信息',url:"../../pages/index/u2"},  
    {image:'../../static/index-img/maintain-a-bible.png',text:'养车宝典',url:"../../pages/index/u3"},
	{image:'../../static/index-img/decoration.png',text:'装饰装修',url:"../../pages/index/u3"}, 
	{image:'../../static/index-img/foreign-trade-industry.png',text:'外贸行业',url:"../../pages/index/u3"}, 
]
}
},
methods:{
even(e){
let num = e.detail.index;
let url = this.dataList[num].url;
uni.navigateTo({
url: url,
});
}
}
}
</script>

<style>
	/* .container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	} */
	.grid {
		text-align: center;
		
		
	}
	/* .grid-item-box {
		margin-top: 40px;
	} */
	.identify-head {
		/* margin-top: 40px; */
		
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
	#sea{
		width: 40vh;
	}
	.serach image{
		width: 35px;
		height: 35px;
		margin-top: 2.5vh;
	}
	#img1{
		margin-left: 1vh;
	}
/* .serach{
		    display: flex;
		    height: 40px;
		    line-height: 40px;
	}
	  .left, .right {
	    
	  } */
</style>
