'use strict';

/* Posting comments */

var post= document.getElementById("post");
post.addEventListener("click", function(){

    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");

    var text = document.createTextNode(commentBoxValue);

    li.setAttribute("style", "width: 50%; height: 50px; border-radius: 15px; background-color: var(--accent); font-family: 'Poppins', sans-serif; font-weight: 400; color: var(--white); list-style-type: none; padding: 20px; margin: 10px;");

    li.setAttribute("class", "listItem");

    li.appendChild(text);
    
    document.getElementById("unordered").appendChild(li);
 
});


/* Toggle for comment section */ 

window.addEventListener("load", () => {

    for (let i of document.querySelectorAll(".collapse ul, .collapse ol")) {

      let toggle = document.createElement("div");

      toggle.innerHTML = i.previousSibling.textContent;

      toggle.className = "toggle";

      toggle.onclick = () => { toggle.classList.toggle("show")

    };
   
      i.parentElement.removeChild(i.previousSibling);

      i.parentElement.insertBefore(toggle, i);

    }

  });
