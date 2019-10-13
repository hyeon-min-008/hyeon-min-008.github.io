/************************************
	slick
************************************/
$(document).ready(function(){

	//var $slider=$(".skill_box ul").slick({
	//	autoplay: true, //자동슬라이드
	//	autoplaySpeed: 2000,
	//	arrows : false,
	//	slidesToShow: 7, //한 화면에 보여줄 아이템수
	//	slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템 개수
	//});
	
	
	$(".p_about .animation_box").animate({},0, function() {
		$(".p_about .animation_box .line5").animate({ height : "0%" },0, function() {});
		$(".p_about .animation_box").addClass("active");
		$(".p_about .animation_box .line5").animate({ height : "30%" },1000, function() {
			$(".p_about .animation_box .text").animate({ opacity : "1" },0, function() {});
			$(".p_about .animation_box .circle").animate({ opacity : "1" },500, function() {			
				
				//당기기
				$(".p_about .animation_box .line5").animate({ height : "32%" },1000, function() {});
				$(".p_about .animation_box .circle").animate({ top : "32%" },1000, function() {
					$(".p_about .animation_box .line5").animate({ height : "30%" },500, function() {});
					$(".p_about .animation_box .circle").animate({ top : "30%" },500, function() {
						$(".p_about .animation_box .txt_hi").animate({ width : "100%" },0, function() {});
					});
				});
			});
		});
    });
	
	
	$(window).on('scroll',function() {
    
		var scrollValue = $(document).scrollTop();
		
		if( scrollValue < 10 ){
			
			$(".header").removeClass("active");
		}
		else{
			
			$(".header").addClass("active");
		}

	});
});

/************************************
	contact
************************************/
$(document).on("click", ".p_contact .contact", function(){

	if($(".p_contact .contact").eq(0).hasClass("active"))
	{
		$(".p_contact .contact").removeClass("active");
	}
	else
	{
		$(".p_contact .contact").addClass("active");
	}
	
});