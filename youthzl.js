const axios = require('axios');


 
    function randomString() {
      let len = 32;
      let $chars = "abcdefhijkmnprstwxyz123456789";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
    
    

    var aa=function(){
      
        var j = randomString();
    
    const url = 'https://script.baertt.com/count2/callback?si='+j+'&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DQB5EzPY3exK9wOd7E9kvgruV6M9PFgWkqzQ78oADjvkbgZRGLV%2526uid%253D51526616%2526phone_code%253Da2823679662e562c3bb1fade2b2f3d5b%2526scid%253D37478516%2526time%253D1619453313%2526app_version%253D2.0.2%2526sign%253Db2787ec49cfd5780220a22c041d1c051&_=1619492007094&jsonpcallback=jsonp6';
    
    
     return axios.get(url, {
    
      headers: {'Referer' : 'https://focus.youth.cn/',
    'Host' : 'script.baertt.com',
    'User-Agent' : 'Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000522) NetType/WIFI Language/zh_CN'} //设置header信息
    }).then((res) => { 
      //then 成功
      console.log("ok")
    }).catch((err) => {
      //catch 失败
      console.log("失败")
    
    });
  }
  for(var i=0;i<10;i++){
      aa();
      }
