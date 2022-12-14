const clips=document.querySelector('#clips');
const id=JSON.parse(getCookie('user')).id//getting current users id from cookies

//then fetching data using id and placing it into html
getUserProfileById().then(async function (profileData) {
    const usernameText=document.querySelector('.profile-name')
    usernameText.textContent=profileData.username
    console.log(profileData.clips[0])
    for (let i=0; i<profileData.clips.length; i++) {
        const clip=profileData.clips[i];

        const article=document.createElement('article');
        article.className="clip-post"

        const title=document.createElement('h2');
        title.textContent=clip.title
        const desc=document.createElement('p');
        desc.textContent=clip.description

        const clipEl=document.createElement('video');
        clipEl.setAttribute('controls', '');
        const clipSrc=document.createElement('source');
        clipSrc.src=serverUrl()+'/static/'+clip.url
        clipSrc.setAttribute('type', 'video/mp4')

        clips.appendChild(article)
        article.appendChild(title)
        article.appendChild(desc)
        const deleteBtn=document.createElement('button');
        deleteBtn.className="delete"
        deleteBtn.textContent="Delete"
        deleteBtn.setAttribute('onClick', 'deleteClip('+clip.id+')')
        article.appendChild(deleteBtn)
        article.appendChild(clipEl)
        clipEl.appendChild(clipSrc)
    }
});