$(document).ready(function(){

  $(".gnbMenu").mouseenter(function(){//주메뉴 영역에 오버시
    $(this).find("li>.smenu").stop().slideDown();
    $(".bg_box").stop().slideDown(); 
  });

  $("nav").mouseleave(function(){//헤더 영역에서 나갔을 시
    $(this).find("li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp(); 
  });


//________________________bean animate____________

$(window).scroll(function(){
	$(".bean1").fadeIn(2000,function(){ 
		$(this).animate({bottom:"0%"},2500); 
	});
	$(".bean2").fadeIn(2000,function(){ 
		$(this).animate({bottom:"0%"},2000); 
	});
	$(".bean3").fadeIn(2000,function(){ 
		$(this).animate({bottom:"0%"},1500); 
	});
	$(".bean4").fadeIn(2000,function(){ 
		$(this).animate({bottom:"0%"},1000); 
	});
});
//_________________________________________________
  $(".ma1").fadeIn(2000,function(){ 
    $(this).animate({top:"5%"},1000); 
  });
  $(".mTxt1").fadeIn(2000,function(){ 
    $(this).animate({bottom:"30%"},1000); 
  });

//__nav bar scroll fix_____________________________

let gnbOffset = $( 'nav' ).offset();
$( window ).scroll( function() {
  if ( $( document ).scrollTop() > gnbOffset.top ) {
    $( 'nav' ).addClass( 'gnbFixed' );
  }
  else {
    $( 'nav' ).removeClass( 'gnbFixed' );
  }
});

});