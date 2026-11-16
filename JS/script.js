const searchButton = document.querySelector("#search-rides");

if (searchButton) {
    searchButton.addEventListener("click", function () {
        window.location.href = "search.html";
    });
}


const searchButton1 = document.querySelector("#Trip");

if (searchButton1) {
    searchButton1.addEventListener("click", function () {
        window.location.href = "confirm.html";
    });
}

const searchButton2 = document.querySelector("#confirm-trip");

if (searchButton2) {
    searchButton2.addEventListener("click", function () {
        window.location.href = "details.html";
    });
}

const searchButton3 = document.querySelector("addC");

