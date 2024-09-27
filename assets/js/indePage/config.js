

async function sliderFetch(){
    let  response = await fetch('http://localhost:4010/slider')
    let data = await response.json()  

    data.map( slide => {
       const el = document.createElement('slider-component');
        el.classList.add('carousel-item')
       el.setAttribute('src', slide.img_uri);
       el.setAttribute('title', slide.title);
       el.setAttribute('href', slide.link);

       document.getElementById('carousel-inner').appendChild(el);
    })
    let sliders = document.getElementsByClassName('carousel-item');
    sliders[0].classList.add('active');
}


// call data 
async function fetchArticle(){
    const resp = await fetch('http://localhost:4010/header-articles');
    let data = await resp.json();

    data.map( article =>{
        let headAr = document.createElement('header-article');
        headAr.setAttribute('title', article.title);
        headAr.setAttribute('src', article.img_uri)
        headAr.setAttribute('href', article.link)
        headAr.setAttribute('category', article.category);
        document.getElementById('header-articles').appendChild(headAr);
    })

}


fetchArticle();
sliderFetch();


// read-cart 
async function fetchmost(){
  
    let res = await fetch('http://localhost:4010/most-read');
    let data = await res.json();

    for ( let i =0 ; i < data.length; i++){
        if(i%2 == 0){
            const el = document.createElement('most-read');
            el.setAttribute('title', data[i].title);
            el.setAttribute('text', data[i].paragraph);
            el.setAttribute('src', data[i].img_uri);
            el.setAttribute('href', data[i].link)
            el.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ', '+ moment(parseInt(data[i].date)).format('LL'))
            document.getElementById('card-news').appendChild(el);
        }
        else{
            const el = document.createElement('big-read-cart');
            el.setAttribute('title', data[i].title);
            el.setAttribute('src', data[i].img_uri);
            el.setAttribute('href', data[i].link);
            el.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ', '+ moment(parseInt(data[i].date)).format('LL'))
            document.getElementById('card-news').appendChild(el);
        }
    }
 
 }
 fetchmost()

// opinion-articles

async function fetchOp(){
    let resp = await fetch('http://localhost:4010/opinion-articles');
    let data = await resp.json();
    data.map( article =>{
        const el = document.createElement('openion-article');
        el.classList.add('col-lg-3', 'col-md-4', 'col-md-4', 'col-sm-6');
        el.setAttribute('title', article.title);
        el.setAttribute('username', article.user_name);
        el.setAttribute('src', article.user_uri);
        el.setAttribute('href', article.link)
        document.getElementById('opinion').appendChild(el);
    })
}
fetchOp();

// fetch video
async function fetchVideo(){
    let res = await fetch('http://localhost:4010/videos');
    let data = await res.json();
    data.map( swiper =>{
        console.log(swiper.link)
        const  el = document.createElement('slider-swiper');
        el.classList.add('swiper-slide')
        el.setAttribute('title', swiper.title);
        el.setAttribute('href', swiper.link);
        el.setAttribute('src', swiper.img_uri);
        document.getElementById('swiper').appendChild(el)
    })
}

fetchVideo();

// latest
async function Latestfetch(){
    let res = await fetch('http://localhost:4010/latest-news');
    let data = await res.json();


    data.map( latest =>{
      
        if(latest.position == 'right'){
            const el = document.createElement('first-article');
            el.setAttribute('title', latest.title);
            el.setAttribute('category', latest.category);
            el.setAttribute('text', latest.paragraph);
            el.setAttribute('src', latest.img_uri)
            el.setAttribute('href', latest.link)
            document.getElementById('first-article').prepend(el);
        }
        // Aside Article
        if(latest.position == "side"){
            const el = document.createElement('aside-article');
            el.setAttribute('href', latest.link);
            el.setAttribute('src', latest.img_uri);
            el.setAttribute('title', latest.title);
            el.setAttribute('category', latest.category);
            document.getElementById('side-article').appendChild(el);
        }
        // Bottom Article
        if(latest.position == 'bottom'){
            const el = document.createElement('bottom-article');
            el.classList.add('col-lg-6', 'my-4')
            el.setAttribute('category', latest.category);
            el.setAttribute('href', latest.link);
            el.setAttribute('src', latest.img_uri);
            el.setAttribute('title', latest.title)
            document.getElementById('bottom-article').appendChild(el);
        }
    })
} 

Latestfetch();