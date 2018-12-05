// pages/workspaces/arts.js
let app = getApp()

Page({

  data: {

  },

  onLoad: function (options) {
    let page = this;

    //Request API to get workspace
    wx.request({
      url: "http://pentimento-mp.ellerystars.xyz/api/mock_paintings.json",
      method: 'GET',
      success(res) {
        const artworks = res.data;
        console.log(3242342, artworks);
        page.setData({
          artworks
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
  showWorkspace(e) {
    const workspaceId = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: `/pages/art_details/art_details?id=${workspaceId}`,
    });
  }
})