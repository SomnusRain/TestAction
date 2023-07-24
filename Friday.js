var request = require('request');
var url='https://oapi.dingtalk.com/robot/send?access_token=fb47f97e6e8e92b2d57bea589a78281e4e950bc5a091814ea4d5ba92dd7184c8'

var d_start = new Date('2021/11/01 00:00:00');
var d_now = new Date()
var cat_user=[
    ['何立军','+86-13395055857'],
    ['刘磊','+86-13236590650'],
    ['周盛','+86-15026843859'],
    ['王佳','+86-13916196141'],
    ['刘云','+86-15335881616'],
    ['王斌斌','+86-13818409964'],
    ['孔德龙','+86-15900606903']
]
var index = Math.floor(parseInt(d_now - d_start) / 1000 / 60 / 60 / 24 / 7) % cat_user.length

index=(index+4) % cat_user.length
console.log(index,cat_user[index])
let synsRequestData={
    "msgtype": "markdown",
    "markdown": { 
        "title": "tata 来了",
        "text": `[^_^] tata: 十分感谢@${cat_user[index][1]}  \r\n ---------- \r\n - 今天记得给tata换水并加满偶 \r\n - 今天记得给tata饮水机做清洁 \r\n - 今天记得给tata厕所清洁并换垃圾袋 \r\n - 今天记得给tata加满粮食偶`},
        "at": { "atMobiles": [cat_user[index][1]], "isAtAll": false}
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
