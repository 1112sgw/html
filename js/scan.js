$(document).ready(function(){
	$('#qrcode-reader').html5_qrcode(function(data){
			$('#read').html(data);
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			$('#vid_error').html(videoError);
		}
	);
	$('#back').on('click',function(){
        history.back();
    })
});
