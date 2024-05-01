(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var item = 0;
    var dots = document.getElementsByClassName("dot");
    var body = document.getElementById("body");
    var timer;
    var transition;

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (event) {
            for (var i = 0; i < dots.length; i++) {
                if (event.target.classList.contains("on")) {
                    return;
                } else if (transition == "transitioning") {
                    return;
                } else {
                    if (dots[i] == event.target) {
                        clearTimeout(timer);
                        moveKitties(i);
                        break;
                    }
                }
            }
        });
    }

    function moveKitties(newItem) {
        kitties[item].classList.remove("onscreen");
        dots[item].classList.remove("on");
        kitties[item].classList.add("offscreen-left");
        transition = "transitioning";

        if (typeof newItem == "undefined") {
            item++;
            if (kitties[item] == kitties[kitties.length]) {
                item = 0;
            }
        } else {
            item = newItem;
        }

        kitties[item].classList.add("onscreen");
        dots[item].classList.add("on");
    }

    timer = setTimeout(moveKitties, 5000);

    document.addEventListener("transitionend", function (event) {
        transition = "not transitioning";
        if (event.target.classList.contains("offscreen-left")) {
            event.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 5000);
        }
    });
})();
