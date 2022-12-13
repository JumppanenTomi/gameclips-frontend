const clips=document.querySelector('#clips');
const id=JSON.parse(getCookie('user')).id

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
        const deleteBtn=document.createElement('button');
        deleteBtn.className="delete"
        deleteBtn.textContent="Delete"
        deleteBtn.setAttribute('onClick', 'deleteClip('+clip.id+')')
        article.appendChild(deleteBtn)
        article.appendChild(clipEl)
        clipEl.appendChild(clipSrc)
        article.appendChild(textBox)
        article.appendChild(btn)
        article.appendChild(collapse)
        collapse.appendChild(li)
        li.appendChild(toggle)
        li.appendChild(unordered)
    }
});