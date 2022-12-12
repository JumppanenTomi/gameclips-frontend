const url='http://localhost:3000';

async function getQuery() {
    const response=await fetch(url+'/clip/getRandomQuery');
    return response.json();
}

getQuery().then(function (result) {
    const main=document.querySelector('main');
    const li=document.createElement('li');
    const img=document.createElement('video');
    img.src=url+"/static/"+result[1].url;
    img.alt=result[1].title;

    main.appendChild(li)
    li.appendChild(img)
});