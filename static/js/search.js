const getParam = function () {
    return window.location.search.split('=')[1];
}

const getFilter = function (term) {
    const f = (page) => {
        if(!page.title){
            return false;
        }
        if (page.title.toLowerCase().indexOf(term.toLowerCase()) != -1) {
            return true;
        }
        if (page.tags && page.tags.map((tag) => tag.toLowerCase()).indexOf(term.toLowerCase()) != -1) {
            return true;
        }
        if (page.description && page.description.toLowerCase().indexOf(term.toLowerCase()) != -1) {
            return true;
        }
        if (page.content && page.content.map((word) => word.toLowerCase()).indexOf(term.toLowerCase()) != -1) {
            return true;
        }
        return false;
    }
    return f;
}

const showResults = function (results, term) {
    console.log(results.filter(getFilter(term)));
}

fetch('/search.json')
    .then(response => response.json())
    .then(data => showResults(data, getParam()));