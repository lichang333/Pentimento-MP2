// pages/galleries/galleries.js
Page({

  /**
   * Page initial data
   */
  data: {
    src: '../../lib/assets/plus-solid.png',
    imgUrls: [
      'http://pentimento-mp.ellerystars.xyz/img/banner.jpg',
      'http://blog.ellerystars.com/wework_placeholder/chengdu.jpg',
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    toView: 'red',
    scrollTop: 100
  },

  onLoad: function (options) {
    let page = this;

    //Request API to get workspace
    wx.request({
      url: "http://penti-api.wogengapp.cn/api/v1/galleries",
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