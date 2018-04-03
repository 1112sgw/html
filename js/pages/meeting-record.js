
Zepto(function($){

    var template = $('#template_meeting_record').html();
    var compiledTemplate = Template7.compile(template);

    var renderMeetingRecord = function() {
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
        $(".meeting-record").html(html)
    }

    renderMeetingRecord()

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderSearchMenu()
    // }) 
    // $.get("/api/v1/meeting-list-more",function(response){
    //     renderMoreMeeting()
    // }) 
});
