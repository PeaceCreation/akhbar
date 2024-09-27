const articlecomponent = `
<div class ="row">
<div class="">
    <a href="" class="article-link">
        <img src="." alt="image">
            <div class="article-text my-2">
            <span class="article-category"> </span>
            <h5 class="article-title"></h5>
        </div>
    </a>
</div>

</div>

`;

async function fetchData(){
    let res = await fetch('http://localhost:4010/news');
    let data = await res.json();
    data.map( article =>{
        const articlecomp = document.createElement('article-component');
        articlecomp.setAttribute('category', article.category)
        articlecomp.setAttribute('title', article.title)
        articlecomp.setAttribute('src', article.img_uri);
        articlecomp.setAttribute('href', article.link);
        articlecomp.classList.add('col-lg-3', 'col-md-3', 'col-sm-6', 'mt-4');
         document.getElementById('news').appendChild(articlecomp);
    })
;
}
fetchData();

class ArticleComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = articlecomponent;
        this.querySelector('span').innerHTML = this.getAttribute('category');
        this.querySelector('h5').innerHTML = this.getAttribute('title');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
        
        

    }
}

window.customElements.define('article-component', ArticleComponent);