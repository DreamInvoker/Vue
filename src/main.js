// import...from的语法是ES6的，需要用到babel，后面再说
// require的语法是Commonjs的，webpack已经实现了，可以直接使用
import Vue  from 'vue'
import router from './router'
// import Hello from './components/Hello.vue'
// new Vue({
//     el: '#app',
//     template: '<div><hello></hello></div>',
//     components: {Hello}
// })
const App = Vue.extend({});
//
// new Vue({
//     el: '#app',
//     router: router,
//     template: '<router-view></router-view>'
// })
//
//runtime-only方式
new Vue({
    el: '#app',
    router: router,
    render: h => h('router-view')
})
//router.init("#app");
// router.start(App, '#app');
// router.$mount('#app')