
Zepto(function($){

    $("#img_input").on("change", function(e){

        var file = e.target.files[0]; //获取图片资源
      
        // 只选择图片文件
        if (!file.type.match('image.*')) {
          return false;
        }
      
        var reader = new FileReader();
      
        reader.readAsDataURL(file); // 读取文件
      
        // 渲染文件
        reader.onload = function(arg) {
      
          var img = '<img class="preview" src="' + arg.target.result + '" alt="preview"/>';
          $(".image-viewBox").append(img);
        }
    });

    $("#question").on("change",function(e){
        $(".wordNum").text($("#question").val().length)
    })

    $("#question-submit").on('click',function(){
        // $.post("/",function(response){
           
        // }) 
    })
    // $.get("/",function(response){
    //     renderHtml()
    // }) 
});
