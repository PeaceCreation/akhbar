const bottomarticle = `
       <a href="" class="article-link">
                    <img src="" alt="">
                    <div class="card-text mt-3">
                      <span class="article-category">
                        
                      </span>
                      <h5 class="article-title">
                        
                      </h5>
                    </div>
                  </a>
`;


class BottomArticle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = bottomarticle;
        this.querySelector('span').innerHTML = this.getAttribute('category');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
        this.querySelector('h5').innerHTML = this.getAttribute('title');
    }
}



window.customElements.define('bottom-article', BottomArticle);