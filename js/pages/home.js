
$(function() {
    $.get("/",function(response){
        var result = [
            {
                imgUrl: "./images/orgnization.png",
                title: "大会组织",
                url: "./page-home/meeting-organization.html",
            },
            {
                imgUrl: "./images/profession.png",
                title: "参会专家",
                url: "./page-home/meeting-profession.html",
            },
            {
                imgUrl: "./images/artical.png",
                title: "大会征文",
                url: "./page-home/meeting-essay.html",
            },
            {
                imgUrl: "./images/schedule.png",
                title: "会议日程",
                url: "./page-home/meeting-more.html",
            },
            {
                imgUrl: "./images/meeting_video.png",
                title: "会议视频",
                url: "./page-home/meeting-video.html",
            },
            {
                imgUrl: "./images/news.png",
                title: "大会新闻",
                url: "./page-home/meeting-introduction.html",
            },
        ]
        $.each(result, function(index, item){
            $("#link_area .row").append('<div class="col-33 home-link"><a href=' + item.url + '><img src=' + item.imgUrl + ' /><div class="home-img-title">'+ item.title +'</div></a></div>')
        })
    })
    initSlider();
    //initMenu()
    // 首页幻灯片  
});

var initSlider = function() {
    $('.swiper-container img').each(function(index,img){
        $(img).height($(window).width() * 67 / 150)
    })
    var config = {
        speed: 2400,
        spaceBetween: 10,
        autoplay: {
            delay: 1000,
        },
    }
    $(".swiper-container").swiper(config);
}
