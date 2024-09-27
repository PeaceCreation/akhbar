const relatedarticle = `
<div class="">
    <a href="" class="article-link">
        <img src="" alt="">
        <div class="article-text my-2">
            <span class="article-category"> </span>
            <h5 class="article-title"></h5>
        </div>
    </a>
                                      
</div>

`;


class RelatedArticle extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = relatedarticle;
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('span').innerHTML = this.getAttribute('category')
        this.querySelector('h5').innerHTML = this.getAttribute('title')
    }

 
}


window.customElements.define('related-article', RelatedArticle);