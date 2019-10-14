$(window).on('scroll',function() {
    
	var scrollValue = $(document).scrollTop();
	
	if( scrollValue < 10 ){
		
		$(".header").removeClass("active");
	}
	else{
		
		$(".header").addClass("active");
	}

});
	
/************************************
	스크롤 이벤트 박스
************************************/
$(window).scroll(function(){

	var window_scroll_top=$(window).scrollTop();
	var window_height=$(window).height();
	
	/*스크롤에 반응하는 박스*/
	$(".page_event_box").each(function(){
	
		var box_offset=$(this).offset();
		var box_top=box_offset.top;
		
		if(window_scroll_top+window_height-50>box_top){$(this).addClass("active");}
		//if(window_scroll_top<=box_top&&window_scroll_top+window_height>=box_top){$(this).addClass("active");}
		//else $(this).removeClass("active");
		
	});

});