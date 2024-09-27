const sliderswiper = `
       <div class="swiper-solide">
                <a href="" class="article-link">
                    <div class="slider-img">
                      <img src="" alt="">
                         
                    </div>
                  <div class="slide-text">
                    <h5 class="article-title "></h5>
                  </div>
                </a>
    </div>
`;


class SliderSwiper extends HTMLElement{
    constructor(){
        super();
    }


    connectedCallback(){
        this.innerHTML = sliderswiper;
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('h5').innerHTML = this.getAttribute('title');
    }
}


window.customElements.define('slider-swiper', SliderSwiper)