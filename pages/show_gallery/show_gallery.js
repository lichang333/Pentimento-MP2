// pages/workspaces/arts.js
let app = getApp()

Page({
  data: {
    items: [
      { name: '', value: '' }
    ]
  },
  showModal: function (e) {
    console.log(333,"show modal")
    var showName = e.currentTarget.dataset.modal;
    console.log(444,showName)
    this.setData({
      modalName: showName
    })
  },
  closeModal: function (e) {
    console.log(5555555,'close modal')
    this.setData({
      modalName: null
    })
  },

  data: {

  },

  activeShowModal: function (e) {
    console.log(3333,e)
    const id = e.currentTarget.dataset.id
    const title = e.currentTarget.dataset.title
    const description = e.currentTarget.dataset.description
    console.log(description)
    console.log(`Click at item id : ${id}`)
    
    wx.showModal({
      title: `${title}`,
      content: `${description}`,
    })
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