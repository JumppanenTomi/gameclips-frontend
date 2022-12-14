'use strict';

const loginform=document.querySelector('#loginform');

function loginHandler(user) {
    //if login succeeded..
    if (user.token!=undefined) {
        document.cookie='user='+JSON.stringify(user.user);//save user to cookies
        document.cookie='token='+user.token;//save token to cookies
        window.open("index.html", "_self")//open home screen
    } else {
        alert(user.message)//if something went wrong we alert
    }
}

//posting data to api
loginform.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data=serializeJson(loginform)
    const fetchOptions={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response=await fetch(serverUrl()+'/auth/login', fetchOptions);
    //send response to function that handles it
    loginHandler(await response.json());
})