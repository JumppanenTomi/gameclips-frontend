async function getQuery() {
    const response=await fetch(serverUrl()+'/clip/getRandomQuery');
    return response.json();
}