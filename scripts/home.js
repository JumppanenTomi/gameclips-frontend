const url='http://localhost:3000';
const clips=document.querySelector('main');
const trending=document.querySelector('.trending-games');
console.log(trending)

/**async function trendingGames() {
    const response=await fetch(url+'/browse');
    return response.json();
}

trendingGames().then(async function (gamesdata) {

    const li=document.createElement('li')
    const img=document.createElement('img')
    img.src='https://cdn.cloudflare.steamstatic.com/steam/apps/'+gamesdata[12042].id+'/header.jpg'
    img.alt=gamesdata[0].name+' cover'
    trending.appendChild(li)
    li.appendChild(img)
});**/

async function getQuery() {
    const response=await fetch(url+'/clip/getRandomQuery');
    return response.json();
}

getQuery().then(async function (clipsData) {
    clipsData.forEach(clip => {
        const article=document.createElement('article');
        article.className="clip-post"

        const title=document.createElement('h2');
        title.textContent=clip.title
        const desc=document.createElement('p');
        desc.textContent=clip.description

        const poster=document.createElement('div');
        poster.className="posted-by"
        const posterImg=document.createElement('img');
        posterImg.src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
        const posterName=document.createElement('label');
        posterName.textContent=clip.username

        const clipEl=document.createElement('video');
        clipEl.setAttribute('controls', '');
        const clipSrc=document.createElement('source');
        clipSrc.src=url+'/static/'+clip.url
        clipSrc.setAttribute('type', 'video/mp4')

        const textBox=document.createElement('input')
        textBox.setAttribute('type', 'text')
        textBox.setAttribute('id', 'comment-box')
        textBox.setAttribute('placeholder', 'Write a comment')

        const btn=document.createElement('button')
        btn.setAttribute('id', 'post')
        btn.textContent='Send'

        const collapse=document.createElement('ul')
        collapse.className='collapse'

        const li=document.createElement('li')

        const toggle=document.createElement('div')
        toggle.className='toggle'

        const unordered=document.createElement('ul')
        unordered.className='unordered'

        clips.appendChild(article)
        article.appendChild(title)
        article.appendChild(desc)
        article.appendChild(poster)
        poster.appendChild(posterImg)
        poster.appendChild(posterName)
        article.appendChild(clipEl)
        clipEl.appendChild(clipSrc)
        article.appendChild(textBox)
        article.appendChild(btn)
        article.appendChild(collapse)
        collapse.appendChild(li)
        li.appendChild(toggle)
        li.appendChild(unordered)
    });
});

