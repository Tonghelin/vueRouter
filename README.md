# vue_router
[vue-router 官方的路由管理器](https://router.vuejs.org/zh)

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 起步

```
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
  
```

```
  // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)  
  
  // 1. 定义 (路由) 组件。  
  // 可以从其他文件 import 进来  
  const Foo = { template: '<div>foo</div>' }  
  const Bar = { template: '<div>bar</div>' }  
    
  // 2. 定义路由  
  // 每个路由应该映射一个组件。 其中"component" 可以是  
  // 通过 Vue.extend() 创建的组件构造器，  
  // 或者，只是一个组件配置对象。  
  // 我们晚点再讨论嵌套路由。  
  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  
  // 4. 创建和挂载根实例。
  // 记得要通过 router 配置参数注入路由，
  // 从而让整个应用都有路由功能
  const app = new Vue({
    router
  }).$mount('#app')
  
  // 现在，应用已经启动了！

```

## 子路由

```
  <router-link to='pathName'>路由链接</router-link>
  <router-view></router-view> // 加载路由页面内容 （若要配置子路由，必须要有，不然不会显示）
```
App.vue
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Hello world!</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/home/childRouter">ChildRouterPage</router-link>
    </div>

    <router-view/>
  </div>
</template>

```
home.vue
```
<template>
    <div id="home">
      <h1>
        {{msg}}
      </h1>
      <!--// 配置子路由-->
      <router-link to="/home">childHome</router-link>
      <router-link to="/home/childRouter1">ChildRouterPage</router-link>
      <router-link :to="{name:'childRouter2',params:{username:'Linth'}}">Page222</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'home page!!!!',
    };
  },
};
</script>

```


```
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
    },
  ],
});

```

// 当某个路由有子路由的时候，这时父级路由需要一个默认的路由，所以父级路由不能定义name属性
## 传参

{{ $route.name }} // 注意是 $route 没有 r
* 页面中使用 $router.name 获取路由配置中name 的值

>  <router-link :to="{name:'homePage',params:{username:'Linth'}}"></router-link>  
// 在router-link标签中使用 :to="{name: '/',params:{参数配置写这里}}"

接收参数: 在router-link 绑定的路由页面接收参数
{{ $route.params.username}}

> 通过url传递参数
path: '/childRouter/:id(/这里面可以配置正则过滤/)/:username', // 通过url传递参数 <router-link to='参数配置写这里面'>

## vue-router 重新定向
```
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
    }, {
      path: '/childRouter/:id(\\d+)/:username', // 通过url传递参数 <router-link to='参数配置写这里面'>
      name: 'childRouter222',
      component: ChildRouter2,
    }, { // redirect 重定向
      path: '/goHome',
      redirect: '/home', // 直接配置需要重定向的目标路径
    }, { // redirect 重定向 & url 传递参数
      path: '/showParams/:id(\\d+)/:username',
      redirect: '/childRouter/:id(\\d+)/:username', // 直接配置需要重定向的目标路径
    },
  ],
});

```

## alias别名

```
 { // alias 别名
      path: '/alias',
      component: alias,
      alias: '/aaa',
 },
```

```
      <!--alias别名-->
      <router-link to="/alias">alias</router-link>
      <router-link to="/aaa">alias--aaa</router-link>
```

与重定向类似，加载的是同一个页面，知识地址栏中的名称显示的是配置的别名

