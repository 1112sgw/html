
Zepto(function($){
    var template = $('#template_meeting_specialist').html();
    var compiledTemplate = Template7.compile(template);
    var result = {
        specialist:[
            {
                type: "A",
                content:[
                    {
                        id: 1,
                        imgUrl: "../images/honorary.png",
                        name: "Aalileo Galilei",
                        title: "教授，意大利米兰Humanitas医院眼科教授",
                        hospital: "苏州大学医学院",
                    },
                    {
                        id: 2,
                        imgUrl: "../images/honorary.png",
                        name: "Aeonardo da Vinci",
                        title: "教授，中国医学会放射科教授",
                        hospital: "米兰Humanitas医院",
                    }
                ]
            },
            {
                type: "B",
                content:[
                    {
                        id: 1,
                        imgUrl: "../images/honorary.png",
                        name: "Aalileo Galilei",
                        title: "教授，意大利米兰Humanitas医院眼科教授",
                        hospital: "苏州大学医学院",
                    },
                    {
                        id: 2,
                        imgUrl: "../images/honorary.png",
                        name: "Aeonardo da Vinci",
                        title: "教授，中国医学会放射科教授",
                        hospital: "米兰Humanitas医院",
                    }
                ]
            }
        ],
    }
    
    var renderHtml = function() {  
        var html = compiledTemplate(result);
        $(".meeting-specialists").html(html);
    }

    renderHtml()

    $("#search").on("change",function(){
        renderHtml()
    })
    // $.get("/",function(response){
    //     renderHtml()
    //     calculateTotal();
    // }) 
});