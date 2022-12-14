//file for posting new clips
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