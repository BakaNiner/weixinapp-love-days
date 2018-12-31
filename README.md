# weixinapp-love-days

简单微信小程序 恋爱天数

非常简单的JavaScript HelloWorld级别程序，送女朋友的礼物，最重要的心意。

给定起始日期，计算从起始日期到现在经过的天、小时、分钟、秒。

## 界面

主界面信息在weixinapp-love-days/pages/index/index.wxml文件中，默认显示一张图片和时间信息。

图片为weixinapp-love-days/pages/index/1.png，可以自行替换。

## 起始日期修改

这部分代码在weixinapp-love-days/pages/index/index.js文件中，将

```javascript
var startDate = new Date('Jan 1 2018 00:00:00');
```

Date括号里的部分改为你想要的起始日期即可。