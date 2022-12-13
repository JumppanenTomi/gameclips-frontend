async function getUserProfileById() {
    const response=await fetch(serverUrl()+'/profile/getUserProfileById/'+id);
    return response.json();
}