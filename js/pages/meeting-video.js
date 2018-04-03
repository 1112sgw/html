
Zepto(function($){

    var template = $('#template_meeting_video').html();
    var compiledTemplate = Template7.compile(template);


    var renderSearchMenu = function() {
        var result = [
            {
                id: 'location_picker',
                title: '会场选择',
                value: ['内科','外科','神经科'],
            },
            {
                id: 'forum_picker',
                title: '论坛选择',
                value: ['北京','上海','重庆','辽宁'],
            }   
        ]

        $.each(result, function(index,item){
            renderPicker(item)
        })
    }

    var renderMoreMeeting = function() {
        var result = {
            meetingList: [
                {
                    id: 1,
                    imgUrl: "../images/slider1.png",
                    title: "开幕式视频",
                    meeting: "北京医学会议",
                    views: "10w +",
                    price: "20",
                    extra: "参会代表免费",
                },
                {
                    id: 2,
                    imgUrl: "../images/slider1.png",
                    title: "开幕式视频",
                    meeting: "北京医学会议",
                    views: "10w +",
                    price: "20",
                    extra: "参会代表免费",
                },
                {
                    imgUrl: "../images/slider1.png",
                    title: "国家会议中心位",
                    views: "10w +",
                    price: "12000",
                    date: "2018-03-21",
                    location: "北京海淀区"
                },
            ]
        }
        var html = compiledTemplate(result);
        $(".meeting-video").html(html)
    }

    renderSearchMenu();
    renderMoreMeeting()

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderSearchMenu()
    // }) 
    // $.get("/api/v1/meeting-list-more",function(response){
    //     renderMoreMeeting()
    // }) 
});
