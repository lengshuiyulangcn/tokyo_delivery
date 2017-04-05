function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function getUserList(cb){
  wx.request({
      url: 'http://localhost:3000/api/v1/users',
      header: {
              'content-type': 'application/json',
              'Authorization': 'Bearer ' + wx.getStorageSync('access_token') 
          },
      success: function(res) {
        cb(res)
      }
  })
 }

function userLogin(cb){
      wx.login({
        success: function (res) {
	  wx.getUserInfo({
	    success: function(resp) {
            var userData  = resp.userInfo;
            if (res.code) {
              wx.request({
                url: 'https://api.bocchi.tokyo/user_token',
                data: {
                  code: res.code,
                  user_info: userData 
                },
                method: "POST",
                success: function(res) {
                  wx.setStorageSync('access_token', res.data["jwt"]);
                  cb(null);
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg);
                 cb(res.errMsg);
            }
          }
        });
	    }
	});  
}

function isSignedIn() {
  if(wx.getStorageSync('access_token') == ""){
      return  false
  }
  else{
    return true
  }
}
module.exports = {
  formatTime: formatTime,
  getUserList: getUserList,
  userLogin: userLogin,
  isSignedIn: isSignedIn
}
