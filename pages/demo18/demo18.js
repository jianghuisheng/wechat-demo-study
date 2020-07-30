// pages/demo18/demo18.js
Page({


  data: {

  },

  /**
   * 发送请求初始化页面的数据
   */
  onLoad: function (options) {
    console.log('onLoad')
  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log('onReady')
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    // 页面数据效果重新处理
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 需要页面的滚动,上拉加载下一页数据
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

  onPageScroll(){
    console.log('滚动了')
  },

  onResize(){
    console.log('小程序发生横屏竖屏的切换')
  },

  onTabItemTap(){
    console.log('tabbar页面点击自己触发')
  }
})