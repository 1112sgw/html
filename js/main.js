
Zepto(function($){
    $.config = {
        router:false,
        autoInit: true
    }
    // $.config = {router: false}
    // $.init()
    $('#back').on('click',function(){
        history.back();
    })

    $(".content").css('min-height',)
    initMenu()
    // 首页幻灯片
});

Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  

var initMenu = function(){
    $('#personal').on('click', function(e){ 
        $('#personal').toggleClass( 'toggled-on');
        $('#menu-mobile_menu').toggleClass('toggled-on');
    })
}

var renderPicker = function(object){
    $("#"+ object.id).picker({
        toolbarTemplate: '<header class="bar bar-nav">\
        <button class="button button-link pull-right close-picker">确定</button>\
        <h1 class="title">请选择'+ object.title +'</h1>\
        </header>',
        cols: [
          {
            textAlign: 'center',
            values: object.value
          }
        ]
    });
} 

