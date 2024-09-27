const mustread = `
  <a href="#" class="article-link">
                              <div class="most-read-article">
                                <img src="" alt="">
                                <div class="most-read-text">
                                  <h4 class="article-title">
                                    
                                  </h4>
                                  <time datetime=""> </time>
                                </div>
                              </div>
                            </a>
`;



class MustRead extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = mustread;
        this.querySelector('a').setAttribute('link', this.getAttribute('link'))
        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('h4').innerHTML = this.getAttribute('title');
        this.querySelector('time').innerHTML = this.getAttribute('datetime');
      }

}

window.customElements.define('most-read', MustRead);