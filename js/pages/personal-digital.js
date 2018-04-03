
Zepto(function($){

    var templateUseful = $('#template_digital_useful').html();
    var templateUsed = $('#template_digital_used').html();
    var compiledUsefulTemplate = Template7.compile(templateUseful);
    var compiledUsedTemplate = Template7.compile(templateUsed);

    var renderDigital = function() {
        var result = {
            useful: [
                {
                    id: 1,
                    title: "眼科会议入场券1 ",
                    qrImgUrl:"../images/qrcode.png"
                },  
                {
                    id: 2,
                    title: "3月2日晚宴餐券 ",
                    qrImgUrl:"../images/qrcode.png"
                },
                {
                    id: 3,
                    title: "3月2日晚宴餐券 ",
                    qrImgUrl:"../images/qrcode.png"
                },                
                {
                    id: 6,
                    title: "3月2日晚宴餐券 ",
                    qrImgUrl:"../images/qrcode.png"
                },   
            ],
            used: [
                {
                    id: 3,
                    title: "眼科会议入场券22 ",
                    qrImgUrl:"../images/qrcode.png"
                },  
                {
                    id: 4,
                    title: "3月2日晚宴餐券333 ",
                    qrImgUrl:"../images/qrcode.png"
                }, 
            ]
        }
        var usefulHtml = compiledUsefulTemplate(result);
        var usedHtml = compiledUsedTemplate(result);
        $(".useful-content").html(usefulHtml)
        $(".used-content").html(usedHtml)
    }

    renderDigital();

    $('.digitals-list').on('click','.open-qrcode',function(e){
        $(".popup-img").html("<img src='" + $(e.currentTarget).attr("data-qr") +  "' />")
        $.popup('.popup-qrcode')
    })

    $(document).on('click','.modal-overlay-visible',function(e){
        $.closeModal('.popup-qrcode')
    })

    // use for ajax 
    // $.get("/api/v1/select-search-menu",function(response){
    //     renderHotels()
    // }) 

});
