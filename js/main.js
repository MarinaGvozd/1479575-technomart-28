var mapLinks = document.querySelectorAll(".buy-button");
var mapBuyPopup = document.querySelector(".modal-buying");
var mapClose = document.querySelector(".modal-content-close-lesson");

var link = document.querySelector(".write-link");
var popup = document.querySelector(".write-us");
var closeBtn = document.querySelector(".modal-content-close");

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");

var closeModalMap = document.querySelector(".modal-content-close-modal-map");

if (mapLinks) {
    mapLinks.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            mapBuyPopup.classList.add("modal-show");
        })
    })
}

if (mapClose) {
    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapBuyPopup.classList.remove("modal-show");
    });
}

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
        if (mapBuyPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapBuyPopup.classList.remove("modal-show");
        }
    }
});

if (link) {
    link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    });
}

if (closeModalMap) {
    closeModalMap.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
    });
}

if (mapLink) {
    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    });
}