'use strict';

const registerform=document.querySelector('#registerform');

function registerHandler(response) {
    if (response==true) {
        window.open("login.html", "_self")
    } else {
        alert(JSON.stringify(response))
    }
}

registerform.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data=serializeJson(registerform)
    const fetchOptions={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response=await fetch(serverUrl()+'/auth/register', fetchOptions);
    registerHandler(await response.json());
})