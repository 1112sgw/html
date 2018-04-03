
Zepto(function($){

    var templateMeeting = $('#template_personal_meeting').html();
    var templateHotel = $('#template_personal_hotel').html();
    var templateFood = $('#template_personal_food').html();
    var templateDocument = $('#template_personal_document').html();

    var compiledMeetingTemplate = Template7.compile(templateMeeting);
    var compiledHotelTemplate = Template7.compile(templateHotel);
    var compiledFoodTemplate = Template7.compile(templateFood);
    var compiledDocumentTemplate = Template7.compile(templateDocument);
    var renderDigital = function() {
        var result = {
            meetingList: [
                {
                    id: 1,
                    title: "第四节脑科学论坛大会",
                    subtitle:"理事会议 脑外科手术培训班",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"未支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"red",
                },  
                {
                    id: 2,
                    title: "第四节脑科学论坛大会",
                    subtitle:"理事会议 脑外科手术培训班",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"待确认",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
                {
                    id: 3,
                    title: "第四节脑科学论坛大会",
                    subtitle:"理事会议 脑外科手术培训班",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"已支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
                {
                    id: 4,
                    title: "第四节脑科学论坛大会",
                    subtitle:"理事会议 脑外科手术培训班",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"退款审核中",
                    imgUrl:"../images/hotel.png",
                    statusClass:"lightgray",
                }, 
            ],
            hotelList: [
                {
                    id: 1,
                    title: "希尔顿酒店 ",
                    subtitle:"中国肺结核知识修改草案",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"未支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"red",
                    
                },  
                {
                    id: 2,
                    title: "希尔顿酒店 ",
                    subtitle:"中国肺结核知识修改草案",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"待确认",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
                {
                    id: 3,
                    title: "希尔顿酒店 ",
                    subtitle:"中国肺结核知识修改草案",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"已支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
            ],
            foodList: [
                {
                    id: 1,
                    title: "中国肺结核知识修改草案",
                    subtitle:"晚宴",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"未支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"red",
                },  
                {
                    id: 2,
                    title: "中国肺结核知识修改草案 ",
                    subtitle:"晚宴",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"待确认",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
                {
                    id: 3,
                    title: "中国肺结核知识修改草案",
                    subtitle:"晚宴",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"已支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
            ],
            documentList: [
                {
                    id: 1,
                    title: "第四节脑科学论坛大会",
                    subtitle:"手术资料第一册",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"未支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"red",
                },  
                {
                    id: 2,
                    title: "第四节脑科学论坛大会 ",
                    subtitle:"手术资料第一册",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"待确认",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
                {
                    id: 3,
                    title: "第四节脑科学论坛大会 ",
                    subtitle:"手术资料第一册",
                    price:"1200",
                    time:"2018-02-15 19:45",
                    status:"已支付",
                    imgUrl:"../images/hotel.png",
                    statusClass:"blue",
                }, 
            ],
        }
        var meetingHtml = compiledMeetingTemplate(result);
        var hotelHtml = compiledHotelTemplate(result);
        var foodHtml = compiledFoodTemplate(result);
        var documentHtml = compiledDocumentTemplate(result);
        $(".meeting-content").html(meetingHtml)
        $(".hotel-content").html(hotelHtml)
        $(".food-content").html(foodHtml)
        $(".document-content").html(documentHtml)
    }

    renderDigital();

    $('.digitals-list').on('click','.open-hotel',function(e){
        $(".popup-img").html("<img src='" + $(e.currentTarget).attr("data-qr") +  "' />")
        $.popup('.popup-hotel')
    })

    $(document).on('click','.modal-overlay-visible',function(e){
        $.closeModal('.popup-hotel')
    })

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderHotels()
    // }) 

});
