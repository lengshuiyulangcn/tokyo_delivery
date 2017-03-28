//index.js
//获取应用实例
var app = getApp()

var items =  [{"thumb": "http://pics.dmm.co.jp/mono/actjpgs/thumbnail/katou_natumi2.jpg", "oto": "katou_natumi2", "yomi": "\u304b\u3068\u3046\u306a\u3064\u307f2", "gyou": "ka", "id": 1000617, "name": "\u52a0\u85e4\u306a\u3064\u307f"}, {"thumb": "http://pics.dmm.co.jp/mono/actjpgs/thumbnail/kanou_momoka.jpg", "oto": "kanou_momoka", "yomi": "\u304b\u306e\u3046\u3082\u3082\u304b", "gyou": "ka", "id": 1000734, "name": "\u53f6\u6843\u82b1"}, {"thumb": "http://pics.dmm.co.jp/mono/actjpgs/thumbnail/kasuga_momo.jpg", "oto": "kasuga_momo", "yomi": "\u304b\u3059\u304c\u3082\u3082", "gyou": "ka", "id": 1000904, "name": "\u6625\u65e5\u3082\u3082"}, {"thumb": "http://pics.dmm.co.jp/mono/actjpgs/thumbnail/kaduki_manaka.jpg", "oto": "kaduki_manaka", "yomi": "\u304b\u3065\u304d\u307e\u306a\u304b", "gyou": "ka", "id": 1000956, "name": "\u83ef\u6708\u307e\u306a\u304b"}, {"thumb": "http://pics.dmm.co.jp/mono/actjpgs/thumbnail/kaduki_aika.jpg", "oto": "kaduki_aika", "yomi": "\u304b\u3065\u304d\u3042\u3044\u304b", "gyou": "ka", "id": 1001037, "name": "\u6a3a\u6708\u611b\u83ef"}, {"thumb": "http://pics.dmm.co.jp/mono/actjpgs/thumbnail/kaede_himeki.jpg", "oto": "kaede_himeki", "yomi": "\u304b\u3048\u3067\u3072\u3081\u304d", "gyou": "ka", "id": 1001357, "name": "\u6953\u59eb\u8f1d"}, {"thumb": "http://pics.dmm.co.jp/mono/actjpgs/thumbnail/kazami_nagisa.jpg", "oto": "kazami_nagisa", "yomi": "\u304b\u3056\u307f\u306a\u304e\u3055", "gyou": "ka", "id": 1001630, "name": "\u98a8\u898b\u6e1a"} ]
Page({
  data: {
    items: []
  },
  onLoad: function () {
    var that = this;
    wx.setNavigationBarTitle({
        title: '外卖'
    });
    that.setData({items: items});
  }
})
