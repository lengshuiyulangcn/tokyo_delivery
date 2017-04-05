//app.js
var util = require('./utils/util.js')
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    util.userLogin((err)=>{
      if(err){
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }) 
  },
  getUserInfo:function(cb){
    var that = this
    if(wx.getStorageSync('access_token') != ""){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
	  wx.getUserInfo({
	    success: function(resp) {
            that.globalData.userInfo = resp.userInfo;
            if (res.code) {
              //发起网络请求
              wx.request({
                url: 'https://api.bocchi.tokyo/user_token',
                data: {
                  code: res.code,
                  user_info: that.globalData.userInfo
                },
                method: "POST",
                success: function(res) {
                    console.log(res.data);
                    wx.setStorageSync('access_token', res.data["jwt"]);
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        });
	    }
	});  
    }
  },
  globalData:{
    userInfo:null,
    host: "https://api.bocchi.tokyo" 
  },
})
