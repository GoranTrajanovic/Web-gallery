$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.logo_img').fadeOut(200);
        $('div.nav-wrap').addClass("sticky");
     }
	
    else
     {
      $('.logo_img').fadeIn(500);
      $('div.nav-wrap').removeClass("sticky");
     }
 });






//modal

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});


//aside_nav toggle

$(document).ready(function () {
	//toggling sub-menus
  $('aside > li > a').click(function(){
    if ($(this).attr('class') != 'active'){
      $('aside li ul').slideUp();
      $(this).next().slideToggle();
      $('aside li a').removeClass('active');
      $(this).addClass('active');
    }
	else{
	  $(this).removeClass('active');
	  $(this).next().slideToggle();
	}
  });
	//toggling sub-sub-menus
  $('aside > li > ul > li > a').click(function(){
    if ($(this).attr('class') != 'active'){
      $('aside li ul li ul').slideUp();
      $(this).next().slideToggle();
      $('aside li ul li a').removeClass('active');
      $(this).addClass('active');
    }
	  //click on active toggles items back in prevous state
	else{
	  $(this).removeClass('active');
      $(this).next().slideToggle();
	} 
  });
});




/*     aside_nav item tabs -> fading in 'n' out  */


// custom function to check for attribute

$.fn.extend({
	checkTab: function() {
		
		if($(this).attr('class') == 'active_section')
		{
			$(this).removeClass('active_section');
			
			$(this).siblings().slideDown();
			$('footer').delay(400).css('bottom', 'initial');
			
		}
		else if($(this).siblings().attr('class') == 'active_section')
		{
			$(this).addClass('active_section');
			$(this).slideDown().siblings().slideUp().removeClass('active_section');
			$('footer').css('bottom', '0');
			
		}
		else{
			$(this).addClass('active_section'); 
			$(this).siblings().slideUp();
			$('footer').css('bottom', '0');
		}
		
		
	} // FUNCTION ENDING
});

// custom function to determine index of right section


$.fn.extend({
	changeSection: function() {
		
		var indexOfTab = $(this).index();
		
		
		$('section').eq(indexOfTab).checkTab();
		
	} 
});
$(document).ready(function(){
	$('aside > li > a').on("click", function(){
		$(this).parent().changeSection();
			
					
					
	});
});
	
/*     aside_nav item sub-items -> fading in 'n' out  */

/*$.fn.extend({
	changeSection: function() {
		
		
		
	} 
});*/


 // MODIFY THIS *****************
$.fn.extend({
	changeItems: function() {
		
		var subMenuClass = $( this ).attr( "class" );
		// check this condition
    	if($( this ).hasClass( 'active_tab' ))
		{
			// aside_nav code
			$( this ).removeClass( 'active_tab' );
			
			// section code
			$( '.product-card' ).fadeIn();
			
		}
		// check this condition
		else if($( this ).siblings().hasClass( 'active_tab' ))
		{
			// aside_nav code
			$( this ).addClass( 'active_tab' );
			$( this ).siblings().removeClass( 'active_tab' );
			
			// section code
			$( '.product-card' + '.' + subMenuClass ).fadeIn();
			$( '.product-card' ).not( '.' + subMenuClass ).fadeOut( 10 );
			
			// disable footer from overlapping because of flexbox
			var length = $( '.product-card' + '.' + subMenuClass ).length;
			if( length  >= 3 )
			{
				$( 'footer' ).css('bottom', '0');
			}
			else if( length <= 2)
			{
				$( 'footer' ).css('bottom', 'inherit');
			}
		}
		else{
			// aside_nav code
			$( this ).addClass( 'active_tab' ); 
			
			// section code
			$( '.product-card' + '.' + subMenuClass ).fadeIn();
			$( '.product-card' ).not( '.' + subMenuClass ).fadeOut( 10 );
			
			// disable footer from overlapping because of flexbox
			var length = $( '.product-card' + '.' + subMenuClass ).length;
			if( length  >= 3 )
			{
				$( 'footer' ).css('bottom', '0');
			}
			else if( length <= 2)
			{
				$( 'footer' ).css('bottom', 'inherit');
			}
		}

	} 
});

$(document).ready(function(){
	
	
	$('aside > li > ul > li > a').on('click', function(){
		$(this).parent().changeItems();
		
		
    });
	$('aside > li > a').on('click', function(){
		$( '.product-card' ).fadeIn( 'slow' );
		$( 'aside > li > ul > li' ).removeClass( 'active_tab' );
		
		
    });
});





