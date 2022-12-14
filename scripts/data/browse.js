//used to fetch all games that have clips from API
async function trendingGames() {
    const response=await fetch(serverUrl()+'/browse/getAllWithClips');
    return response.json();
}