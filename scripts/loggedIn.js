
if (document.cookie.indexOf('token=')!=-1) {
    document.querySelectorAll('#guest').forEach(function (el) {
        el.style.display='none';
    });
    document.querySelectorAll('#logged').forEach(function (el) {
        el.style.display='inherit';
    });
} else {
    document.querySelectorAll('#guest').forEach(function (el) {
        el.style.display='inherit';
    });
    document.querySelectorAll('#logged').forEach(function (el) {
        el.style.display='none';
    });
}
