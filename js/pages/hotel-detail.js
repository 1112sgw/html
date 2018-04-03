
Zepto(function($){

    var template = $('#template_hotel_table').html();
    var compiledTemplate = Template7.compile(template);

    var renderHotelTable = function() {
        var result = {
            hotelName: "希尔顿酒店",
            tips:"您订购了xxxxx会议   赠送您 <span class='red'>3月3日</span>  大床房一晚",
            warning: "酒店备注: 是出差入住酒店吧？首先一点，发票备注是可有可 无的，最重要的是发票抬头和发票明细，不是发票备注。发 票抬头写你们公司",
            dateList: [
                {
                    dateId: 1,
                    date: "3月1日",    
                }, 
                {
                    dateId: 2,
                    date: "3月2日",    
                },
                {
                    dateId: 3,
                    date: "3月3日",    
                },
                {
                    dateId: 4,
                    date: "3月4日",    
                }, 
            ],
            roomType: [
                {
                    typeId: 1,
                    typeName: "标间",  
                    price: 400  
                }, 
                {
                    typeId: 2,
                    typeName: "大床房",  
                    price: 600 
                },
                {
                    typeId: 3,
                    typeName: "三人房", 
                    price: 800
                },
                {
                    typeId: 4,
                    typeName: "标间床位",
                    price: 600     
                }, 
                {
                    typeId: 5,
                    typeName: "三人房床位", 
                    price: 600     
                }, 
            ], 
            free:{
                dateId:"2",
                typeId:"3",
            },
            couponCount: 2        
        }
        $(".tips").html(result.tips)
        $(".warning").html(result.warning)
        $(".own-coupon").text(result.couponCount);
        $(".hotel-detail h3").text(result.hotelName);

        $.each(result.roomType,function(index,item){
            item.dateList = result.dateList;
        })   
        var html = compiledTemplate(result);
        $(".order-table").html(html)

        $(".order-table").find('tr').each(function(index,trItem){
            if($(trItem).attr("data-room") === result.free.typeId){
                $(trItem).find("td").each(function(idx,tdItem){
                    if($(tdItem).attr("data-date") === result.free.dateId){
                        $(tdItem).html("<img src='../images/freeCheck.png' />")
                        $(tdItem).attr("free","true")
                        $(tdItem).attr("checked","true")
                    }
                })
            }
        })

        var renderRestInfo = function() {
            var infoHtml = '';
            var totalPrice = 0;   
            $(".order-table").find('td').each(function(index,td){
                if($(td).attr("free")!== "true" && $(td).attr("checked") === "true"){
                    var finalDate = "";
                    var finalPrice = "";
                    var finalRoom = "";    
                    
                    $.each(result.dateList,function(index,date){
                        if(date.dateId === parseInt($(td).attr("data-date"))){
                            finalDate = date.date
                        }
                    })
                    $.each(result.roomType,function(index,type){
                        if(type.typeId === parseInt($(td).parent("tr").attr("data-room"))){
                            finalRoom = type.typeName
                            finalPrice = type.price
                            totalPrice = totalPrice + type.price
                        }
                    })
                    
                    infoHtml = infoHtml + "<div class='rest-info-li'>" + finalDate + finalRoom + "<span>" + finalPrice + "</span></div>"
                }
            })

            $(".rest-info-list").html(infoHtml)
            $(".price-total span").html(totalPrice)
        }

        $("tbody").on('click','.clicktd',function(e){
            var $currentItem = $(e.currentTarget);
            if($currentItem.attr("free")!== "true" && $currentItem.attr("checked")!== "true"){
                $currentItem.html("<img src='../images/check.png' />")
                $currentItem.attr("checked","true")
                renderRestInfo()
            }
            else if($currentItem.attr("free")!== "true"){
                $currentItem.html("")
                $currentItem.attr("checked","false")
                renderRestInfo()
            }
        })

    }

    renderHotelTable();

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderHotelTable
    // }) 
    // $.get("/api/v1/meeting-list-more",function(response){
    //     renderMoreMeeting()
    // }) 
});
