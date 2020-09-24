//// Search button functionality
////
const btSearch = document.getElementById('btsearch');
const tbSearch = document.getElementById('tbsearch');
const navHeader = document.getElementById('header-nav');
const formSearch = document.getElementById('form-search');

let btSearchIsActive = false;

const btSearchHandler = function () {
    if (btSearchIsActive) {
        tbSearch.style.width = "0";
        tbSearch.style.opacity = "0";
        btSearchIsActive = false;
        navHeader.style.opacity = "1";
        if (tbSearch.value) {
            formSearch.submit();
        }
    } else {
        tbSearch.style.opacity = "1";
        tbSearch.style.width = "250px";
        navHeader.style.opacity = "0";
        btSearchIsActive = true;
    }
}

btSearch.addEventListener('click', btSearchHandler);