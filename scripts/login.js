'use strict';
const url='http://localhost:3000';

const loginform=document.querySelector('#loginform');

function loginHandler(user) {
    if (user.token!=undefined) {
        document.cookie='user='+JSON.stringify(user.user);
        document.cookie='token='+user.token;
        window.open("index.html", "_self")
    } else {
        alert(user.message)
    }
}

loginform.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data=serializeJson(loginform)
    const fetchOptions={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response=await fetch(url+'/auth/login', fetchOptions);
    loginHandler(await response.json());
})