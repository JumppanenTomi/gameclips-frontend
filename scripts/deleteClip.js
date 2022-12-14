async function deleteClip(id) {
    //creating dialog aski do you want to delete data
    if (confirm("Really delete this awesome post?")) {
        const fetchOptions={
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer '+getCookie('token')
            },
        };
        const response=await fetch(serverUrl()+'/clip/'+id, fetchOptions);
        alert('Post and its comments are now deleted')//telling that data was deleted
        window.open("index.html", '_self')//redirect home
    }
}