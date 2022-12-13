const browse=document.querySelector('.browse');

trendingGames().then(async function (gamesdata) {
    gamesdata.forEach(game => {
        const article=document.createElement('article')
        article.className='game-thumb'
        const img=document.createElement('img')
        img.src='https://cdn.cloudflare.steamstatic.com/steam/apps/'+game.id+'/header.jpg'
        img.alt=game.name+' cover'
        browse.appendChild(article)
        article.appendChild(img)
    });
});