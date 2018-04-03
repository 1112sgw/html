
Zepto(function($){

    var template = $('#template_order_detail').html();
    var compiledTemplate = Template7.compile(template);
    var renderHtml = function() {
        var result = {
            orderType: "大会名称",
            orderTitle: "第四节脑科学论坛大会",
            orderId: "HY2022569511116666684",
            listLabel: "餐饮清单",
            orderlist:[
                {eachOrder:"3月1日 午餐     600元"},
                {eachOrder:"3月2日 晚餐     600元"},
                {eachOrder:"3月3日 午餐     600元"},
            ],
            payType: "支付宝",
            payTime: "2018-02-15 19:45",
            payTotal: "1800元",
            payClass: "red",
            payStatus: "已支付",
            qrcodeUrl: "../images/qrcode.png"
        }
        var html = compiledTemplate(result);
        $(".order-detail").html(html)
    }

    renderHtml()
    // $.get("/",function(response){
    //     renderHtml()
    // }) 
});
