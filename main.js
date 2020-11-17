import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})

// import Row from './components/oveui-layout/row/row.vue'
// Vue.component('row',Row)

// import oCol from './components/oveui-layout/o-col/o-col.vue'
// Vue.component('o-col',oCol)

app.$mount()
