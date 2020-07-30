// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },
  handleInput(e){
    console.log('😊',e.detail.value)
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
    const chuandiNum = e.currentTarget.dataset.chuandi;
    console.log(chuandiNum)
    this.setData({
      num:this.data.num + chuandiNum
    })
  }

})