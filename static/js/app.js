//// Search button functionality
////
const btSearch = document.getElementById('btsearch');
const tbSearch = document.getElementById('tbsearch');
const navHeader = document.getElementById('header-nav');

let btSearchIsActive = false;

const btSearchHandler = function () {
    if (btSearchIsActive) {
        tbSearch.style.width = "0rem";
        tbSearch.style.opacity = "0";
        btSearchIsActive = false;
    } else {
        tbSearch.style.opacity = "1";
        tbSearch.style.width = "6rem";
        btSearchIsActive = true;
    }
}

btSearch.addEventListener('click', btSearchHandler);