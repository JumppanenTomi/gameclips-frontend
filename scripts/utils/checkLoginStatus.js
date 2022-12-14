//place this script to pages that are logged-in only

//if token is empty then we go to login page
if (token==undefined) {
    window.open("login.html", "_self")
}