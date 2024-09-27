const articlepartone = `
    <p>
        
    </p>
`;




class ArticlePartOne extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = articlepartone;
        this.querySelector('p').innerHTML = this.getAttribute('text');
    }
}


window.customElements.define('article-part-one', ArticlePartOne);