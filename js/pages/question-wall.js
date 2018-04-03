
Zepto(function($){

    var template = $('#template_question_wall').html();
    var compiledTemplate = Template7.compile(template);
    var renderHtml = function() {
        var result = {
            questionList: [
                {
                    id: 1,
                    imgUrl: "../images/honorary.png",
                    title: "提问问题的名字有可能阿萨德有一个问题这个太 难了，真是太难了太难了",
                    views: 20,
                    name: "李一凡",
                },
                {
                    id: 2,
                    imgUrl: "../images/honorary.png",
                    title: "提问问题的名字有可能阿萨德有一个问题这个太 难了，真是太难了太难了",
                    views: 20,
                    name: "李一凡",
                },
                {
                    id: 3,
                    imgUrl: "../images/honorary.png",
                    title: "提问问题的名字有可能阿萨德有一个问题这个太 难了，真是太难了太难了",
                    views: 20,
                    name: "李一凡",
                    imageList: [
                        {
                            imgUrl: "../images/honorary.png",
                        },
                        {
                            imgUrl: "../images/honorary.png",
                        },
                        {
                            imgUrl: "../images/honorary.png",
                        }
                    ]
                },
            ]
        }
        var html = compiledTemplate(result);
        $(".question-wall").html(html)
    }

    renderHtml()
    // $.get("/",function(response){
    //     renderHtml()
    // }) 
});
