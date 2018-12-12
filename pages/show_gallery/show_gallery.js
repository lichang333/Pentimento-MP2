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
    });

    //Request API to get workspace
    wx.request({
      url: `https://penti-api.wogengapp.cn/api/v1/galleries/${options.id}/arts`,
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

  // wx.makePhoneCall({
  //   phoneNumber: '1340000' // 仅为示例，并非真实的电话号码
  // })

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