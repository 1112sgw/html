
Zepto(function($){
    var template = $('#template_meeting_document').html();
    var compiledTemplate = Template7.compile(template);
    var result = {
        documentList: [
            {
                id: 1,
                title: "资料名称000",
                hasCoupon: true,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            }, 
            {
                id: 2,
                title: "资料名称002",
                hasCoupon: true,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            }, 
            {
                id: 3,
                title: "资料名称000",
                hasCoupon: false,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            }, 
            {
                id: 5,
                title: "资料名称000",
                hasCoupon: true,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            },       
        ],
        couponCount: 2
    }
    var renderHtml = function() {  
        var html = compiledTemplate(result);
        $(".document-list").html(html);
        $(".own-coupon").text(result.couponCount);
        $(".price-total span").text(totalPrice);
    }

    
    bindItemClick(totalPrice);
    renderHtml()
    // $.get("/",function(response){
    //     renderHtml()
    //     calculateTotal();
    // }) 
});
var totalPrice = 0;
var bindItemClick = function() {
    $(".meeting-document").on('click','li',function(e){
        var $currentItem = $(e.currentTarget);
        $currentItem.find('.item-after').toggle();
        var currentVal = $currentItem.find('.item-after input').val()
        if(currentVal==="false"){
            $currentItem.find('.item-after input').val("true")
            totalPrice = totalPrice + parseInt($currentItem.find('.use').text());
            $(".price-total span").text(totalPrice);
        }else{
            $currentItem.find('.item-after input').val("false")
            totalPrice = totalPrice - parseInt($currentItem.find('.use').text());
            $(".price-total span").text(totalPrice);
        }
        
    })
} 
