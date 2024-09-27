const commentcarts = `
<div class="row">
    <div class="col-lg-2 col-3">
        <div class="user-photo">
            <img src="" alt="">
        </div>
    </div>
    <div class="col-lg-10 col-9">
        <div class="comment-text">
            <span class="user-name">  </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum numquam iusto molestiae, 
                    vitae atque quibusdam aspernatur fugit tenetur, 
                    </p>
        </div>
    </div>
        </div>
`;






class CommentCards extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = commentcarts;
        this.querySelector('span').innerHTML = this.getAttribute('username');
        this.querySelector('p').innerHTML = this.getAttribute('text');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
    }
}

window.customElements.define('comment-card', CommentCards);