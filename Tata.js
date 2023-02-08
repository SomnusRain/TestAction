var request = require('request');
var url='https://oapi.dingtalk.com/robot/send?access_token=fb47f97e6e8e92b2d57bea589a78281e4e950bc5a091814ea4d5ba92dd7184c8'

var d_start = new Date('2021/11/01 00:00:00');
var d_now = new Date()
var cat_user=[
    ['何立军','+86-13395055857'],
    ['刘磊','+86-13236590650'],
    ['魏欢','+86-19525467289'],
    ['周梦凯','+86-17693151105'],
    ['周盛','+86-15026843859'],
    ['王小晚','+86-17521037237'],
    ['王佳','+86-13916196141'],
    ['刘云','+86-15335881616']
    
]
var index = Math.floor(parseInt(d_now - d_start) / 1000 / 60 / 60 / 24 / 7) % cat_user.length

index=(index+3) % cat_user.length
console.log(index,cat_user[index])
let synsRequestData={
    "msgtype": "markdown",
    "markdown": { 
        "title": "tata",
        "text": `上药记录`}
};
console.log(synsRequestData,index)
httprequest(url,synsRequestData)
function httprequest(url,data){
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: data
    }, (error, resp, body) => {
        if (!error && resp.statusCode == 200) {
            console.log(body) // 请求成功的处理逻辑
        }
    });
}
