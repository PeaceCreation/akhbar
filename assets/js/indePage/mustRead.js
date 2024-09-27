const mustread = `
   
          <div>
              <a href="">
              <div class="row">
                <div class="col-md-5">
                  <img src="" alt="">
                </div>
                <div class="col-md-7">
                  <div class="card-text">
                    <h4></h4>
                    <p>
                     
                    </p>
                    <time datetime=""></time>
                  </div>
                </div>
              </div>
            </a>
          </div>
   
`;




class MostRead extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = mustread;
        this.querySelector('h4').innerHTML = this.getAttribute('title');
        this.querySelector('p').innerHTML = this.getAttribute('text');
        this.querySelector('time').innerHTML =  this.getAttribute('datetime');
        // this.querySelector('time').setAttribute('datetime', this.getAttribute('datetime'));
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
    }
}

window.customElements.define('most-read', MostRead);
