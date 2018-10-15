// pages/nba/nba.js
var sj =require('../../utils/sj.js');
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    sj:"",
    usename:"shop",
    scrollLeft: 100,
    imgUrls: [
      '../../images/banner1.jpg',
      '../../images/banner2.jpg',
      '../../images/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    selected: true,
    selected1: false,
    selected2: false,
    //模拟数据
   
  },
  //滚动
  tapMove: function (e) {
    console.log(123);
    var that = this;
    that.setData({
      scrollLeft: that.data.scrollLeft + 10
    })
  },
  //事件处理函数
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: true,
      selected3: false,
      selected4: false,
      selected5: false,
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
      selected5: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
      selected5: false
    })
  },
  selected4: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
      selected5: false
    })
  },
  selected5: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: true
    })
  },

  /*轮播图事件 */
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
       
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      sj:sj,
    })
  },
  /*跳转页面*/
  tz: function (e) {
    let index = e.currentTarget.dataset.index;
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url:'../detail/detail?name=' + name +'&&index='+index
    })
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