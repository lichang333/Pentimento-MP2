// pages/workspaces/arts.js
let app = getApp()

Page({
  data: {
    items: [
      { name: '', value: '' }
    ]
  },

  data: {

  },

  onLoad: function (options) {
    this.setData({galleryId: options.id})
    let page = this;

    wx.request({
      url: `http://192.168.50.99:3002/api/v1/galleries/${options.id}`,
      method: 'GET',
      success(res) {
        const gallery = res.data;
        page.setData({
          gallery
        });
        wx.hideToast();
        console.log(gallery);
      }
    });

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
  },
  enlargeImage: function (e) {
    console.log(3333,e)
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: [src]
      });
  }
})