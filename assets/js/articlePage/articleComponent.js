const articlecomponent = `
  <div class="header-category">
                  <span class="me-1">  </span>  |  <span class="ms-1"></span>
              </div>
              <div class="header-title">
                  <h2></h2>
                  <h3></h3>
              </div>
</div>
`;



class ArticleComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = articlecomponent;
        this.querySelector('h2').innerHTML = this.getAttribute('title');
        this.querySelector('.me-1').innerHTML = this.getAttribute('category');
        this.querySelector('.ms-1').innerHTML = this.getAttribute('subject');

    }
}

window.customElements.define('article-component', ArticleComponent);