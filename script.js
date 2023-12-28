//scroll to top button
document.getElementById('go-up').addEventListener('click', function(){
    window.scrollTo(0,0);
});


//adding copyright year
function year(){
    let now = new Date();
    document.querySelector('.year').textContent = now.getFullYear();
}

year();

/*Handling the appearance and disappearance of go up button*/
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

/*Project Controls*/
function projectControls(){
    let nextBtn = document.getElementById('next-project');
    let prevBtn = document.getElementById('prev-project');
    
    let scrollWidth = window.innerWidth;

    let projectsContainer = document.querySelector('.projects-items');

    var stepCount = 1;
    let iterate = document.querySelectorAll('.project-item').length;

    nextBtn.addEventListener('click', ()=>{
         if(stepCount < iterate){
            projectsContainer.scrollBy(scrollWidth, 0);
            stepCount++;
            console.log(stepCount);
         } else{
            stepCount = 1;
            projectsContainer.scrollBy((-3*scrollWidth), 0);
            console.log(stepCount);
         }
    })

    prevBtn.addEventListener('click', ()=>{
        if(stepCount > 1){
            stepCount--;
            projectsContainer.scrollBy((-1*scrollWidth), 0);
        } else{
            stepCount = iterate;
            projectsContainer.scrollBy((iterate*scrollWidth), 0);
        }

        console.log(stepCount);
    })
}

projectControls();

/*Skills Controls*/
function skillControls(){
    let nextBtn = document.getElementById('next-skill');
    let prevBtn = document.getElementById('prev-skill');
    
    let scrollWidth = window.innerWidth;

    let projectsContainer = document.querySelector('.skills-container');

    /*Skills fitting on the viewport*/
    let viewed = Math.round(scrollWidth/310);

    var stepCount = 1;
    var temp = document.querySelectorAll('.skill').length - viewed;
    
    let iterate = Math.ceil(temp/viewed)+1;

    console.log("Iterated"+iterate);

    nextBtn.addEventListener('click', ()=>{
         if(stepCount < iterate){
            projectsContainer.scrollBy(scrollWidth, 0);
            stepCount++;
            console.log(stepCount);
         } else{
            stepCount = 1;
            projectsContainer.scrollBy(((-1*iterate)*scrollWidth), 0);
            console.log(stepCount);
         }
    })

    prevBtn.addEventListener('click', ()=>{
        if(stepCount > 1){
            stepCount--;
            projectsContainer.scrollBy((-1*scrollWidth), 0);
        } else{
            stepCount = iterate;
            projectsContainer.scrollBy((iterate*scrollWidth), 0);
        }

        console.log(stepCount);
    })
}

skillControls();


/*Services Controls*/
function serviceControls(){
    let nextServiceBtn = document.getElementById('next-service');
    let prevServiceBtn = document.getElementById('prev-service');
    
    let scrollWidth = window.innerWidth;

    let projectsContainer = document.querySelector('.services-container');

    /*Skills fitting on the viewport*/
    let viewed = Math.ceil(scrollWidth/300);

    var stepCount = 1;
    var iterate = Math.round(document.querySelectorAll('.service').length - viewed);
    console.log(iterate);

    nextServiceBtn.addEventListener('click', ()=>{
         if(stepCount < iterate){
            projectsContainer.scrollBy(scrollWidth, 0);
            stepCount++;
            console.log(stepCount);
         } else{
            stepCount = 1;
            projectsContainer.scrollBy(((-1*iterate)*scrollWidth), 0);
            console.log(stepCount);
         }
    })

    prevServiceBtn.addEventListener('click', ()=>{
        if(stepCount > 1){
            stepCount--;
            projectsContainer.scrollBy((-1*scrollWidth), 0);
        } else{
            stepCount = iterate;
            projectsContainer.scrollBy((iterate*scrollWidth), 0);
        }

        console.log(stepCount);
    })
}

serviceControls();



//typing effect on the welcome text
var i = 0;
var txt = 'Moses Okoth.';
var speed = 125;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

let int = window.setInterval(typeWriter, 2000);

window.setTimeout(()=>{
    window.clearInterval(int);
}, 2000)


//checking width for site compatibility
function checkWidth(){
    if(window.innerWidth < 480){
        let body = document.querySelector('body');
        body.innerHTML += "<h2>Under Maintanance</h2>";
        window.alert("This site is optimized for desktop view! Kindly rotate your device to get the best experience.\nSorry for any inconveniences caused.");

        // window.location.reload();
    }
}

