function removePreloader(){
    let preloader = document.getElementById('preloader');

    preloader.style.display = 'none';
}

document.addEventListener('load', removePreloader());


function addYear(){
    let now = new Date();

    let year = now.getFullYear();

    document.querySelector('.year').textContent = year;
}

addYear();

let goUpBtn = document.getElementById('go-up');

goUpBtn.style = "display: none;";

function handleGoUp(){
    if(window.scrollY <= (0.95*window.innerHeight)){
        goUpBtn.style = "display: none;";
    } else{
        goUpBtn.style = "display: flex;";
    }
}

window.addEventListener('scroll', handleGoUp);