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
    $('.owl-carousel').find('.owl-item:first-child').addClass('first-item')
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        // items:5,
        nav:true,
        navText :[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
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
} )























// Scroll right function
function scrollRight() {
    var container = document.querySelector('.TeamCartes');
    container.scrollBy(350,0);
}

// Scroll left function
function scrollLeft() {
    var container = document.querySelector('.TeamCartes');
    container.scrollBy(-550,0);
}



var items = document.querySelectorAll('.TeamCartes');
var numberOfItemsToShow = 3;

for (var i = numberOfItemsToShow; i < items.length; i++) {
  items[i].style.display = 'none';
}

// // Get all the div elements
// var items = document.querySelectorAll('.TeamCartes');

// // Add an event listener to the window to detect scrolling
// window.addEventListener('scroll', function() {
//   // Get the current scroll position
//   var scrollPosition = window.scrollY;

//   // Loop through all the items
//   for (var i = 0; i < items.length; i++) {
//     // Get the position of the current item
//     var itemPosition = items[i].getBoundingClientRect().top;

//     // Check if the current item is in the middle of the page
//     if (itemPosition > scrollPosition && itemPosition < scrollPosition + window.innerHeight) {
//       // Apply the "active" class to the current item
//       items[i].classList.add('active');
//     } else {
//       // Remove the "active" class from the current item
//       items[i].classList.remove('active');
//     }
//   }
// });


