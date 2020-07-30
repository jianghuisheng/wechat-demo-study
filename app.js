//app.js
App({
  onLaunch(){
    console.log("onLaunch,应用第一次启动时候，获取用户个人信息");
    // 触发error
    // aabbcc

    // 不能触发 onPageNotFound
    // wx:navigator({  
    //   url:'/11/22/33'
    // })
  },
  onShow(){
    console.log("onShow,应用被用户看到,多用于对应用数据或者页面效果 重置")
  },
  onHide(){
    console.log("onHide,应用被隐藏了，多用于暂停或清楚定时器")
  },
  onError(err){
    console.log("应用发生代码错误的时候，手机用户的错误信息，通过异步请求发给后台",err)
  },
  onPageNotFound(){
    console.log('应用第一次启动，找不到第一个入口页面触发')
    // 如果页面不存在了 通过js的方式来重新跳转页面 重新跳转到第二个首页（不能跳转到tarbar页面和导航组件类似）
    wx.navigateTo({
      url:'/pages/demo09/demo09'
    })
  }
})