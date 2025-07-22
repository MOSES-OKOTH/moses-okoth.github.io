/* Removing the preloader when the page is fully loaded */
function removePreloader(){
    let preloader = document.querySelector('.preloader');
    let time = 1500; // milliseconds

    preloader.style.animation = "fadeOut 1.4s ease-out";

    let int = setInterval(function(){
        if (preloader) {
            preloader.style.display = 'none';
            clearInterval(int);
        }
    }, time);
}


/* Opening and Closing the Hamburger Menu */
let hamBtn = document.querySelector('.ham-menu');
let closeHamBtn = document.querySelector('.close-ham-menu');
let links = document.querySelector('.links');


hamBtn.addEventListener('click', function(){
    links.style.display = 'flex';
    closeHamBtn.style.display = 'block';
});

closeHamBtn.addEventListener('click', function(){
    links.style.display = 'none';
    closeHamBtn.style.display = 'none';
});

links.addEventListener('click', function(e){
    links.style.display = 'none';
})