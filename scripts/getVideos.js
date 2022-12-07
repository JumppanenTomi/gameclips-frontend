'use strict';
const url='http://localhost:3000'; // change url when uploading to server

const main=document.querySelector('main');
// get users to form options
const getListOfRandomGames=async () => {
    try {
        const response=await fetch(url+'/clip/getRandomQuery');
        const clips=await response.json();
        for (const clip of clips) {
            main.innerHTML+=`
            <article class="clip-post">
            <h2>${clip.title}</h2>
            <p>${clip.desc}s</p>
            <div class="posted-by">
                <img src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
                    alt="user profile picture">
                <label>${clip.username}</label>
            </div>
            <video width="0" controls>
                <source src="./static/${clip.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </article>
            `;
        }
    } catch (e) {
        console.log(e.message);
    }
};
getListOfRandomGames();

