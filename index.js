const axios = require('axios');


 //随机si
    function randomString() {
      let len = 9;
      let $chars = "0123456789";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
    
           function randomnum() {
      let len = 5;
      
      let $chars = "0123456789";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
    
    //获取分享时间字符串
  
    
//get 函数
    var aa=function(){
      
    
    
    return axios({
    url : 'https://wlkdapi.zhongchuanjukan.com/article/read',
method: 'post',


        data:
{"userid":"49adffa0fad34df5b30706e8375c4f96","sceneType":"list","title":"有钱任性的三大生肖，想买什么就买什么，看看其中包括你吗？","optime":"1622172926","sysname":"wlkd","smid":"D2Jn0GxDLYXN3TXqfgwvB3OiKCecKEQgvNakzOYA5sy+wXfe","brand":"apple","channel":"AppStore","appversion":"2.0.0","artClassify":randomnum(),"os":"ios","sensorX":0,"sensorY":0,"device_userid":"","token":"6d1ec26b2fc14596a519358949c6fff5","appversioncode":"200","model":"iUnknown","sensorZ":0,"osversion":"14.3","artId":randomString()
        },
   headers:
   {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Length": "519","Content-Type": "application/json","Host": "wlkdapi.zhongchuanjukan.com","User-Agent": "wen lu kan dian/2.0.0 (iPad; iOS 14.3; Scale/2.00)","sppid": "27b38b745afe079c28828467bce28d1e"}
    }).then((res) => { 
      //then 成功
 const data = res.data;
 console.log("奖励"+data.profit);

    }).catch((err) => {
      //catch 失败
      console.log(err)
      
    
    });
  }




/*const sleep = function (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
  
}
const request = async function(){
  for(let i=0;i<2;i++){*/
    aa();
  
   /* await sleep(3000);
  }
}




request();*/
