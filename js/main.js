
$(function() {
    $.init()

    $('#back').on('click',function(){
        history.back();
    })
    initMenu()
    // 首页幻灯片
});


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

