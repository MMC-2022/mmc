// search
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.transitionDuration = "0.3s";
}
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";

}


// // Get the container element
// var container = document.querySelector('.TeamCartes');

// // Get the left button element
// var leftButton = document.querySelector('.left-button');

// // Get the right button element
// var rightButton = document.querySelector('.right-button');

// // Add click event listener to the left button
// leftButton.addEventListener('click', function() {
//   container.scrollLeft -= 100;
// });

// // Add click event listener to the right button
// rightButton.addEventListener('click', function() {
//   container.scrollLeft += 100;
// });

// Get the container element


//OwlCarousel
$(document).ready(function(){
        var owl = $('.owl-carousel').owlCarousel({
        loop:true,
        margin:25,
        responsiveClass:true,
        center:true,
        items: 5,
        // auto play feature
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,

        //
        nav:true,
        navText :[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        onInitialized : startCarousel,

        responsive:{
            0:{
                items:1,
                // nav:true
            },
            600:{
                items:3,
                // nav:true
            },
            1000:{
                items:5,
                // nav:true,
                // loop:false
            }
        }
    })

    owl.on('changed.owl.carousel', startCarousel);
    

    function startCarousel (event) {

        setTimeout(function(){
          var activeEls = $('.owl-item.active');
          var activeItem = event.item.index;
          var slideToCaption1 = activeEls.eq(0); // Change this value to target a different slide
          var slideToCaption2 = activeEls.eq(4); // Change this value to target a different slide
          setCarouselCaption1(slideToCaption1);
          setCarouselCaption2(slideToCaption2);
          setCarouselCaption3(activeItem);
        },1);
    
        function setCarouselCaption1(el){
            $(".owl-item").removeClass("target1");
            el.addClass("target1");
        }
        function setCarouselCaption2(el){
            $(".owl-item").removeClass("target2");
            el.addClass("target2");
        }
        // function setCarouselCaption3(el){
        //     if (el === 0) {
        //         item1.style.display= 'block';
        //         // item2.style.display= 'none';
        //       } else {
        //         item1.style.display= 'none';

        //       }

        //     // $('.AddTopaMargin').removeClass('active');
        //     // $('#item-' + (activeItem + 1)).addClass('active');
        // }
    };
    
    
    
    
    









});


