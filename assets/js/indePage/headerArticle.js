


const headerarticle = `
 <a href="" class="article-link">
        <div class="row">
            <div class="col-5">
                <img src="" class="w-100" alt="imag">
            </div>
                <div class="col-7">
                    <div class="article-text">
                        <span class="article-category">
                                
                        </span>
                <h5 class="article-title ">  </h5>
                <p ></p>
                </div>
                </div>
                    </div>
        </a>
`;



class HeaderArticle extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = headerarticle;
        this.querySelector('h5').innerHTML =this.getAttribute('title');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('span').innerHTML = this.getAttribute('category')
        if(this.getAttribute('excerpt')){
            this.querySelector('p').innerHTML = this.getAttribute('excerpt');
        }else{
            this.querySelector('p').style.display = 'none';
        }
    }
}

window.customElements.define('header-article', HeaderArticle);