var mapLinks = document.querySelectorAll(".buy-button");
var mapBuyPopup = document.querySelector(".modal-buying");
var mapClose = document.querySelector(".modal-content-close-lesson");

var link = document.querySelector(".write-link");
var popup = document.querySelector(".write-us");
var closeBtn = document.querySelector(".modal-content-close");

var modalPopup = document.querySelector(".modal-popup");

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");

var closeModalMap = document.querySelector(".modal-content-close-modal-map");

function addModalShowSelector(element) {
    modalPopup.classList.add("show");
    element.classList.add("modal-show");
}

function removeModalShowSelector() {
    document.querySelectorAll(".modal-show").forEach((e) => {
        e.classList.remove("modal-show");
    })
    modalPopup.classList.remove("show");

}

if (mapLinks) {
    mapLinks.forEach(element => {
        element.addEventListener("click", function(event) {
            removeModalShowSelector();
            event.preventDefault();
            addModalShowSelector(mapBuyPopup);
        })
    })
}

if (mapClose) {
    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        removeModalShowSelector();
    });
}

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            removeModalShowSelector();
        }
        if (mapBuyPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            removeModalShowSelector();
        }
    }
});

if (link) {
    link.addEventListener("click", function(evt) {
        removeModalShowSelector();
        evt.preventDefault();
        addModalShowSelector(popup);
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        removeModalShowSelector();
    });
}

if (closeModalMap) {
    closeModalMap.addEventListener("click", function(evt) {
        evt.preventDefault();
        removeModalShowSelector();
    });
}

if (mapLink) {
    mapLink.addEventListener("click", function(evt) {
        removeModalShowSelector();
        evt.preventDefault();
        addModalShowSelector(mapPopup);
    });
}
if (modalPopup) {
    modalPopup.addEventListener("click", function(evt) {
        if (evt.target === modalPopup) {
            removeModalShowSelector();
        }
    });
}