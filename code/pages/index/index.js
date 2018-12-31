//index.js
const app = getApp()

Page({
  data: {
    prefix: 'xx和yy相恋',
    timing: '23333333333'
  },
  onLoad: function () {
    var that = this;
    setInterval(
      function () {
        //这里写开始日期
        var startDate = new Date('Jan 1 2018 00:00:00');

        var timestamp = new Date().getTime();
        var startstamp = startDate.getTime();
        timestamp -= startstamp;
        timestamp /= 1000;

        var day = Math.floor(timestamp / (60 * 60 * 24));
        timestamp = Math.floor(timestamp % (60 * 60 * 24));
        var hour = Math.floor(timestamp / (60 * 60));
        timestamp = Math.floor(timestamp % (60 * 60));
        var minute = Math.floor(timestamp / 60);
        timestamp = Math.floor(timestamp % 60);
        var second = timestamp;

        var t = day.toString() + '天' + hour.toString() + '小时' + minute.toString() + '分钟' + second.toString() + '秒';
        that.setData({timing: t});
      }, 100
    )
  }
})
