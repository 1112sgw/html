
Zepto(function($){

    var template = $('#template_coupon').html();
    var compiledTemplate = Template7.compile(template);

    var renderCoupons = function() {
        var result = {
            valid: [
                {
                    id: 1,
                    title: "希尔顿酒店3月1日标间优惠券",
                    price: 500,
                    meetingName: "第十届科研科研讨会议",
                    expiryDate: "2018年5月31日",
                },  
                {
                    id: 2,
                    title: "希尔顿酒店3月1日标间优惠券",
                    price: 100,
                    meetingName: "第十届科研科研讨会议",
                    expiryDate: "2018年5月31日",
                }, 
                {
                    id: 3,
                    title: "希尔顿酒店3月1日标间优惠券",
                    price: 50,
                    meetingName: "第十届科研科研讨会议",
                    expiryDate: "2018年5月31日",
                },               
            ],
            inValid: [
                {
                    id: 4,
                    title: "希尔顿酒店3月1日标间优惠券",
                    price: 10,
                    meetingName: "第十届科研科研讨会议",
                    expiryDate: "2018年5月31日",
                }, 
                {
                    id: 5,
                    title: "希尔顿酒店3月1日标间优惠券",
                    price: 5,
                    meetingName: "第十届科研科研讨会议",
                    expiryDate: "2018年5月31日",
                },  
            ]
        }
        var html = compiledTemplate(result);
        $(".personal-coupon").html(html)
    }

    renderCoupons();

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderHotels()
    // }) 

});
