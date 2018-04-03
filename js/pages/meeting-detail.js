
Zepto(function($){
    var template = $('#template_meeting_detail').html();
    var compiledTemplate = Template7.compile(template);
    var result = {
        meetingList: [
            {
                id: 1,
                date: "2019-06-01",
                time: "14:35-16:30",
                location: "多功能会议厅401楼",
                theme: "中国肺结核节诊治共识修改 (全体大会)",
            }  
        ],
        meetingHosts:[
            {
                id: 1,
                imgUrl: "../images/honorary.png",
                name: "周杰明",
            },
            {
                id: 2,
                imgUrl: "../images/honorary.png",
                name: "肖大宝",
            },
        ],
        academicList:[
            {
                id: 1,
                imgUrl: "../images/honorary.png",
                title: "中国肺结核知识修改草案",
                subTitle: "意大利米兰Humanitas眼科医院",
                dateTime: "10:00-10:25",
            },
            {
                id: 2,
                imgUrl: "../images/honorary.png",
                title: "中国肺结核知识修改草案",
                subTitle: "意大利米兰Humanitas眼科医院",
                dateTime: "10:00-10:25",
            },
        ],
    }
    if(result.meetingList.length > 0){
        $.each(result.meetingList, function(index, item){
            item.index = index + 1;
        })
    }
    
    var renderHtml = function() {  
        var html = compiledTemplate(result);
        $(".meeting-details").html(html);
    }

    renderHtml()
    // $.get("/",function(response){
    //     renderHtml()
    //     calculateTotal();
    // }) 
});