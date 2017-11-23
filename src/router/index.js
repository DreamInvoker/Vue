import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Home from 'views/Home'
Vue.use(Router)

// const router = new Router({
//     hashbang: false,  // 关闭hash模式
//     history: true,    // 开启html5history模式
//     linkActiveClass: 'active' // v-link激活时添加的class，默认是`v-link-active`
// })
const router = new Router({
    routes: [
        { path: '/', component: Home }
    ],
})
router.map(router)

router.beforeEach(({to, next}) => {
    console.log('---------> ' + to.name)  // 每次调整路由时打印，便于调试
    next()
})

export default router