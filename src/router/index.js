import Vue from 'vue';
import Router from 'vue-router';
import MemberStore from '@/components/view/MemberStore';
import Membership from '@/components/view/Membership';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'MemberStore',
      component: MemberStore,
      meta: {
        title: '到店会员'
      }
    },
    {
      path: '/Membership',
      name: 'Membership',
      component: Membership,
      meta: {
        title: '会员详情'
      }
    }
  ]
});
router.beforeEach((to, form, next) => {
  /* 路由变化修改title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
