const axios = require('axios');
const request = require('request');

 //随机si
 function randomString() {
      let len = 32;
      let $chars =
        'abcdefhijkmnprstwxyz123456789' ;
      let maxPos = $chars.length;
      let pwd = '';
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return pwd;
    }

    

    //获取分享时间字符串
  
    
//get 函数
   async function list(){
  
    
    axios({
     url:'https://ant.woyaoq.com/WebApi/ArticleTop/listsNewTag',
 method: 'post',
 headers: {
             'Accept': '*/*',
             'Accept-Encoding': 'gzip, deflate, br',
          'Referer': 'http://ant.woyaoq.com/h5/20200612makeMoney/?cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691x2Sw3ZexhYyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNfW6FjJiXr9-qapqGcXY&cookie_id=3228ebfe5ad068ac2969d57989aa0fc0&uid=54763715',
             'Host': 'ant.woyaoq.com',
             'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
             'X-Requested-With': 'XMLHttpRequest'
         },
    }).then(async(res) => { 
      //then 成功
const article=res.data;
//const article=JSON.stringify(res.data);



if (article.status == 1) {
                for (arts of article.data.items) {
 
                    if (arts.status == 1) {
                      console.log(arts.title);
  await sleep(1000);
                       share(arts.id);
                 //hh=arts.signature;
                    jj=arts.share_url;
                    hh=jj.match(/(?<=signature=)\w+/);
  await sleep(1000);
    for(let i=0;i<30;i++){
      aa(hh);

    
      await sleep(300);
    }
break;
                 
                    }

                  
                 }
}
})
}


 


 async function share(id){
      
      

    
     axios({
      
    url:'http://ant.woyaoq.com/WebApi/ShareNew/getShareArticleReward',
method: 'post',
       headers: {
                  'Accept': '*/*',
                  'Accept-Encoding': 'gzip, deflate, br',
                  'Referer': 'http://ant.woyaoq.com/h5/20200612makeMoney/?cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691x2Sw3ZexhYyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNfW6FjJiXr9-qapqGcXY&cookie_id=3228ebfe5ad068ac2969d57989aa0fc0&uid=54763715',
                  'Host': 'ant.woyaoq.com',
                  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                  'X-Requested-With': 'XMLHttpRequest'
              },

              data: 'article_id='+id
    }).then((res) => { 
      //then 成功
const data=res.data;
//console.log(data);
if (data.status == 1) {
                console.log("转发成功，共计转发" + data.data.items.share_num + "篇文章")
            }
    }).catch((err) => {
      //catch 失败
      console.log("失败")
      
    
    });
  }



    var aa=function(signbzf){
      
        var j = randomString();
    
  
var URL='https://script.woyaoq.com/count2/callback?si='+j+'&referer=https%253A%252F%252Fmy.allcitysz.net%252Ffivehot%252F20210609%253Fsid%253D32578074%2526uid%253D54763715%2526timestamp%253D1623294976%2526signature%253DpznrQKZ06xYeGkD5yA4wPxlBvCkRBgB78Nm2bvMqRWw9gPdLVO%2526scene_id%253Dfire_share%2526share_id%253D54763715325780741623294983396%2526time%253D1623294984891&_=1623295042775&jsonpcallback=jsonp6';
    
      request({
       url:URL,
//method: 'get',
    
     header:{
     Host: 'script.woyaoq.com',
     'User-Agent' : 'Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000522) NetType/WIFI Language/zh_CN',
     'Referer': 'https://my.allcitysz.net/'
       }
    }, function(error, response, body) {
     if (!error &response.statusCode == 200) {
         console.log("ok") // 请求成功的处理逻辑
     }
 }); 
}


async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
  
}
/*const request = async function(){



let b = list()
.then(res =>{
	//.then是接收正确返回的信息
	console.log(res) // {...}
 

  for(let i=0;i<3;i++){
    aa(b);
  
    //await sleep(30);
  }
})
.catch(err =>{
	// .catch 返回报错信息
	console.log(err)
})

  
}


request();*/
list();
