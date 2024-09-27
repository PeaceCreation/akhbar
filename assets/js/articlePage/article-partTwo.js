const articleparttwo = `
<p class"py-1">
</p>
<span>
    
</span>
`;

class ArticlePartTwo extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = articleparttwo;
        this.querySelector('p').innerHTML = this.getAttribute('text');
        this.querySelector('span').innerHTML = this.getAttribute('type');
    }
}

window.customElements.define('article-part-two', ArticlePartTwo);