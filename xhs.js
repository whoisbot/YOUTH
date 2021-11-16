const axios = require('axios');
var xhsinventory = [],
  array = $store.get('origin'),
  jiankong = $store.get('xhsnotify');


var notify = function (xhtybe,xhword) {
   axios({
   method: "POST",
     url: "http://www.pushplus.plus/send",
     header: {"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh-Hans;q=0.9","Connection": "close","Host": "www.pushplus.plus","Upgrade-Insecure-Requests": "1","User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15"},
     data:{
    "token":"token",
    "title":xhtybe,
    "content":xhword,
    "topic":"jdplus",
    "template":"html"
}
  }).then((res) => {
    //then 成功
    const data = res.data;

    console.log(data);
  }).catch((err) => {
    //catch 失败
    console.log(err)


  });
}





//获取分享时间字符串


//get 函数
var aa = function () {




  axios({
    method: "POST",
    url: "https://activity.xhsxmt.com/activity/rewards/getEnabledRewards",
    header: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Connection": "keep-alive",
      "Content-Length": "99",
      "Content-Type": "application/json",
      "Cookie": "jfe_pin=ec775f09; jfe_sn=H1nhms7lLvSWDqQwRlO7+CprQH0=; jfe_ts=1636617469.744",
      "Host": "activity.xhsxmt.com",
      "Origin": "https://h5.xhsxmt.com",
      "Referer": "https://h5.xhsxmt.com/",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15"
    },
    data: {
      "secretKey": "e9469538b0623783f38c585821459454",
      "currentDate": "2021/11/11 16:59:41",
      "pn": 1,
      "ps": 90
    }
  }).then((res) => {
    //then 成功
    const data = res.data;
    const obj = JSON.parse(data);
    const xhsinventory = obj.data.lst;
console.log("我还活着");

    for (let i = 0; i < xhsinventory.length; i++) {
      if (jiankong.length) {
        for (let j = 0; j < jiankong.length; j++) {
          if (jiankong[j] == xhsinventory[i].name && xhsinventory[i].remainNum > 0&&$store.get(xhsinventory[i].name)) {

 notify("监控项目库存增加",xhsinventory[i].name + "   " + "需要积分" + xhsinventory[i].point + "\n" + "数量" + xhsinventory[i].remainNum);
$store.put(0, xhsinventory[i].name);
   

          }
        }
      }

      if (array.indexOf(xhsinventory[i].name) == -1) {
        array.push(xhsinventory[i].name);
        $store.put(array, 'origin')

        notify("上新",xhsinventory[i].name + "    " + "需要积分" + xhsinventory[i].point + "\n" + "数量" + xhsinventory[i].remainNum);
      }
    }






  }).catch((err) => {
    //catch 失败
    console.log(err)


  });
}




const sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))

}
const request = async function () {
  for (let i = 0; i < 1; i++) {
    aa();
    //console.log(i);

    await sleep(0.00001);
  }
}




request();
