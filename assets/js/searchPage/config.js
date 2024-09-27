

// fetch data 
async function serachData(){
    let res = await fetch('http://localhost:4010/search-article');

    let data = await res.json();
    data.map( search =>{

        const el = document.createElement('search-cards');
        el.setAttribute('title', search.title)
        el.setAttribute('text', search.paragraph)
        el.setAttribute('src',search.img_uri);
        el.setAttribute('link', search.link)
        el.setAttribute('datetime', moment(parseInt(search.date)).format('dddd') + ',' + moment(parseInt(search.date)).format('LL'))
        document.getElementById('search-cards').appendChild(el)
    })
}

serachData()