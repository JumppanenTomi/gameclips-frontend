const clips=document.querySelector('main');
const trending=document.querySelector('.trending-games');
let myUsername;
if (getCookie('user')!="") {
    myUsername=JSON.parse(getCookie('user')).username;
}

trendingGames().then(async function (gamesdata) {
    for (let i=0; i<=10; i++) {
        const li=document.createElement('li')
        const img=document.createElement('img')
  /*      img.src='https://cdn.cloudflare.steamstatic.com/steam/apps/'+gamesdata[i].id+'/header.jpg'
        img.alt=gamesdata[i].name+' cover'  */
        trending.appendChild(li)
        li.appendChild(img)
    }
});

getQuery().then(async function (clipsData) {
    if (clipsData.length==0) {
        const emptytext=document.createElement('h2');
        emptytext.textContent="There are no clips. Start uploading them."
    } else {
        clipsData.forEach(clip => {
            var selectIndex = clipsData.indexOf(clip);

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

            const textBox=document.createElement('input')
            textBox.setAttribute('type', 'text')
            textBox.setAttribute('id', 'comment-box'+selectIndex)
            textBox.setAttribute('class', 'comment-box')
            textBox.setAttribute('placeholder', 'Write a comment')

            const btn=document.createElement('button')
            btn.setAttribute('id', 'post')
            btn.textContent='Send'

            btn.addEventListener("click", function(){
          
                var commentBoxValue= document.getElementById('comment-box'+selectIndex).value;
             
                var li = document.createElement("li");
            
                var text = document.createTextNode(commentBoxValue);
            
                li.setAttribute("style", "width: 50%; height: 50px; border-radius: 15px; background-color: var(--accent); font-family: 'Poppins', sans-serif; font-weight: 400; color: var(--white); list-style-type: none; padding: 20px; margin: 10px;");
            
                li.setAttribute("class", "listItem");
            
                li.appendChild(text);
                
                unordered.appendChild(li);
             
            });

   /*         btn.addEventListener('click', async (evt) => {
                try {
                    evt.preventDefault();
                    const data=new FormData(uploadForm)
                    const fetchOptions={
                        method: 'POST',
                        headers: {
                            Authorization: 'Bearer '+getCookie('token')
                        },
                        body: data
                    };
                    const response=await fetch(serverUrl()+'/clip', fetchOptions);
                    alert(await response.json())
                } catch (err) {
                    alert(err)
                }
            
            }); */

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
            if (getCookie('user')!="") {
                if (clip.username==myUsername) {
                    const deleteBtn=document.createElement('button');
                    deleteBtn.className="delete"
                    deleteBtn.textContent="Delete"
                    deleteBtn.setAttribute('onClick', 'deleteClip('+clip.id+')')
                    article.appendChild(deleteBtn)
                }
            }
            article.appendChild(clipEl)
            clipEl.appendChild(clipSrc)
            article.appendChild(textBox)
            article.appendChild(btn)
            article.appendChild(collapse)
            collapse.appendChild(li)
            li.appendChild(toggle)
            li.appendChild(unordered)
            
                  for (let i of document.querySelectorAll(".collapse ul")) {
              
                    let toggle = document.createElement("div");
              
                    toggle.innerHTML = i.previousSibling.textContent;
              
                    toggle.className = "toggle";
              
                    toggle.onclick = () => { toggle.classList.toggle("show")
              
                  };
            
                 
                    i.parentElement.removeChild(i.previousSibling);
              
                    i.parentElement.insertBefore(toggle, i);
              
                  }
              
                });
    }
});


