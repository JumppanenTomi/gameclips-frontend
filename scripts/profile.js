const url='http://localhost:3000';
const clips=document.querySelector('main');
const user=JSON.parse(getCookie('user'))

async function getQuery() {
    const fetchOptions={
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'id': user.id })
    };
    const response=await fetch(url+'/profile/getUserProfileById', fetchOptions);
    console.log(response.json())
    return response.json();
}

getQuery().then(async function (profileData) {
    const username=profileData.username;
    const usernameText=document.querySelector('.profile-name')
    usernameText.textContent=username
    if (profileData.length==0) {
        const emptytext=document.createElement('h2');
        emptytext.textContent="There are no clips. Start uplaoding them."
        clips.appendChild(emptytext)
    } else {
        profileData.forEach(clip => {
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
    }
});