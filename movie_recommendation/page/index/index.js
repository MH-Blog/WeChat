// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [{
        movieName: "大黄蜂",
        movieImg: "http://img5.mtime.cn/mt/2018/12/04/160518.62113167_1280X720X2.jpg",
        movieEvaluate: "大黄蜂化身地球守卫者",
        recommend: true,
        id: 246986,
      },
      {
        movieName: "密室逃生",
        movieImg: "http://img5.mtime.cn/mt/2018/12/24/092751.50837833_1280X720X2.jpg",
        movieEvaluate: "六位主角遭遇花样夺命机关考验",
        recommend: false,
        id: 261180,
      },
      {
        movieName: "死侍2：我爱我家",
        movieImg: "http://img5.mtime.cn/mt/2019/01/15/113907.82092208_1280X720X2.jpg",
        movieEvaluate: "死侍组建X特攻队玩梗无极限",
        recommend: true,
        id: 231981,
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(this.data.movieList.length)
    this.setData({
      currentIndex: this.data.movieList.length - 1
    })
  },

  f0: function(e) {
    this.setData({
      currentIndex: this.data.movieList.length - 1
    })
  },

  f1: function(e) {
    console.log(e.currentTarget)
    var mid = e.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '/page/detail/detail?mid=' + mid,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return{
      title:"每周推荐"
    }
  }
})