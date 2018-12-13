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
    // this.setData({ galleryId: options.id })
    let page = this;

    wx.request({
      // url: `https://penti-api.wogengapp.cn/api/v1/galleries/${options.id}`,
      method: 'GET',
      success(res) {
        const gallery = res.data;
        page.setData({
          gallery
        });
        wx.setNavigationBarTitle({
          title: gallery.name,
        });
        wx.hideToast();
        console.log(gallery);
      }
    });

    //Request API to get workspace
    wx.request({
      // url: `https://penti-api.wogengapp.cn/api/v1/galleries/${options.id}/arts`,
      method: 'GET',
      success(res) {
        const artworks = res.data;
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
      // url: `/pages/art_details/art_details?id=${artworksId}`,
    });
  },
  enlargeImage: function (e) {
    console.log(3333, e)
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: ['http://pentimento-mp.ellerystars.xyz/img/mock/poster6.jpg']
    });
  }
})