// pages/galleries/galleries.js
Page({

  /**
   * Page initial data
   */
  data: {
    src: 'http://pentimento-mp.ellerystars.xyz/img/locker/locker3.png',
    banners: [ 
      { 
        link: '/pages/index/index',
        imageUrl: 'http://pentimento-mp.ellerystars.xyz/img/banner.jpg'
      }, {
        link: '/pages/index/index',
        imageUrl: 'http://blog.ellerystars.com/wework_placeholder/chengdu.jpg'
      }, {
        link: '/pages/show_artists/show_artists',
        imageUrl: 'http://pentimento-mp.ellerystars.xyz/img/artists/wangechi-mutu/profile.jpg'
      }
      
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
      url: "https://penti-api.wogengapp.cn/api/v1/galleries",
      method: 'GET',
      success(res) {
        const galleries = res.data;

        page.setData({
          galleries: galleries
        });
        console.log(333333,galleries)

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
  enterPin: (e) => {
    wx.showModal({
      title: 'Contact Info',
      content: '1821-394-2132',
      cancelText: 'Back',
      confirmText: 'Unlock',
      success(res) {
        if (res.confirm) {
          const galleryId = e.currentTarget.dataset.id;
          console.log(galleryId);

          wx.navigateTo({
            url: `/pages/enter_pin/enter_pin?id=${galleryId}`,
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  callQRcode: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    });
  },
  gotoLink: function(e) {
    console.log(333,e)
    let link = e.currentTarget.dataset.link

    wx.navigateTo({
      url: link,
    })
  }
})