//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    account_id: "",
    start_at: '2017-04-01',
    end_at: '2020-09-01',
    agreement: false,
    tags:[
    ]
  },
  onLoad: function () {
    var that = this;
    wx.setNavigationBarTitle({
        title: '我的信息'
    });
      if(util.isSignedIn){
          wx.request({
              url: app.globalData.host + '/api/v1/users/me',
              method: "get",
              header: {
                      'content-type': 'application/json',
                      'Authorization': 'Bearer ' + wx.getStorageSync('access_token') 
                  },
              success: function(res) {
                that.setData(res.data);
              }
          })
      }
  },
  bindStartDateChange: function(e) {
    this.setData({
      start_at: e.detail.value
    })
  },
  bindEndDateChange: function(e) {
    this.setData({
      end_at: e.detail.value
    })
  },
  beTheHelper: function(e) {
    this.setData({
      agreement: e.detail.value
    })
  },
  formSubmit: function(e){
    var that = this;
        that.setData({"account_id": e.detail.value["account_id"]});
        if(util.isSignedIn){
          wx.request({
              url: app.globalData.host + '/api/v1/users',
              method: "PUT",
              data: {
                account_id: e.detail.value["account_id"],
                tag_ids: e.detail.value["tag_ids"],
                start_at: that.data.start_at,
                end_at: that.data.end_at,
                agreement: that.data.agreement
              },
              header: {
                      'content-type': 'application/json',
                      'Authorization': 'Bearer ' + wx.getStorageSync('access_token') 
                  },
              success: function(res) {
                console.log(res)
              }
          })
        }
  }
})
