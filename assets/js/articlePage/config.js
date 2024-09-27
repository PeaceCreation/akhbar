// fetch data

async function fetchDataArt(){
    let res = await fetch('http://localhost:4010/articles');
    let data = await res.json();

   const el = document.createElement('article-component');
   el.setAttribute('title', data.title);
   el.setAttribute('subject', data.subject)
   el.setAttribute('category', data.category)
   document.getElementById('article-header').appendChild(el);
}

fetchDataArt();

// slide article

async function Slide(){
        let res = await fetch('http://localhost:4010/articles');
        let data = await res.json();
        const el = document.createElement('article-slide');
        el.setAttribute('subtitle', data.subtitle);
        el.setAttribute('src', data.img_uri);
        el.setAttribute('datetime', moment(parseInt(data.datetime)).format('dddd') + ' , ' + moment(parseInt(data.datetime)).format('LL'));
        document.getElementById('article-slide').appendChild(el);
}

Slide();

// articles part:
async function ArticleOne(){
    let res = await fetch('http://localhost:4010/articles');
    let data = await res.json();
    const el = document.createElement('article-part-one');
    el.setAttribute('text', data.article_part_1);
    document.getElementById('article-part-one').appendChild(el)
}
ArticleOne();

async function ArticleTwo(){
    let res = await fetch('http://localhost:4010/articles');
    let data = await res.json();
  
    const el = document.createElement('article-part-two');
    el.setAttribute('text', data.article_part_2);
    data.keywords.map( key =>{
        // create span
        const keys = document.createElement('span');
        //  add class 
        keys.classList.add('keyword', 'me-3');
        // create text node and add value to each span
        const text = document.createTextNode(key);
        // append text
        keys.appendChild(text)
        document.getElementById('keywords').appendChild(keys);
    })
    document.getElementById('article-part-two').appendChild(el)
}
ArticleTwo();

// Comment Cards 

async function CommentsCards(){
    let res = await fetch('http://localhost:4010/articles');
    let data = await res.json();

     data.comments.map( comment =>{
       
        const el = document.createElement('comment-card');
        el.setAttribute('text', comment.text);
        el.setAttribute('username', comment.user_name);
        el.setAttribute('src', comment.user_img)
        document.getElementById('comment-cards').appendChild(el)
     })
}
CommentsCards();


//related-articles

async function Related(){
    let res = await fetch('http://localhost:4010/articles');
    let data = await res.json();

    data.related_articles.map(
        relate=>{
            const el = document.createElement('related-article');
            el.classList.add('col-sm-4');
            el.setAttribute('category', relate.category);
            el.setAttribute('title', relate.title)
            el.setAttribute('href', relate.link)
            el.setAttribute('src', relate.img_uri)

          document.getElementById('related-articles').appendChild(el);
        }
    )

}
Related()
// suggested

async function Suggested(){

    let res = await fetch('http://localhost:4010/suggested-articles');
    let data = await res.json();
    data.map( suggested =>{
        const el = document.createElement('suggested-stories');
        el.setAttribute('title', suggested.title)
        el.setAttribute('src', suggested.img_uri)
        el.setAttribute('link', suggested.link)
        document.getElementById('stories').appendChild(el);
        console.log(suggested.title);
    })
}

Suggested();
// must Read


async function MostRead(){
    let res = await fetch('http://localhost:4010/most-read');
    let data = await res.json();
   data.map( read=>{
    const el = document.createElement('most-read');
    el.setAttribute('title', read.title);
    el.setAttribute('link', read.link)
    el.setAttribute('src', read.img_uri)
    el.setAttribute('datetime', moment(parseInt(read.date)).format('dddd') + ', ' + moment(parseInt(read.date)).format('LL'))
    document.getElementById('most-read-articles').appendChild(el)
   })
}

MostRead();