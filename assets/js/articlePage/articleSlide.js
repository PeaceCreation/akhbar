const articleslide = `
<div class="article-img">
                          <img src="" alt="">
                        </div>
                        <div class="article-subtitle">
                            <span> </span>
                        </div>
                        <div class="article-datetime">
                            <time datetime=" "></time>
                        </div>
`;
class ArticleSlide extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = articleslide;
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('span').innerHTML = this.getAttribute('subtitle');
        this.querySelector('time').innerHTML = this.getAttribute('datetime');
        
    }
}


window.customElements.define('article-slide', ArticleSlide);