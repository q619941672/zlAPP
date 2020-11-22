<template>
	<view class="communiction">
		<view class="tx"><h>通讯录</h><image src="../../static/communicate/cal.png"></image></view>
		<uni-nav-bar class="nav">
		    <view id="name">我关注的店铺</view>
		    <view slot="left" ><image src="../../static/communicate/1.jpg"></image></view>
		    <view slot="right">{{message.length}}</view>
		</uni-nav-bar>
		<!-- 我关注的公司 -->
		<uni-nav-bar class="nav" @click.native="iisshow1">
		    <view id="name">我关注的公司</view>
		    <view slot="left" ><image src="../../static/communicate/1.jpg"></image></view>
		    <view slot="right">{{message.length}}</view>
		</uni-nav-bar>
		<view class="childnav" v-for="item in message" v-show="isshow1">
			<view id="child1"><image :src="item.img"></image></view>
			<view id="child2">
				<h4>{{item.name}}</h4>
				<p id="cchild">{{item.job}}</p>
				<p id="cchild1">{{item.title}}</p>
			</view>
			<view id="child3" v-if="item.state == '在线'">
				<p>{{item.state}}</p>
			</view>
			<view id="child3" v-if="item.state == '离线'" style="color: #d1d1d1;">
				<p>{{item.state}}</p>
			</view>
		</view>
		<!-- 黑名单 -->
		<uni-nav-bar class="nav" @click.native="iisshow2">
		    <view id="name">黑名单</view>
			<view id="hm1">111</view>
		    <view slot="left" ><image src="../../static/communicate/1.jpg"></image></view>
		    <view slot="right">{{message.length}}</view>
		</uni-nav-bar>
		<view class="childnav" v-for="item in message" v-show="isshow2">
			<view id="child1"><image :src="item.img"></image></view>
			<view id="child2">
				<h4>{{item.name}}</h4>
				<p id="cchild">{{item.job}}</p>
				<p id="cchild1">{{item.title}}</p>
			</view>
			<view id="child3">
				<p id="yc">移除</p>
			</view>

		</view>
	</view>
</template>

<script>
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'

export default {
	data(){
		return {
			message:[
				{img:'../../static/communicate/name1.jpg',name:'张三',job:'人事经理',title:'金铭科技有限公司',state:'在线'},
				{img:'../../static/communicate/name2.jpg',name:'马冬梅',job:'销售',title:'华晨科技有限公司',state:'离线'},
				{img:'../../static/communicate/name3.jpg',name:'苏晓',job:'董事长',title:'广告传媒有限公司',state:'离线'},
				{img:'../../static/communicate/name1.jpg',name:'胡丽',job:'销售经理',title:'远宏科技有限公司',state:'离线'},
			],
			isshow1:false,
			isshow2:false,
			ccolor:'#b0b0b0'
		}
	},
    components: {
		uniNavBar,uniCollapse,uniCollapseItem
		},
	methods:{
		iisshow1(){
			this.isshow1 = !this.isshow1
		},
		iisshow2(){
			this.isshow2 = !this.isshow2
		}
	}
}
</script>

<style>
	
	.tx{
		margin: 0 2vh 0 2vh;
		text-align: center;
		font-size: 15px;
		border-bottom: #cfcfcf 1px solid;
		height: 40px;
	}
	.tx h{
		line-height: 40px;
	}
	.tx image{
		position: fixed;
		
		width: 40px;
		height: 40px;
		right: 0;
		top: 0;
	}

	.container{
		width: 375px;
		height: 1000px;
		
	}
	.top{
		width: 50px;
		height: 50px;
		float: right;
		
		

		background-color: #07C160;
	}
	.center{
		width: 50px;
		height: 50px;
		margin-left: 50px;
		background-color: #c146bf;
	}
	.bottom{
		width: 50px;
		height: 50px;
		
		background-color: #c16242;
	}
	.nav image{
		width: 3vh;
		height: 3vh;
		margin-top: 2vh;
	}
	.nav{
		margin: 0 2vh 0 2vh;
	}
	#name{
		margin-left: -8vh;
	}
	.childnav{
		height: 80px;
	}
	.childnav image{
		height: 60px;
		width: 60px;
		
	}
    #child3{
		width: 8vh;
		float: right;
		position: relative;
		top: 4vh;
		color: #7db6e6;
	}
	#child2{
		width: 15vh;
		float: left;
		position: relative;
		font-size: 2vh;
		margin-top: 3vh;
		
	}
	#child2 p{
		color: #b0b0b0;
	}
	#cchild{
		width: 8vh;
		float: right;
		position: absolute;
		text-align: center;
		font-size: 1px;
		right: 2vh;
		top: 0.3vh;
		color: #b0b0b0;
	}
	#cchild1{
		margin-top: 1vh;
		width: 150px;
	}
	#child1{
		margin-top: 2vh;
		margin-left: 3vh;
		width: 10vh;
		float: left;
		text-align: center;
	}
	#yc{
		width: 6vh;
		height: 3vh;
		text-align: center;
		color: #ffffff;
		background-color: #318fd9;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		border-top-left-radius: 5px;
		border-top-right-radius:5px ;
	}
</style>
