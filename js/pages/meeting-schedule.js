
Zepto(function($){

    

    var template = $('#template_schedule_table').html();
    var compiledTemplate = Template7.compile(template);

    var renderScheduleTable = function() {
        var result = {
            dateList: [
                {
                    dateId: 1,
                    month: "3月",
                    day:"21",
                    week:"周四",
                    isSelectDate:true,
                    locationList:[
                        {
                            hasMeeting: true,
                            meetingId:1,
                            meetingTime: "14:35-16:30",
                            meetingTitle: "中华医学会呼吸病学分 会第十一届委员会第二 次常务会"
                        },
                        {
                            hasMeeting: true,
                            meetingId:2,
                            meetingTime: "14:35-16:30",
                            meetingTitle: "中华医学会呼吸病学分 会第十一届委员会第二 次常务会"
                        },
                        {
                            hasMeeting: false,
                        },
                    ]  
                     
                }, 
                {
                    dateId: 2,
                    month: "3月",
                    day:"21",
                    week:"周四",   
                    locationList:[
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: true,
                            meetingId:4,
                            meetingTime: "14:35-16:30",
                            meetingTitle: "中华医学会呼吸病学分 会第十一届委员会第二 次常务会"
                        },
                        {
                            hasMeeting: false,
                        },
                    ]   
                },
                {
                    dateId: 3,
                    month: "3月",
                    day:"21",
                    week:"周四",
                    locationList:[
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        }
                    ]     
                },
                {
                    dateId: 4,
                    month: "3月",
                    day:"21",
                    week:"周四",   
                    locationList:[
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        }
                    ]     
                }, 
                {
                    dateId: 5,
                    month: "3月",
                    day:"21",
                    week:"周四",
                    locationList:[
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        }
                    ]      
                }, 
                {
                    dateId: 6,
                    month: "3月",
                    day:"21",
                    week:"周四",
                    locationList:[
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        }
                    ]       
                }, 
                {
                    dateId: 7,
                    month: "3月",
                    day:"21",
                    week:"周四",  
                    locationList:[
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        },
                        {
                            hasMeeting: false,
                        }
                    ]      
                },
            ],  
            locationList:[
                {
                    locationId: 1,
                    locationName: "世纪金源酒店三楼 首长接见厅"
                },
                {
                    locationId: 2,
                    locationName: "103会议室"
                },
                {
                    locationId: 3,
                    locationName: "104会议室"
                }
            ]   
        }

        $.each(result.foodType,function(index,item){
            item.dateList = result.dateList;
        })   
        var html = compiledTemplate(result);
        $(".schedule-table").html(html)

    }

    renderScheduleTable();

    var today = new Date().Format("yyyy-MM-dd")
    $("#dateChoose").calendar({
        value: [today],
        inputReadOnly:true,
        onChange:function(){
            renderScheduleTable()
        }
    });

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderHotelTable
    // }) 
    // $.get("/api/v1/meeting-list-more",function(response){
    //     renderMoreMeeting()
    // }) 
});
