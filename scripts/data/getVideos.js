'use strict';
const url='http://localhost:3000'; // change url when uploading to server


const getListOfRandomGames=async () => {
    try {
        const response=await fetch(url+'/clip/getRandomQuery');
        return await response.json();
    } catch (e) {
        return e;
    }
};
