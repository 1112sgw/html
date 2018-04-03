
Zepto(function($){

    var template = $('#template_meeting_list').html();
    var compiledTemplate = Template7.compile(template);
    var renderHtml = function() {
        var result = {
            meetingList: [
                {
                    id: 1,
                    imgUrl: "../images/slider1.png",
                    title: "国家会议中心位",
                    views: 40,
                    date: "2018-03-21",
                    description: "<p>和水立方之北，是一座八层楼、近400米的长形建筑。2008年奥运会期间，由击剑馆、国际广播中心组成。主新闻中心（MPC）</p>"
                },
                {
                    id: 2,
                    imgUrl: "../images/slider1.png",
                    title: "国家会议中心位",
                    views: 40,
                    date: "2018-03-21",
                    description: "<p>和水立方之北，是一座八层楼、近400米的长形建筑。2008年奥运会期间，由击剑馆、国际广播中心组成。主新闻中心（MPC）</p>"
                },
                {
                    id: 3,
                    imgUrl: "../images/slider1.png",
                    title: "国家会议中心位",
                    views: 40,
                    date: "2018-03-21",
                    description: "<p>和水立方之北，是一座八层楼、近400米的长形建筑。2008年奥运会期间，由击剑馆、国际广播中心组成。主新闻中心（MPC）</p>"
                },
            ]
        }
        var html = compiledTemplate(result);
        $(".meeting-introduction").html(html)
    }

    renderHtml()
    // $.get("/",function(response){
    //     renderHtml()
    // }) 
});
