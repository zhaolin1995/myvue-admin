import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
        import( "../components/Home.vue"),
    meta:{title:"系统首页"}
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import("../views/Login.vue"),
    meta:{title:"登录"}
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next)=>{
  console.log(to)
  document.title = `${to.matched[0].meta.title} | Vue后台管理 `
  const token = localStorage.getItem('login_username')
  if(!token && to.path!=="/login"){
    next('/login')
  }
  next()
})

export default router;
