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
{"userid":"0427bea519444323a36f63ee2fc6ade1","sceneType":"list","title":"新华热评：论文成生意 排雷还是埋雷？","optime":"1622182141","sysname":"wlkd","smid":"D2pT6NvGNbek7ApcZG\/l6IWKFXdRsCHeu0I3K4ogTihCQX50","brand":"apple","channel":"AppStore","appversion":"2.0.0","artClassify":randomnum(),"os":"ios","sensorX":0,"sensorY":0,"device_userid":"","token":"eae1f942f75740848d903e4123d14940","appversioncode":"200","model":"iUnknown","sensorZ":0,"osversion":"14.3","artId":randomString()
        },
   headers:
   {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Length": "501","Content-Type": "application/json","Host": "wlkdapi.zhongchuanjukan.com","User-Agent": "wen lu kan dian/2.0.0 (iPad; iOS 14.3; Scale/2.00)","sppid": "630cf6a460fcbf7e888a4f37ee5d6499"}
    }).then((res) => { 
      //then 成功
 const data = res.data;
 console.log(data);
    }).catch((err) => {
      //catch 失败
      console.log(err)
      
    
    });
  }




const sleep = function (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
  
}
const request = async function(){
  for(let i=0;i<70;i++){
    aa();
  
    await sleep(35000);
  }
}




request();
