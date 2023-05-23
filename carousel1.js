let toggles = document.querySelectorAll(".team1__toggle");

// console.log(toggles);

toggles.forEach(function(toggle){
    toggle.addEventListener('click', function(e){
        let previousNode = toggle.previousElementSibling;
        let carousel = previousNode.firstElementChild;

        if (carousel.classList == "team1__carouse1"){
            carousel.classList = "team1__carouse1--clicked";

            toggle.classList = "team1__toggle team__toggle--clicked"
        } else {
            carousel.classList = "team1__carouse1";

            toggle.classList = "team1__toggle"
        }
    })
})