const clips=document.querySelector('main');
const urlParams=new URLSearchParams(window.location.search);//getting url parameters

//fetching data from api by game id and them creting dom out of given data
getByGameId(urlParams.get('gameId')).then(async function (clipsData) {
    //if query was empty we inform
    if (clipsData.length==0) {
        const emptytext=document.createElement('h2');
        emptytext.textContent="There are no clips. Start uplaoding them."
    } else {
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
            posterImg.src="./media/profile.png"
            const posterName=document.createElement('label');
            posterName.textContent=clip.username

            const clipEl=document.createElement('video');
            clipEl.setAttribute('controls', '');
            const clipSrc=document.createElement('source');
            clipSrc.src=serverUrl()+'/static/'+clip.url
            clipSrc.setAttribute('type', 'video/mp4')

            clips.appendChild(article)
            article.appendChild(title)
            article.appendChild(desc)
            article.appendChild(poster)
            poster.appendChild(posterImg)
            poster.appendChild(posterName)
            //if user is logged..
            if (getCookie('user')!="") {
                //and video is from this user add "delete button"
                if (clip.username==JSON.parse(getCookie('user')).username) {
                    const deleteBtn=document.createElement('button');
                    deleteBtn.className="delete"
                    deleteBtn.textContent="Delete"
                    deleteBtn.setAttribute('onClick', 'deleteClip('+clip.id+')')
                    article.appendChild(deleteBtn)
                }
            }
            article.appendChild(clipEl)
            clipEl.appendChild(clipSrc)
        });
    }
});

