'use strict';

const registerform=document.querySelector('#registerform');

function registerHandler(response) {
    //if login successed..
    if (response==true) {
        window.open("login.html", "_self")//redirect to login screen
    } else {
        alert(JSON.stringify(response))//if failed inform why
    }
}

//posting data to api
registerform.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data=serializeJson(registerform)
    const fetchOptions={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response=await fetch(serverUrl()+'/auth/register', fetchOptions);
    //send response to function that handles it
    registerHandler(await response.json());
})