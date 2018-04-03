
Zepto(function($){
    var templateList = $('#template_meeting_list').html();
    var compiledListTemplate = Template7.compile(templateList);

    var templateClass = $('#template_meeting_class').html();
    var compiledClassTemplate = Template7.compile(templateClass);


    var result = {
        meetingList: [
            {
                id: 1,
                title: "会议名称001",
                hasCoupon: true,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            }, 
            {
                id: 2,
                title: "会议名称002",
                hasCoupon: true,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            } 
        ],
        classList: [
            {
                id: 1,
                title: "课程名称001",
                hasCoupon: true,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            }, 
            {
                id: 2,
                title: "课程名称002",
                hasCoupon: true,
                couponContent: "3月1日支付优惠500元",
                orgPrice: 1000,
                couponPrice: 500,
            }     
        ],
        couponCount: 2
    }
    var renderHtml = function() {  
        var meetingList = compiledListTemplate(result);
        var meetingClass = compiledClassTemplate(result);
        $(".meeting-list").html(meetingList);
        $(".class-list").html(meetingClass);

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
    $(".meeting-class").on('click','li',function(e){
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
