// pages/enter_pin/enter_pin.js
Page({

  /**
   * Page initial data
   */
  data: {
    button: {
      name: 'fade',
      color: 'primary'
    }
  },
  goToGalleryPage: function (e) {
    console.log(this)
    this.toggle(e)

    let galleryId = this.data.galleryId
    
    console.log(99999, e)
    let id = e.currentTarget.dataset.id
    setTimeout(() => {
      wx.navigateTo({
        url: `/pages/show_gallery/show_gallery?id=${galleryId}`,
      });
    }, 850);
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({ galleryId: options.id })
    let page = this;

    wx.request({
      url: `https://penti-api.wogengapp.cn/api/v1/galleries/${options.id}`,
      method: 'GET',
      success(res) {
        const gallery = res.data;
        page.setData({
          gallery
        });
        // wx.setNavigationBarTitle({
        //   title: gallery.name,
        // });
        wx.hideToast();
        console.log(gallery);
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})