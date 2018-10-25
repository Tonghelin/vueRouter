import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import home from '@/components/home/home';
import ChildRouter from '@/components/ChildRouter/childRouter';
import ChildRouter2 from '@/components/ChildRouter/childRouter2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: { // 注意这里要加s
        default: HelloWorld,
        home, // 注意这里的名称要和 页面中 <router-view name=" home "/> 中的name一致
        ChildRouter,
      },
    }, {
      path: '/home',
      // name: 'home', // 当某个路由有子路由的时候，这时父级路由需要一个默认的路由，所以父级路由不能定义name属性
      component: home,
      children: [
        {
          path: '/',
          component: null,
        },
        {
          path: 'childRouter1',
          component: ChildRouter,
        },
        {
          path: 'childRouter2',
          name: 'childRouter2',
          component: ChildRouter2,
        },
      ],
    }, {
      path: '/childRouter/:id/:username', // 通过url传递参数 <router-link to='参数配置写这里面'>
      name: 'childRouter222',
      component: ChildRouter2,
    },
  ],
});
