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



//// Responsive menu (More+)
////
(function () {
    let nav = document.getElementById('header-nav');
    let more = document.getElementById('more');
    let submenu = document.getElementById('submenu');

    function generateMenuArray() {
        let allLinks = Array.from(nav.getElementsByTagName('a'));
        const moreWidth = more.clientWidth;
        let extraSpace = moreWidth;
        let menuArray = [];
        let previusWidth = 0;
        for (let i = 0; i < allLinks.length; i++) {
            if(allLinks[i].getAttribute('id') == 'more'){
                continue;
            }
            if (i > 0) {
                previusWidth = menuArray[i - 1].minWidth;
                extraSpace = 0;
            }
            let node = allLinks[i];
            let minWidth = Math.ceil(node.clientWidth + previusWidth + extraSpace);
            let nodeCopy = node.cloneNode(true);
            menuArray.push({ node: node, minWidth: minWidth, nodeCopy: nodeCopy });
        }
        return menuArray;
    }

    const menuArray = generateMenuArray();
    const totalLinks = menuArray.length;
    let visibleLinks = totalLinks;

    function resizeHandler() {
        width = nav.clientWidth;

        for (let i = menuArray.length - 1; i >= 0; i--) {
            node = menuArray[i].node;
            minWidth = menuArray[i].minWidth;
            if (width < minWidth && node.style.display != "none") {
                submenu.appendChild(menuArray[i].nodeCopy);
                node.style.display = "none";
                visibleLinks--;
            } else if (width > minWidth && node.style.display == "none") {
                node.style.display = "unset";
                submenu.removeChild(submenu.lastChild);
                visibleLinks++;
            }
        }
        if(visibleLinks == totalLinks && more.style.display != "none"){
            more.style.display = "none";
        } else if(visibleLinks<totalLinks && more.style.display == "none"){
            more.style.display = "unset";
        }
    }
    
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    more.addEventListener('click', (event) => {
            event.preventDefault();
            submenu.classList.toggle('submenu-open');
            submenu.classList.toggle('submenu-closed');
    })
})()