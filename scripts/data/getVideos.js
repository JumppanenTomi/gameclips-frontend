//used to fetch all clips from api
async function getQuery() {
    const response=await fetch(serverUrl()+'/clip/getRandomQuery');
    return response.json();
}

//used to fetch all clips from specific game from api
async function getByGameId(id) {
    const response=await fetch(serverUrl()+'/clip/getByGameId/'+id);
    return response.json();
}