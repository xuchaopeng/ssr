# ssr

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


定义：SSR解决方案，后端渲染出完整的首屏的dom结构返回，前端拿到的内容包括首屏及完整spa结构，应用激活后依然按照spa方式运行，这种页面渲染方式被称为**服务端渲染**。[github-srr](https://github.com/xuchaopeng/ssr.git)。<br>

通常解决以下问题（ssr优缺点很鲜明的架构）：<br>
1、SEO不友好。<br>
2、首屏加载时间相对较长。<br>

缺点: <br>
1、负载大，服务器负载的准备，缓存的策略做好准备。
2、开发条件的限制，有些生命周期在服务端没有。
3、构建部署：nodejs环境。

技术选型：<br>
1、首屏内容的达到时间的重要程度如何? 
2、seo是否是重要的需求 ? 仅有少量营销页面需要seo，考虑预渲染 pre-render
3、已经完成spa项目，重构量很大怎么办 ? 可以考虑Puppeteer爬虫（爬虫直接去爬spa项目，把爬取后的内容转发给客户端，使用这种方案后，不再是spa）
4、高流量的情况下是否做好充足服务器负载准备，缓存策略制定 ? 

实际上过程：request => express => main.js => router/index.js

