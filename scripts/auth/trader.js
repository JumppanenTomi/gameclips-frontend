'use strict';
const url='http://localhost:3000';

const login=async (username, password) => {
    try {
        const response=await fetch(url+'/auth/login?username='+username+'&password='+password, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-url-encoded', 'Accept': 'application/json' }
        });
        return await response.json();
    } catch (e) {
        return e;
    }
};

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

console.log(register('testitomi', 'testifhuiew123', 'tomi.judsamp@hotmail.com'))