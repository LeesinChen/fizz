module.exports = [
  {
    path: '/',
    component: '../pages/index', // 默认页面
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '../pages/home', },
    ]
  },
  {
    component: './404'
  }
]
