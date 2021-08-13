const axios = require('axios');
let cookieWenlv=$store.get('wlkd');
let cookieArr =[],cookie='',myuid='';


    if ( cookieWenlv.indexOf("#") == -1) {
        cookieArr.push(cookieWenlv)
    } else if (cookieWenlv.indexOf("#") > -1) {
            cookieWenlv = cookieWenlv.split("#")
        };

            Object.keys(cookieWenlv).forEach((item) => {
                if (cookieWenlv[item]) {
                    cookieArr.push(cookieWenlv[item])
                }
            });


for (let i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i]) {
                cookie = cookieArr[i],

myuid=cookie.match( /.{32}/)[0],

read(myuid)

            }
}

  

 //随机si
    function randomString() {
      let len = 9;
      let $chars = "123456789";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
    
     function randomnum() {
          let len = 2;
          
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
function read(kdcookie){
      
 
    
    
    return axios({
    url : 'https://wlkdapi.zhongchuanjukan.com/article/read',
method: 'post',


        data:
{"userid":"0427bea519444323a36f63ee2fc6ade1","sceneType":"list","title":"英国一艘游艇遭30头虎鲸追击两小时 舵被咬掉一大块","optime":"1625142224","sysname":"wlkd","smid":"D2pT6NvGNbek7ApcZG\/l6IWKFXdRsCHeu0I3K4ogTihCQX50","brand":"apple","channel":"AppStore","appversion":"2.0.1","artClassify":randomnum(),"os":"ios","sensorX":0,"sensorY":0,"device_userid":"","token":kdcookie,"appversioncode":"201","model":"iUnknown","sensorZ":0,"osversion":"15.0","artId":randomString()},
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




const sleep = function (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
  
}


