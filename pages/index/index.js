//index.js
//获取应用实例
const app = getApp()

// const pageColorMap = {
//   'index_page': '#637380',
//   'paintings': '#F0F0F0',
//   'overcast': '#c6ced2',
//   'lightrain': '#bdd5e1',
//   'heavyrain': '#c5ccd0',
//   'snow': '#aae1fc'
// }


Page({
  data: {
    button: {
      name: 'fade',
      color: 'primary'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
    toggle: function (e) {
      console.log(e);
      var anmiaton = e.currentTarget.dataset.class;
      var that = this;
      that.setData({
        animation: anmiaton
      })
      setTimeout(function () {
        that.setData({
          animation: ''
        })
      }, 1000)
    },
    toggleDelay: function () {
      var that = this;
      that.setData({
        toggleDelay: true
      })
      setTimeout(function () {
        that.setData({
          toggleDelay: false
        })
      }, 1000)
    },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToArtsPage: function (e) {
    console.log("Going to: /pages/galleries/galleries")
    console.log(this)
    this.toggle(e)
    
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/galleries/galleries'
      })}, 850);
  }
})