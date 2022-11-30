// STICKY //

let nav = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){ 
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
})


// FORMA //

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span"),
buttonSubmit = form.querySelector(".button-area button");

form.onsubmit = (e)=> {
    e.preventDefault();
    statusTxt.style.color = "#0a2136";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Sending your message...";
    form.classList.add("disabled");
    buttonSubmit.style.margin = "0";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
          statusTxt.style.color = "red";
        }else{
          form.reset();
          setTimeout(()=>{
            statusTxt.style.display = "none";
          }, 3000);
        }
        statusTxt.innerText = response;
        form.classList.remove("disabled");
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
  }