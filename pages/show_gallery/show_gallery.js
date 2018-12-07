// pages/workspaces/arts.js
let app = getApp()

Page({

  data: {

  },

  onLoad: function (options) {
    let page = this;

    //Request API to get workspace
    wx.request({
      url: "http://192.168.50.99:3000/api/v1/arts/",
      method: 'GET',
      success(res) {
        const artworks = res.data;
        console.log(3242342, artworks);
        page.setData({
          artworks: artworks
        });

        wx.hideToast();
      }
    });

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },
  showArtdetail(e) {
    const artworksId = e.currentTarget.dataset.id;
    console.log(artworksId);

    wx.navigateTo({
      url: `/pages/art_details/art_details?id=${artworksId}`,
    });
  }
})