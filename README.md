# vue_router
[vue-router 官方的路由管理器](https://router.vuejs.org/zh)

> A Vue.js project

参考：[技术胖的Vue-router视频教程](http://jspang.com/post/vue-router.html)

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

## dev1 vue-router路由 配置子路由 router-link标签传递参数

## dev2 单页面多路由

```
  // 路由中配置
  routes: [
      {
        path: '/',
        name: 'HelloWorld',
        components: { // 注意这里要加s
          // 单页面多路由 配置多个模版
          default: HelloWorld,
          home, // 注意这里的名称要和 页面中 <router-view name=" home "/> 中的name一致
          ChildRouter,
        },
      },
    ],
  });
```

```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Hello world!</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/childRouter">ChildRouterPage</router-link>
    </div>
    
    // 单页面多路由，页面中多路由配置
    <router-view/>
    <router-view name="home"/>
    <router-view name="ChildRouter"/>
  </div>
</template>

```

## 传参

{{ $route.name }} // 注意是 $route 没有 r
* 页面中使用 $router.name 获取路由配置中name 的值

*  <router-link :to="{name:'homePage',params:{username:'Linth'}}"></router-link>  
// 在router-link标签中使用 :to="{name: '/',params:{参数配置写这里}}"

接收参数: 在router-link 绑定的路由页面接收参数
{{ $route.params.username}}

* 通过url传递参数 dev3  
path: '/childRouter/:id(/这里面可以配置正则过滤/)/:username', // 通过url传递参数 <router-link to='参数配置写这里面'>

## vue-router 重新定向 dev4
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

## alias别名 dev5

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

## [路由过度动画](https://router.vuejs.org/zh/guide/advanced/transitions.html#%E5%8D%95%E4%B8%AA%E8%B7%AF%E7%94%B1%E7%9A%84%E8%BF%87%E6%B8%A1) dev6

在外面嵌套一层transition标签并配置name='效果'属性,然后在App.vue页面配置过度动画css样式即可，但效果不好看，还要配置mode="out-in"属性
```
  <transition name="fade" mode="out-in">
     <router-view/>
  </transition>
```

## mode的作用和404页面的处理 dev6

在路由配置文件下添加
mode="history" | mode="hash" 
```
mode="history"  //该模式下路径不带#
mode="hash"     //该模式下地址栏路径是带#的

// 表现不同
http://localhost:8080/home
http://localhost:8080/#/

```

### 404页面的处理


```
 {
    path: '*', // * 匹配地址错误时展示404
    component: Error,
 },

```

## 路由中的钩子函数 dev6

两种配置方法
1. 写在路由配置文件中的钩子函数

> 但是在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时。  

```
{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
```

2. 写在模版中的钩子函数

  写在模板中就可以有两个钩子函数可以使用：

* beforeRouteEnter：在路由进入前的钩子函数。
* beforeRouteLeave：在路由离开前的钩子函数。

```
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
//这是写在params.vue模板里的路由钩子函数。它可以监控到路由的进入和路由的离开，也可以轻易的读出to和from的值。

```

* 三个参数：

  to:路由将要跳转的路径信息，信息是包含在对像里边的。  
  from:路径跳转前的路径信息，也是一个对象的形式。  
  next:路由的控制参数，常用的有next(true)和next(false)。 
  

## 编程式导航 dev7

> 在这前面都是用<router-link>标签或者直接操作地址栏的形式完成的，那如果在业务逻辑代码中需要跳转页面我们如何操作？这就是我们要说的编程式导航，顾名思义，就是在业务逻辑代码中实现导航。

```
// 在App.vue 文件中
<template>
    <div>
      <!--编程式导航-->
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="random">random</button>
    </div>
    ···
</template>


<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      this.$router.go(-1); // 后退
    },
    goForward() {
      this.$router.go(1); // 前进
    },
    random() {
      this.$router.push('/aaa'); // 任意指定路径
    },
  },
};
</script>
```
  
   

