'use strict';
const url='http://localhost:3000'; // change url when uploading to server


const browseSearch=async (term) => {
    try {
        const response=await fetch(url+'/browse/search?term='+term, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-url-encoded', 'Accept': 'application/json' }
        });
        return await response.json();
    } catch (e) {
        return e;
    }
};

const browseAll=async () => {
    try {
        const response=await fetch(url+'/browse')
        return await response.json();
    } catch (e) {
        return e;
    }
};

console.log(browseSearch('gg'))