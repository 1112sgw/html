
Zepto(function($){

    var template = $('#template_meeting_video').html();
    var compiledTemplate = Template7.compile(template);


    var renderVideoRecord = function() {
        var result = {
            recordList: [
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
        $(".video-record").html(html)
    }

    renderVideoRecord()

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderSearchMenu()
    // }) 
    // $.get("/api/v1/meeting-list-more",function(response){
    //     renderMoreMeeting()
    // }) 
});
