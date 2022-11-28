let nav = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){ 
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
})