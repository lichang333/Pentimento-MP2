// pages/art_details/art_details.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  onLoad: function (options) {
    this.setData({ artworksId: options.id })

    let that = this;
    console.log('making request')
    wx.request({
      url: `http://192.168.50.2:3000/api/v1/arts/${options.id}`,
      method: 'GET',
      success(res) {
        console.log(res);
        const art = res.data;
        that.setData({
          art
        });
        wx.hideToast();
        console.log(art);
      },
      fail(res) {
        console.log(res)
      }
    });
  },
  /**
   * Lifecycle function--Called when page load
   */

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