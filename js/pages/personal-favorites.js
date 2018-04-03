
Zepto(function($){

    var templateMeeting = $('#template_favorites_meeting').html();
    var templateVideo = $('#template_favorites_video').html();
    var templateNews = $('#template_favorites_news').html();

    var compiledMeetingTemplate = Template7.compile(templateMeeting);
    var compiledVideoTemplate = Template7.compile(templateVideo);
    var compiledNewsTemplate = Template7.compile(templateNews);

    var renderPersonalFavorite = function() {
        var result = {
            videoList: [
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
            ],
            newsList: [
                {
                    id: 1,
                    imgUrl: "../images/slider1.png",
                    title: "博览中心参观考察2018世界科技制造...",
                    views: 40,
                    date: "2018-03-21",
                    description: "12月6日，由工信部、中国工程师、中国 科协江苏省政府共同主办，以什么..."
                },
                {
                    id: 2,
                    imgUrl: "../images/slider1.png",
                    title: "博览中心参观考察2018世界科技制造...",
                    views: 40,
                    date: "2018-03-21",
                    description: "12月6日，由工信部、中国工程师、中国 科协江苏省政府共同主办，以什么..."
                },
                {
                    id: 3,
                    imgUrl: "../images/slider1.png",
                    title: "博览中心参观考察2018世界科技制造...",
                    views: 40,
                    date: "2018-03-21",
                    description: "12月6日，由工信部、中国工程师、中国 科协江苏省政府共同主办，以什么..."
                },
            ],
            meetingList: [
                {
                    id: 1,
                    imgUrl: "../images/slider1.png",
                    title: "中国肺结核知识修改草案",
                    date: "2018年1月1日-5日",
                    location: "北京海定区大花园"
                },
                {
                    id: 2,
                    imgUrl: "../images/slider1.png",
                    title: "中国肺结核知识修改草案",
                    date: "2018年1月1日-5日",
                    location: "北京海定区大花园"
                },
                {
                    id: 3,
                    imgUrl: "../images/slider1.png",
                    title: "中国肺结核知识修改草案",
                    date: "2018年1月1日-5日",
                    location: "北京海定区大花园"
                },
            ]
        }
        var meetingHtml = compiledMeetingTemplate(result);
        var videoHtml = compiledVideoTemplate(result);
        var newsHtml = compiledNewsTemplate(result);

        $(".meeting-content").html(meetingHtml)
        $(".video-content").html(videoHtml)
        $(".news-content").html(newsHtml)

    }

    renderPersonalFavorite()

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderSearchMenu()
    // }) 
    // $.get("/api/v1/meeting-list-more",function(response){
    //     renderMoreMeeting()
    // }) 
});
