const right = `
          <a href="" class="article-link">
                <img src="" alt="">
                <div class="card-text mt-3">
                  <span class="article-category"></span>
                  <h5 class="article-title">  </h5>
                  <p>
                    
                  </p>
                </div>
              </a>
`;








class FirstArticle extends HTMLElement{
    constructor(){
        super();
    }


    connectedCallback(){
        this.innerHTML = right;
        this.querySelector('h5').innerHTML = this.getAttribute('title');
        this.querySelector('p').innerHTML = this.getAttribute('text');
        this.querySelector('span').innerHTML = this.getAttribute('category');
        this.querySelector('p').innerHTML = this.getAttribute('text');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
    }


}

window.customElements.define('first-article', FirstArticle);