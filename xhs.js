const axios = require('axios');



//随机si"



//获取分享时间字符串


//get 函数
var aa = function () {




   axios({
   method: "POST",
     url: "https://activity.xhsxmt.com/activity/rewards/getEnabledRewards",
     header: {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-CN,zh-Hans;q=0.9","Connection": "keep-alive","Content-Length": "99","Content-Type": "application/json","Cookie": "jfe_pin=ec775f09; jfe_sn=H1nhms7lLvSWDqQwRlO7+CprQH0=; jfe_ts=1636617469.744","Host": "activity.xhsxmt.com","Origin": "https://h5.xhsxmt.com","Referer": "https://h5.xhsxmt.com/","User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15"},
     data:{
         "secretKey": "e9469538b0623783f38c585821459454",
         "currentDate": "2021/11/11 16:59:41",
         "pn": 1,
         "ps": 10
       }
  }).then((res) => {
    //then 成功
    const data = res.data;
const obj=JSON.parse(data);
     console.log(obj.data.lst);
  }).catch((err) => {
    //catch 失败
    console.log(err)


  });
}




const sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))

}
const request = async function () {
  for (let i = 0; i <1; i++) {
    aa();
   //console.log(i);

    await sleep(0.00001);
  }
}




request();
