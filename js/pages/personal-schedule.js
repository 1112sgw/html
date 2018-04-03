
Zepto(function($){
    var template = $('#template_personal_schedule').html();
    var compiledTemplate = Template7.compile(template);
    var result = {
        id: 1,
        imgUrl: "../images/honorary.png",
        title: "中国肺结核知识修改草案",
        subTitle: "意大利米兰Humanitas眼科医院",
        meetingList: [
            {
                id: 2,
                date: "2019-06-01",
                meetingContent:[
                    {
                        type: "大会报告 中国肺结核节诊治共识修改（2019）",
                        time: "14:35-16:30",
                        location: "多功能会议厅401楼",
                        theme: "中国肺结核节诊治共识修改 (全体大会)",
                    }
                ]        
            },   
            {
                id: 1,
                date: "2019-06-01",
                meetingContent:[
                    {
                        type: "讨论",
                        time: "14:35-16:30",
                        location: "多功能会议厅401楼",
                        theme: "中国肺结核节诊治共识修改 (全体大会)",
                    },
                    {
                        type: "讨论",
                        time: "14:35-16:30",
                        location: "多功能会议厅401楼",
                        theme: "中国肺结核节诊治共识修改 (全体大会)",
                    }
                ]        
            }          
        ],
    }
    if(result.meetingList.length > 0){
        $.each(result.meetingList, function(index, item){
            item.index = index + 1;
        })
    }
    
    var renderHtml = function() {  
        var html = compiledTemplate(result);
        $(".personal-schedule").html(html);
    }

    renderHtml()

    $(document).on('click','.confirm-download', function () {
        $.confirm('下载我的学术任务', function () {
            $.alert('You clicked Ok button');
        });
    });
    // $.get("/",function(response){
    //     renderHtml()
    //     calculateTotal();
    // }) 
});