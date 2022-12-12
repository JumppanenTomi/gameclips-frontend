function getCookie(cname) {
    let name=cname+"=";
    let decodedCookie=decodeURIComponent(document.cookie);
    let ca=decodedCookie.split(';');
    for (let i=0; i<ca.length; i++) {
        let c=ca[i];
        while (c.charAt(0)==' ') {
            c=c.substring(1);
        }
        if (c.indexOf(name)==0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const token=getCookie('token')

const url='http://localhost:3000';
const uploadForm=document.querySelector('.uploadForm')

uploadForm.addEventListener('submit', async (evt) => {
    try {
        evt.preventDefault();
        const data=new FormData(uploadForm)
        const fetchOptions={
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+token
            },
            body: data
        };
        const response=await fetch(url+'/clip', fetchOptions);
        alert(await response.json())
        window.open("index.html", '_self')
    } catch (err) {
        alert(err)
    }

});