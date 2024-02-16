function removePreloader(){
    let preloader = document.getElementById("preloader");

    preloader.style = "display: none";
}

function year(){
    let now = new Date();
    document.querySelector('.year').textContent = now.getFullYear();
}

year();

//scroll to top button
document.getElementById('go-up').addEventListener('click', function(){
    window.scrollTo(0,0);
});