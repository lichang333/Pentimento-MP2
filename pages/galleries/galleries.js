// pages/galleries/galleries.js
Page({

  /**
   * Page initial data
   */
  data: {
    src: '../../lib/assets/plus-solid.png',
  },

  onLoad: function (options) {
    let page = this;

    //Request API to get workspace
    wx.request({
      url: "http://192.168.50.99:3002/api/v1/galleries",
      method: 'GET',
      success(res) {
        const galleries = res.data;
        page.setData({
          galleries: galleries
        });

        wx.hideToast();
      }
    });

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

  },
  showGallery(e) {
    const galleryId = e.currentTarget.dataset.id;
    console.log(galleryId);

    wx.navigateTo({
      url: `/pages/show_gallery/show_gallery?id=${galleryId}`,
    });
  },
  callQRcode: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    });
  }
})