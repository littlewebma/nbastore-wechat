// pages/detail/detail.js
var sj =require('../../utils/sj.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    xt:"",
    index:"",
    name:"",
    dz:'',
  },
  change:function(e){
    let url = e.target.dataset.src;
    this.setData({
      dz:url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var homeindex = options.index;
    var homename=options.name;
    var Homedata = sj[homename][homeindex];
    var src = Homedata.child[0].src;
    this.setData({
      xt: Homedata,
      name: homename,
      dz:src,
      index: homeindex
    })
  },
  tocar:function(e){
    let index = e.currentTarget.dataset.index;
    let name = e.currentTarget.dataset.name;
    var cartItems = wx.getStorageSync("cartItems") || [];
    cartItems.push({
      name: e.target.dataset.name,
      detail: e.target.dataset.detail,
      url: e.target.dataset.url,
      title: e.target.dataset.title,
      price: e.target.dataset.price,
      value: 1,
      selected: true
    }),
    wx.setStorageSync("cartItems", cartItems)
    wx.navigateTo({
      url: '../shop-cart/shop-cart?name=' + name + '&&index=' + index
    })
    wx.showToast({
      title: '加入购物车成功！',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})