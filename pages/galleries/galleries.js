// pages/galleries/galleries.js
Page({

  /**
   * Page initial data
   */
  data: {
    src: '../../lib/assets/plus-solid.png',
    items: [
      { name: 'Winshare Art Museum', address: 'New International Convention and Exhibition Center 208-1-1, Chengdu', website: 'www.winshareartmuseum.com', phone: '028-85332529', email: 'wenxuanysjg@163.com', img:'http://pentimento-mp.ellerystars.xyz/img/galleries/winshare/gallery.jpg', open_hours: '9:00 - 21:00' },
      { name: 'K-space', address: 'No. 3-4, No. 87 Fangyi Street, High-tech Zone, Chengdu', website: 'k.99ys.com', phone: '028-85125029', email: 'kgallery001@126.com', img: 'http://pentimento-mp.ellerystars.xyz/img/galleries/k-space/gallery.jpg', open_hours: '9:00 - 21:00' },
      { name: 'Chengdu Contemporary Art Museum', address: 'C1 West Building, Tianfu Software Park, Tianfu Avenue, Metro Hi-tech Zone', website: 'www.chengdumoca.org', phone: '028-85980055', email: 'chengdumoca@hotmail.com', img: 'http://pentimento-mp.ellerystars.xyz/img/galleries/museum-of-contemporary-art-chengdu/gallery.jpg', open_hours: '9:00 - 21:00, Thus - Sun'},
      { name: 'Thousand Plateaus', address: 'High-tech Zone Tiexiangsi Water Street', website: 'www.1000plateaus.org', phone: '028-85126358', email: '1000plateaus.cn@gmail.com', img: 'http://pentimento-mp.ellerystars.xyz/img/galleries/thousand-plateaus/gallery.jpg', open_hours: '10:30 - 18:30, Thus to Sun'},
      { name: 'Usunhome Art Museum', address: 'East Lake Park, No. 6, No. 299, East 5th Section, Second Ring Road', website: 'usun-artmuseum.cn', phone: '028-86670951', email: '1000plateaus.cn@gmail.com', img: 'http://pentimento-mp.ellerystars.xyz/img/galleries/usunhome-art-museum/gallery.jpg', open_hours: '9:00 - 21:00'}
    ]
  },



  onLoad: function (options) {
    let page = this;

    //Request API to get workspace
    wx.request({
      url: "http://192.168.50.99:3002/api/v1/galleries",
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