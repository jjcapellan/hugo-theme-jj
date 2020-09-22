const searchDiv = document.getElementById('search-results');

const getParam = function () {
    return window.location.search.split('=')[1].split(/\++/);
    
}

const getFilter = function (terms) {
    const f = (page) => {
        if (!page.title) {
            return false;
        }

        function foundInString(terms, str){
            for(let i=0; i<terms.length;i++){
                if(str.toLowerCase().indexOf(terms[i].toLowerCase()) != -1){
                    return true;
                }
            }
            return false;
        }

        function foundInArray(terms, arr){
            for(let i=0; i<terms.length;i++){
                if(arr.map(item => item.toLowerCase()).indexOf(terms[i]) != -1){
                    return true;
                }
            }
            return false;
        }

        if (foundInString(terms, page.title)) {
            return true;
        }
        if (page.tags && foundInArray(terms, page.tags)) {
            return true;
        }
        if (page.description && foundInString(terms, page.description)) {
            return true;
        }
        if (page.content && foundInArray(terms, page.content)) {
            return true;
        }
        return false;
    }
    return f;
}

const showResults = function (data, term) {
    data = data.filter(getFilter(term));

    if (data.length == 0) {
        let warning = document.createElement('h3');
        warning.innerText = 'No results Found';
        searchDiv.append(warning);
        return;
    }

    function addTitle(page) {
        let h2 = document.createElement('h2');
        let a = document.createElement('a');
        a.setAttribute('href', page.uri);
        a.setAttribute('class', 'color-title');
        a.innerText = page.title;
        h2.append(a);
        searchDiv.appendChild(h2);
    }

    function addPostData(page) {
        let div = document.createElement('div');
        div.setAttribute('class', 'post-data');

        function addDate() {
            let span = document.createElement('span');
            span.innerText = page.date;
            div.appendChild(span);
        }

        function addTagIcon() {
            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            svg.setAttribute('class', 'icon');
            use.setAttribute('href', '/imgs/jj-icons.svg#tag');
            svg.appendChild(use);
            div.appendChild(svg);
        }

        function addTags(){
            if(page.tags == null){
                return;
            }
            let tags = page.tags;
            tags.forEach(tag => {
                let a = document.createElement('a');
                a.setAttribute('href',`/tags/${tag}`);
                a.setAttribute('class', 'post-tag');
                a.innerText = `#${tag}`;
                div.appendChild(a);
            });            
        }

        addDate();
        addTagIcon();
        addTags();
        searchDiv.appendChild(div);
    }

    let msg = `${data.length} item${(data.length>1)?'s':''} found:`;
    let h3 = document.createElement('h3');
    h3.innerText = msg;
    searchDiv.appendChild(h3);

    data.forEach(page => {
        addTitle(page);
        addPostData(page);
        let hr = document.createElement('hr');
        searchDiv.appendChild(hr);
    });

}

fetch('/search.json')
    .then(response => response.json())
    .then(data => showResults(data, getParam()));