'use strict';
const url='http://localhost:3000';

const loginform=document.querySelector('.loginform');

const register=async (username, password, email) => {
    try {
        const response=await fetch(url+'/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-url-encoded', 'Accept': 'application/json' },
            body: new URLSearchParams({
                'username': username,
                'email': email,
                'password': password
            })
        });
        return await response.json();
    } catch (e) {
        return e;
    }
};

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