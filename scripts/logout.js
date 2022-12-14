//remove cookies when logout and redirect to home
document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
document.cookie="user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
window.open("./index.html", "_self")