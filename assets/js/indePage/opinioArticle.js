const opinion = ` 

              <a href="./article.html">
                <div class="opinions-card">
                  <h5 class="article-title "> </h5>
                  <div class="user-info">
                    <img src="" alt="">
                    <span>  </span>
                  </div>
                </div>
              </a>
`;



class OpenionArticle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = opinion;
        this.querySelector('h5').innerHTML = this.getAttribute('title');
        this.querySelector('span').innerHTML = this.getAttribute('username');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('link', this.getAttribute('link'))
    }
}


window.customElements.define('openion-article', OpenionArticle);
