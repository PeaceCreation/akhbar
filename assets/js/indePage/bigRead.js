const bigread = `
          <div class="card-news">
            <a href="">
            <div class="card-img">
             <img src="" alt=""> 
            </div>
            <div class="card-text">
              <h4 class="py-3"></h4>
              <time datetime=""></time>
            </div>
            </a>
          </div>
`;



class BigRead extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = bigread;
        this.querySelector('h4').innerHTML = this.getAttribute('title');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        // this.querySelector('time').setAttribute('datetime', this.getAttribute('datetime'));
        this.querySelector('time').innerHTML =  this.getAttribute('datetime');
    }
}


window.customElements.define('big-read-cart', BigRead);