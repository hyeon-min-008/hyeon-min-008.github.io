
/************************************
	slick
************************************/
$(document).ready(function(){

	var $slider=$("#notice_box").slick({
		autoplay: true, //자동슬라이드
		autoplaySpeed: 3000,
		vertical: true,
		arrows : false,
	});
});


/************************************
	풀 페이지 스크롤
************************************/
var total_section = 0; //전체 원페이지 수
var current_idx = 0;
var screen_h = 0; // 화면 높이
var page_h = 0;
var onepage_h = 0; // 원페이지 스크롤 총 길이
var onpage_on = true;
var isScroll = false;

$(document).ready(function(){

	fullpage_init();
	
		
	// Scroll Event
	$('.fullpage_box').on('mousewheel', function(event) {	
		
		//console.log(current_idx);

		if(onepage_h > $("html").scrollTop() + 50 && !onpage_on){
			
			//원페이지 스크롤 진입
			console.log(":: 원페이지 시작 ::");
			onpage_on = true;
			isScroll = false;
		}
		
		if(!onpage_on) return;
		
		//스크롤 이벤트 막기
		event.preventDefault();
		event.stopPropagation();		
		if(isScroll) return; // 현재 스크롤이 동작중이면 종료
		
		
		isScroll = true;		
		var direction = event.originalEvent.wheelDelta; //마우스 휠 방향
		var y = 0;

		if(direction > 0){
			// up
			current_idx --;
			if(current_idx < 0){current_idx = -1;}
			y = current_idx * page_h;
		}
		else{
			// down
			current_idx ++;
			if(current_idx > total_section){
				current_idx = total_section;
				onpage_on = false;
				return;
			}
			
			y = current_idx * page_h;		
		}

		$('html').animate({scrollTop: y}, 500, function(){isScroll=false;});	
	});
});




function fullpage_init(){
	
	setHeight(); // 높이 설정
	
	total_section = $('.fullpage_box > .fullpage').length;
	onepage_h = page_h * total_section;
}	

function setHeight(){
	
	// 높이 설정
	screen_h = window.innerHeight;
	page_h = screen_h;
	$(".fullpage_box > .fullpage").height(page_h);
}

$( window ).resize(function() {
	
	setHeight(); // 높이 설정 (반응형)
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
		if(window_scroll_top<=box_top&&window_scroll_top+window_height>=box_top){$(this).addClass("active");}
		else $(this).removeClass("active");
		
	});

});