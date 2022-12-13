function getCookie(cname) {
    let name=cname+"=";
    let decodedCookie=decodeURIComponent(document.cookie);
    let ca=decodedCookie.split(';');
    for (let i=0; i<ca.length; i++) {
        let c=ca[i];
        while (c.charAt(0)==' ') {
            c=c.substring(1);
        }
        if (c.indexOf(name)==0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const uploadForm=document.querySelector('.uploadForm')
const select=document.querySelector('.gameDropdown');

uploadForm.addEventListener('submit', async (evt) => {
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
        window.open("index.html", '_self')
    } catch (err) {
        alert(err)
    }

});



async function allGames() {
    const response=await fetch(serverUrl()+'/browse');
    return response.json();
}

allGames().then(async function (gamesdata) {
    gamesdata.forEach(game => {
        const option=document.createElement('option')
        option.setAttribute('value', game.id)
        option.textContent=game.name
        select.appendChild(option)
    });
});