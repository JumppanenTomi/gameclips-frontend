//used to fetch comments from api(currently not inuse)
async function getComment(id) {
    const response=await fetch(serverUrl()+'/comment/clip'+id);
    return response.json();
}