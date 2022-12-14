//used to fetch user profile from api
async function getUserProfileById() {
    const response=await fetch(serverUrl()+'/profile/getUserProfileById/'+id);
    return response.json();
}