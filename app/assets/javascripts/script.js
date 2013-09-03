/*!
 * jQuery Tools v1.2.6 - The missing UI library for the Web
 * 
 * tabs/tabs.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(!d.isDefaultPrevented()){b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.current),i.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);


/*
 *
 * Custom Script By Author
 *
 */
(function($){

		// Cycle Options are listed here : http://jquery.malsup.com/cycle/options.html
    	$('.slider').cycle({
        	fx:     'scrollHorz', 		// Slider effect. More Could be learned from http://jquery.malsup.com/cycle/browser.html
    		speed:  800,				// Animation Speed
		    timeout: 5000,				// Time between slide transitions
			pause: true,				// pasue on hover
			easing: 'easeInOutSine',	// easing of animation
		    next: '.next-slide', 		// class of next slide button
		    prev: '.right-slide' 		// class of prev slide button
		});
		
		
		
		// Cycle Options are listed here : http://jquery.malsup.com/cycle/options.html
    	$('.testimonial-slider').cycle({
        	fx:     'fade', 				// Slider effect. More Could be learned from http://jquery.malsup.com/cycle/browser.html
    		speed:  600,					// Animation Speed
		    timeout: 5000,					// Time between slide transitions
			pause: true,					// pasue on hover
			easing: 'easeInOutSine',		// easing of animation
			pager:  '#testimonials-pager'	// pager
		});
		
		
		// Some JavaScript Fixes to Make Code Cross Browser
		$('.features li:last-child').css("background","none");
		$('#about .about-detail ul li:last-child').css("border","none");		
		$('.gallery li:last-child').css("margin","0");		
		$('.choose-plan ul li:last-child').css("border","none");
		$('.business-plan ul li:last-child').css("border","none");
		$('.premium-plan ul li:last-child').css("border","none");
		$('#twitter_update_list li:last-child').css('border','none');				
		
		
		//jCarousel Documentation Can Be Found Here : http://sorgalla.com/projects/jcarousel/	
		jQuery('.gallery-wrap').jcarousel({
	  		wrap: 'circular',
	  		auto: 0,
	 		animation: 1000,
			scroll: 4,
			easing: 'easeInOutSine'
		});
		
	
	//this function attached focus and blur events with input elements
	var addFocusAndBlur = function($input, $val){
		
		$input.focus(function(){
			if (this.value == $val) {this.value = '';}
		});
		
		$input.blur(function(){
			if (this.value == '') {this.value = $val;}
		});
	}

	// example code to attach the events
	addFocusAndBlur(jQuery('#email'),'Email Address');
	addFocusAndBlur(jQuery('#name'),'Name');
	addFocusAndBlur(jQuery('#quick-email'),'Email');
	addFocusAndBlur(jQuery('.message-box'),'Message');
	
	// Subscribe Form AJAX validation and submition
	// Validation Plugin : http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// Form Ajax Plugin : http://www.malsup.com/jquery/form/
	
	 var subscribe_options = { 
       				 	target: '#thanks',
        				beforeSubmit: function(){
												$('#subscribe-loader').fadeIn('fast');
												$('#thanks').fadeOut('fast');
										}, 
       					success: function(){
											$('#subscribe-loader').fadeOut('fast');
											$('#thanks').fadeIn('fast');
											$('#subscribe-form').resetForm();
										}
    	}; 
	
	$('#subscribe-form').validate({
		submitHandler: function(form) {
	   		$(form).ajaxSubmit(subscribe_options);
	   }
	});
	
	// Quick Connect Form AJAX validation and submition
	// Validation Plugin : http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// Form Ajax Plugin : http://www.malsup.com/jquery/form/
	var contact_options = { 
       				 	target: '#message-sent',
        				beforeSubmit: function(){
												$('#contact-loader').fadeIn('fast');
												$('#message-sent').fadeOut('fast');
										}, 
       					success: function(){
											$('#contact-loader').fadeOut('fast');
											$('#message-sent').fadeIn('fast');
											$('#contact-form').resetForm();
										}
    	}; 

	$('#contact-form').validate({
		submitHandler: function(form) {
	   		$(form).ajaxSubmit(contact_options);
	   }
	});
	
	
	$("ul.tabs").tabs("div.panes > .tab-pane");
	
	$(".accordion").tabs(".accordion div.pane", {tabs: 'h3', effect: 'slide', initialIndex: null});
	
	$(".accordion div.pane").slideUp();

	// Backgroun Switcher
	
	$('.open-btn').click(function(){

		if($('.open-btn').hasClass('closed')){
			$(this).parent('.bg-switcher').stop().animate({left:195},400);
			$(this).removeClass('closed').addClass('opened');
		} else {
			$(this).parent('.bg-switcher').stop().animate({left:0},400);
			$(this).removeClass('opened').addClass('closed');
		}
	});
	
	
	$('.bg-switcher ul li').click(function(){

		var thisBGcol = $(this).css('background-color');
		var thisBGimg = $(this).css('background-image');
		
		$('body').css('background-image', thisBGimg);
		$('body').css('background-color', thisBGcol);
		
	});
	
	//social navigation hover effect for twitter,facebook etc
	$('.header-socail-naav li a').hover(function(){					
		$(this).stop(true, true).animate({backgroundPosition: '0px -30px'},200);			
	}, function(){
		$(this).stop(true, true).animate({backgroundPosition: '0px 0px'},300);
	});
	
	// Pretty Photo
	$("a[rel^='prettyPhoto']").click(function(e) {
		e.preventDefault();
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto();


    // Twitter Fetcher Target Code
    twitterFetcher.fetch('353252568291504128', 'twitter_update_list', 2, true, false, true, dateFormatter, false);
	
})(jQuery);