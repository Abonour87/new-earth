//  jQuery(document).ready(function($) {

// 	'use strict';

//         $('.owl-carousel').owlCarousel({
//             items:4,
//             lazyLoad:true,
//             dots:true,
//             responsiveClass:true,
//                 responsive:{
//                     0:{
//                         items:1,
//                     },
//                     650:{
//                         items:2,
//                     },
//                     900:{
//                         items:3,
//                     },
//                     1200:{
//                         items:4,
//                     }
//                 }
//         });


//         $(function() {
//             $( "#tabs" ).tabs();
//         });


//         $(function(){
        
//             $('#thumbnail li').click(function(){
//                 var thisIndex = $(this).index()
                    
//                 if(thisIndex < $('#thumbnail li.active').index()){
//                     prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
//                 }else if(thisIndex > $('#thumbnail li.active').index()){
//                     nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
//                 }
                    
//                 $('#thumbnail li.active').removeClass('active');
//                 $(this).addClass('active');

//                 });
//             });

//         var width = $('#image-slider').width();

//         function nextImage(newIndex, parent){
//             parent.find('li').eq(newIndex).addClass('next-img').css('left', width).animate({left: 0},600);
//             parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({left: -width},600);
//             parent.find('li.next-img').attr('class', 'active-img');
//         }
//         function prevImage(newIndex, parent){
//             parent.find('li').eq(newIndex).addClass('next-img').css('left', -width).animate({left: 0},600);
//             parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({left: width},600);
//             parent.find('li.next-img').attr('class', 'active-img');
//         }

//         /* Thumbails */
//         var ThumbailsWidth = ($('#image-slider').width() - 18.5)/7;
//         $('#thumbnail li').find('img').css('width', ThumbailsWidth);



//         $(".seq-preloader").fadeOut(); // will first fade out the loading animation
//         $(".sequence").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
             
        
//         $(function() {
  
//         function showSlide(n) {
//             // n is relative position from current slide
          
//             // unbind event listener to prevent retriggering
//             $body.unbind("mousewheel");
          
//             // increment slide number by n and keep within boundaries
//             currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);
            
//             var displacment = window.innerWidth*currSlide;
//             // translate slides div across to appropriate slide
//             $slides.css('transform', 'translateX(-' + displacment + 'px)');
//             // delay before rebinding event to prevent retriggering
//             setTimeout(bind, 700);
            
//             // change active class on link
//             $('nav a.active').removeClass('active');
//             $($('a')[currSlide]).addClass('active');
            
//         }
      
//         function bind() {
//              $body.bind('false', mouseEvent);
//           }
      
//         function mouseEvent(e, delta) {
//             // On down scroll, show next slide otherwise show prev slide
//             showSlide(delta >= 0 ? -1 : 1);
//             e.preventDefault();
//         }
        
//         $('nav a, .main-btn a').click(function(e) {
//             // When link clicked, find slide it points to
//             var newslide = parseInt($(this).attr('href')[1]);
//             // find how far it is from current slide
//             var diff = newslide - currSlide - 1;
//             showSlide(diff); // show that slide
//             e.preventDefault();
//         });
      
//         $(window).resize(function(){
//           // Keep current slide to left of window on resize
//           var displacment = window.innerWidth*currSlide;
//           $slides.css('transform', 'translateX(-'+displacment+'px)');
//         });
        
//         // cache
//         var $body = $('body');
//         var currSlide = 0;
//         var $slides = $('.slides');
//         var $slide = $('.slide');
      
//         // give active class to first link
//         $($('nav a')[0]).addClass('active');
        
//         // add event listener for mousescroll
//         $body.bind('false', mouseEvent);
//     })        


//         $(window).on("scroll", function() {
//             if($(window).scrollTop() > 100) {
//                 $(".header").addClass("active");
//             } else {
//                 //remove the background property so it comes transparent again (defined in your css)
//                $(".header").removeClass("active");
//             }
//         });


// });
// first slides programming

$(".slides .img-thumbnail ul li").click(function(){
    var myindex =$(this).index();
    var width =$(".img-slider li").width();
    if (myindex > $(".slides .img-thumbnail ul li.active-li").index()) {
        $(".img-slider").find("li").eq(myindex).addClass("img-active").css({"left":width}).animate({"left":0},600).siblings("li.img-active").removeClass("img-active").css({"left":0}).animate({"left":-width},600)
        // $(".img-slider").find("li.img-active").removeClass("img-active").css({"left":0}).animate({"left":-width},600)
    } else if (myindex < $(".slides .img-thumbnail ul li.active-li").index()){
        $(".img-slider").find("li").eq(myindex).addClass("img-active").css({"left":-width}).animate({"left":0},600).siblings("li.img-active").removeClass("img-active").css({"left":0}).animate({"left":width},600)
        // $(".img-slider").find("li.img-active").removeClass("img-active").css({"left":0}).animate({"left":width},600)
    }
    $(".slides .img-thumbnail ul li").removeClass("active-li");
    $(this).addClass("active-li");
})
// end first slide programming


// start slide two programming
$(function(){
    $(".slide-two .three-tabs li a").click(function(){
        $(".slide-two .three-tabs li a").removeClass("active");
        $(this).addClass("active"); 
        $(".list-tabs .three-contents").find($($(this).parent().data("content"))).addClass("active").siblings().removeClass("active")
        // console.log($(this).parent("li").data("content"))
    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        650:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
            items:4
        }
    }
    
})
// start sliding slides by clicking on links
$(function(){
    $(".earth-nav ul li").click(function(){
        var mymy=$(this).index();
        $(this).addClass("active").siblings().removeClass("active")
        var mywid=$(window).outerWidth();
        console.log(mywid)
        $(".slides").animate({left:(-mymy*mywid)},600)
        // $(".slides").find(".slide").eq(mymy).addClass("active-slide").animate({left:0},700).siblings().removeClass("active-slide")
    })
})
// prevent zoom -n and out in slides section
$(document).keydown(function(event) {
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
         }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscor Hey
        // 61 Plus key  +/= key
    });
    
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
           if (event.ctrlKey == true) {
           event.preventDefault();
           }
    });
    // window resize the slide also resize
    $(window).resize(function(){
        $(".slide").width($(window).width())
    })
