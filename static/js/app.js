//// Search button functionality
////
const btSearch = document.getElementById('btsearch');
const tbSearch = document.getElementById('tbsearch');
const navHeader = document.getElementById('header-nav');
const formSearch = document.getElementById('form-search');

let btSearchIsActive = false;
let tbIsLostFocus = false;

const btSearchHandler = function (event) {
    console.log(event);    
    if (btSearchIsActive) {
        closeSearch(event);
        if (tbSearch.value) {
            formSearch.submit();
        }
    } else {
        tbSearch.style.opacity = "1";
        tbSearch.style.width = "250px";
        navHeader.style.opacity = "0";
        btSearchIsActive = true;
        tbSearch.focus();
    }
}

const closeSearch = function(event){
    if(event.target == tbSearch && btSearch == formSearch.querySelector(':hover')){
        return;
    }
    tbSearch.style.width = "0";
    tbSearch.style.opacity = "0";
    navHeader.style.opacity = "1";
    btSearchIsActive = false;
    if(event.target == tbSearch){
        tbSearch.value = "";
    }
}

btSearch.addEventListener('click', btSearchHandler);

tbSearch.addEventListener('focusout', closeSearch);