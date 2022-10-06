function initializePageEvents() {
//   const nextButton = document.getElementById("nextBtn");
//   nextButton.onclick = () => {
//     console.log("Clciked")
//     document.getElementById("horizontal-scrollable").scrollLeft += 20;
//   };

//   const previousButton = document.getElementById("previousBtn");
//   previousButton.onclick = () => {
//     console.log("Clciked")
//     document.getElementById("horizontal-scrollable").scrollLeft -= 20;
//   };

}

function scrollHorizontally( isRight){
    if(isRight){
        document.getElementById("horizontal-scrollable").scrollLeft += 50;
    }else{
        document.getElementById("horizontal-scrollable").scrollLeft -= 50;
    }
    
}
function onHorizontalScroll() {
    const scrollable = document.getElementById("horizontal-scrollable");
    const previousButton = document.getElementById("previousBtn");
    const nextButton = document.getElementById("nextBtn");
    console.log("scrollLeft", scrollable.scrollLeft);
    console.log("scrollWidth", scrollable.scrollWidth );
    console.log("clientWidth", scrollable.clientWidth);
    console.log("reachEnd? ", scrollable.scrollWidth - scrollable.scrollLeft);
    console.log("reachEnd? ", scrollable.scrollWidth - scrollable.scrollLeft === scrollable.clientWidth );


    if (scrollable.scrollLeft <= 0){
        previousButton.classList.add("hidden");
    }else {
        previousButton.classList.remove("hidden");
    }

    if(scrollable.scrollWidth - scrollable.scrollLeft <= scrollable.clientWidth){
        nextButton.classList.add("hidden");
    }else {
        nextButton.classList.remove("hidden");
    }
}
