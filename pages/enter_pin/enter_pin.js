// pages/enter_pin/enter_pin.js
Page({

  /**
   * Page initial data
   */
  data: {
    button: {
      name: 'fade',
      color: 'primary',
      inputValue: ''
    }
  },
  bindKeyInput: function (e) {
    console.log(e)
    this.setData({
      inputValue: e.detail.value
    });
  },
  goToGalleryPage: function (e) {
  
    if (this.data.inputValue === this.data.gallery.pin) {
      const authorizedGalleries = wx.getStorageSync("authorizedGalleries") || []
      authorizedGalleries.push(this.data.gallery.id)
      wx.setStorageSync("authorizedGalleries", authorizedGalleries)

      let galleryId = this.data.galleryId

      wx.redirectTo({
        url: `/pages/show_gallery/show_gallery?id=${galleryId}`,
      });

    } else {
      wx.showToast({
        title: 'Incorrect Pin',
        icon: 'none'
      })
    }
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