
Zepto(function($){

    var template = $('#template_meeting_hotels').html();
    var compiledTemplate = Template7.compile(template);

    var renderHotels = function() {
        var result = {
            hotelList: [
                {
                    id: 1,
                    imgUrl: "../images/hotel.png",
                    title: "希尔顿酒店",
                    location: "北京海淀区",
                    date: "2018年1月1日-5日",
                    starLevel: "五星级",
                    price: "800 ~ 1600元",
                },  
                {
                    id: 2,
                    imgUrl: "../images/hotel.png",
                    title: "希尔顿酒店",
                    location: "北京海淀区",
                    date: "2018年1月1日-5日",
                    starLevel: "五星级",
                    price: "800 ~ 1600元",
                },  
                {
                    id: 3,
                    imgUrl: "../images/hotel.png",
                    title: "希尔顿酒店",
                    location: "北京海淀区",
                    date: "2018年1月1日-5日",
                    starLevel: "五星级",
                    price: "800 ~ 1600元",
                },  
            ]
        }
        var html = compiledTemplate(result);
        $(".meeting-hotels").html(html)
    }

    renderHotels();

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderHotels()
    // }) 

});
