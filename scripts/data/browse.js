async function trendingGames() {
    const response=await fetch(serverUrl()+'/browse/getAllWithClips');
    return response.json();
}