// 创建Vue的根实例
import Vue from 'vue'

// 导入app组件
import App from './App.vue'

// 导入global全局样式
import './styles/global.less'

// 创建vue根实例
new Vue({
    render: (h) => h(App)
}).$mount('#app')
// 挂载App组件
