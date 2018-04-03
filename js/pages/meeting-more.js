
Zepto(function($){

    var template = $('#template_meeting_more').html();
    var compiledTemplate = Template7.compile(template);


    var renderSearchMenu = function() {
        var result = [
            {
                id: 'office_picker',
                title: '科室',
                value: ['内科','外科','神经科'],
            },
            {
                id: 'province_picker',
                title: '省份',
                value: ['北京','上海','重庆','辽宁'],
            },
            {
                id: 'year_picker',
                title: '年',
                value: [2015,2016,2017,2018],
            },
            {
                id: 'month_picker',
                title: '月份',
                value: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
                    imgUrl: "../images/slider1.png",
                    title: "国家会议中心位",
                    views: "10w +",
                    price: "12000",
                    date: "2018-03-21",
                    location: "北京海淀区"
                },
                {
                    imgUrl: "../images/slider1.png",
                    title: "国家会议中心位",
                    views: "10w +",
                    price: "12000",
                    date: "2018-03-21",
                    location: "北京海淀区"
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
        $(".meeting-more").html(html)
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
