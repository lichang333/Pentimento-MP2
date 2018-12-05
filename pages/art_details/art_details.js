// pages/art_details/art_details.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  onLoad: function (options) {
    this.setData({ spaceId: options.id })

    let that = this;

    wx.request({
      url: `http://pentimento-mp.ellerystars.xyz/api/mock_paintings.json/{options.id}.json`,
      method: 'GET',
      success(res) {
        const art = res.data;
        that.setData({
          art: art
        });
        wx.hideToast();
        console.log(453454, art);
      }
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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