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