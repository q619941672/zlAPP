<template>
<view class="message">
	<view class="dis">发现</view>
	<uni-collapse @change="change" accordion="true">
		<view>
			<view class="coll">			
			<uni-collapse-item :title="item" v-for="item in titles" thumb="../../static/discover/dis1.jpg">
			    <uni-list>
			        <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
			        <uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
			        <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    </uni-list>
			</uni-collapse-item>
			</view>
		</view>
		<view class="coll1">
			<uni-collapse-item title="畅销商品" thumb="../../static/discover/dis2.jpg">
			    <uni-list>
			        <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
			        <uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
			        <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    </uni-list>
			</uni-collapse-item>
		</view>
		<view class="coll2">
			<uni-collapse-item title="扫描二维码" thumb="../../static/discover/dis6.jpg">
			    <uni-list>
			        <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
			        <uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
			        <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    </uni-list>
			</uni-collapse-item>
		</view>
	</uni-collapse>
	
</view>
	
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default{
		data(){
			return {
				titles:['动态','热点新闻','友人关注','同城一览']
			}
		},
		components:{
			uniCalendar,uniCollapse,uniCollapseItem,uniIcons
		},
		methods:{
			change(){
				console.log('1111')
		}
	},
	}
</script>

<style>
	.dis{
		line-height: 40px;
		text-align: center;
		}
	.v1{
		margin-top: 30rpx;
	}
	.message{
		
	}
	.coll{
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius:10px ;
		margin-left: 20px;
		margin-right: 20px;
		box-shadow: 0 0 5px #d1d1d1;
		
	}
	.coll1{
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius:10px ;
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
		box-shadow: 0 0 10px #d1d1d1;
		
	}
	.coll2{
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius:10px ;
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
		box-shadow: 0 0 10px #d1d1d1;
		
	}
</style>
