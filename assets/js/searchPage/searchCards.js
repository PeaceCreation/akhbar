const searchcards = `
     <div class="search-card">
                      <hr>
                      <a href="" class="article-link">
                        <div class="row">
                            <div class="col-lg-5">
                              <div class="card-img">
                                <img src="" alt="img">
                              </div>
                            </div>
                            <div class="col-lg-7">
                              <div class="card-title"> 
                                <h3></h3>
                              </div>
                              <div class="card-text">
                                <p>
                                </p>
                                <span>
                                  <time datetime=""> </time>
                                </span>
                              </div>
                            </div>
                        </div>
                      </a>
                    </div>
`;



class SearchCards extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = searchcards;
        this.querySelector('a').setAttribute('link', this.getAttribute('link'));
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('h3').innerHTML = this.getAttribute('title');
        this.querySelector('p').innerHTML = this.getAttribute('text');
        this.querySelector('time').innerHTML = this.getAttribute('datetime');

    };


}

window.customElements.define('search-cards', SearchCards);