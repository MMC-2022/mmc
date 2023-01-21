// search
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.transitionDuration = "0.3s";
}
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";

}

// horizontal media scroller

//get the container element
var container = document.querySelector(".TeamCartes");

//get all the scroller items
var items = document.querySelectorAll(".OneCarte");

//add event listener
container.addEventListener("scroll", function(){
    //get the scroll position
    var scrollPosition  = container.scrollLeft;

    //loop through all the scroller items
    for(var i=0; i<items.length; i++){
        //get the position of the current item
        var itemPosition = items[i].offsetLeft;

        //check if the current item is in the middle of the scroller
        if(itemPosition > scrollPosition && itemPosition < scrollPosition + container.offsetWidth){
        //apply the "active" class to the current item
            items[i].classList.add("active");
        }else{
            items[i].classList.remove("active");
        }
    }
});
