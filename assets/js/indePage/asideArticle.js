const asidearticle = `
        <a href="" class="article-link">
                <div class="row">
                  <div class="col-sm-6">
                    <img src="" alt="">
                  </div>
                  <div class="col-sm-6">
                    <div class="card-text">
                      <span class="article-category">
                        
                      </span>
                      <h5 class="article-title">
                        
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
`;


class AsideArticle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = asidearticle;
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('h5').innerHTML = this.getAttribute('title');
        this.querySelector('span').innerHTML = this.getAttribute('category')
        this
    }
}

window.customElements.define('aside-article', AsideArticle);