const stories = `
                                <a href="#" class="article-link">
                                  <div class="story-card mt-5">
                                    <div class="row">
                                      <div class="col-sm-4">
                                        <img src="." alt="">
                                      </div>
                                      <div class="col-sm-8">
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
`;


class SuggestedStories extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = stories;
        this.querySelector('a').setAttribute('link', this.getAttribute('link'));
        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('p').innerHTML= this.getAttribute('title');
    }
}

window.customElements.define('suggested-stories', SuggestedStories);