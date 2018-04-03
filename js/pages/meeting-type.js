
Zepto(function($){

    var result = [
        {
            id:1,
            name:"普通代表"
        },
        {
            id:2,
            name:"企业代表"
        },
        {
            id:3,
            name:"媒体代表"
        },
        {
            id:4,
            name:"学生代表"
        },
    ]

    $.each(result,function(index,item){
        $('.meeting-type').append("<a external href='./meeting-choose.html?type="+ item.id +"'>"+ item.name +"</a>")
    })

    // $.get("/",function(response){
       
    // }) 
});
