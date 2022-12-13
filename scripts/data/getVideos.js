async function getQuery() {
    const response=await fetch(serverUrl()+'/clip/getRandomQuery');
    return response.json();
}

async function getByGameId(id) {
    const response=await fetch(serverUrl()+'/clip/getByGameId/'+id);
    return response.json();
}