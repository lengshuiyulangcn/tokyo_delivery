//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    users: [],
  },
  onShow: function () {
    var that = this;
    wx.setNavigationBarTitle({
        title: '免税帮客'
    });
    if(util.isSignedIn){
      wx.request({
          url: app.globalData.host + '/api/v1/users',
          header: {
                  'content-type': 'application/json',
                  'Authorization': 'Bearer ' + wx.getStorageSync('access_token') 
              },
          success: function(res) {
            that.setData({"users": res.data}) 
          }
      })
    }
  }
})
