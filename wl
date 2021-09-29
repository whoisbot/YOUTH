const axios = require('axios');
let cookieWenlv=$store.get('login');
let cookieArr =[],cookie='',myuid='',sppid='',opentime='';
var array = new Array();

    if ( cookieWenlv.indexOf("#") ==-1) {
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
                cookie = cookieArr[i];
myuid=cookie.substring(0,32);
sppid=cookie.substring(32,64);
opentime=cookie.substring(64,74);

    read(myuid,sppid,opentime,array);





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
  function read(kdcookie,kdcookie2,opentime,array){
      
 
    
    
    axios({
    url : 'https://wlkdapi.zhongchuanjukan.com/login/appOpen',
method: 'post',


        data:
{"channel":"AppStore","userid":"0427bea519444323a36f63ee2fc6ade1","appversioncode":"201","appversion":"2.0.1","mobilemodel":"iphone","brand":"apple","optime":opentime,"os":"ios","mobilebrand":"","imei":"","sysname":"wlkd","token":kdcookie,"smid":"D2pT6NvGNbek7ApcZG\/l6IWKFXdRsCHeu0I3K4ogTihCQX50","model":"iUnknown","osversion":"15.0","device_userid":""},
   headers:
{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Type": "application/json","Host": "wlkdapi.zhongchuanjukan.com","User-Agent": "wen lu kan dian/2.0.1 (iPad; iOS 15.0; Scale/2.00)","sppid":kdcookie2}
    }).then((res) => { 
      //then 成功
 const data = res.data;
const hero=data.token+" "+data.user_name;
//console.log(data);
array.push(hero);

$store.put(array,'token');
//$store.put('#'+data.user_name,'token');    }).catch((err) => {
      //catch 失败
      console.log(err)
      
    
    });


  
  }




const sleep = function (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
  
}


