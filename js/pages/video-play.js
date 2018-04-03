
Zepto(function($){

    var template = $('#template_video_play').html();
    var compiledTemplate = Template7.compile(template);


    var renderVideoRecord = function() {
        var result = {
            video : {
                id: 1,
                payed: true,
                videoUrl: '../../images/example.mp4',
                thumbnailUrl: '../../images/thumbnail.png',
                host:'海风藤',
                speaker:'jimneom',
                title:'开幕式视频视频名称',
                price: '20'  
            }
        }
        var html = compiledTemplate(result.video);
        $(".video-play").html(html)
    }

    renderVideoRecord()
    videojs('my-player');
    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderSearchMenu()
    // }) 
    // $.get("/api/v1/meeting-list-more",function(response){
    //     renderMoreMeeting()
    // }) 
});
