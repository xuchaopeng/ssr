import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';


// 客户端数据预取处理， 确保客户端每个组件如果右asyncData ， 要执行之。
Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options;
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({ store: this.$store, route: this.$route });
    }
  },
});

// content是服务器传递给vue实例的参数对象
// 每次用户请求的时候，会创建新的实例
export function createApp(context) {
  // 获得router实例
  const router = createRouter();
  const store = createStore();
  //创建vue实例
  const app = new Vue({ router, store, context, render: (h) => h(App) });
  return { app, router, store };
}
