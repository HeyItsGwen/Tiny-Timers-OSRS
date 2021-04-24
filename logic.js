//get the timer divs
let seaweedDiv = document.getElementById('seaweed');
let herbDiv = document.getElementById('herbs');

//get the start buttons from the dom
let seaweedButton = document.getElementById('seaweedButton');
let herbButton = document.getElementById('herbButton');

//get the percentage elements
let seaweedPercentage = document.getElementById('seaweedPercent');
let herbPercentage = document.getElementById('herbPercent');

//set variables for global time, and check if buttons have been pressed (false)
let time = 0;
let seaweed = false;
let herbs = false;

//set variables for when in the global time the buttons were pressed
let seaweedStart = 0;
let herbStart = 0;

//start a 1 minute loop
const oneMinute = setInterval(function() {
    //add 1 to time every 1 minutes
    time += 1;

    //check if timer started (true)
    if(seaweed){
        //check different time intervals to change percentage value and background color of dom objects
        if(time === seaweedStart+4){
            seaweedPercentage.innerHTML='10%';
        }
        if(time === seaweedStart+8){
            seaweedDiv.style.backgroundColor='#ff4100';
            seaweedPercentage.innerHTML='20%';
        }
        if(time === seaweedStart+12){
            seaweedPercentage.innerHTML='30%';
        }
        if(time === seaweedStart+16){
            seaweedDiv.style.backgroundColor='#ffba00';
            seaweedPercentage.innerHTML='40%';
        }
        if(time === seaweedStart+20){
            seaweedPercentage.innerHTML='50%';
        }
        if(time === seaweedStart+24){
            seaweedDiv.style.backgroundColor='#ffe800';
            seaweedPercentage.innerHTML='60%';
        }
        if(time === seaweedStart+28){
            seaweedPercentage.innerHTML='70%';
        }
        if(time === seaweedStart+32){
            seaweedDiv.style.backgroundColor='#e4f801';
            seaweedPercentage.innerHTML='80%';
        }
        if(time === seaweedStart+38){
            seaweedPercentage.innerHTML='90%';
        }
        if(time === seaweedStart+45){
            seaweedDiv.style.backgroundColor='#50fc08';
            seaweedPercentage.innerHTML='100%';
        }
    }
    if(herbs){
        if(time === herbStart+8){
            herbPercentage.innerHTML='10%';
        }
        if(time === seaweedStart+16){
            herbDiv.style.backgroundColor='#ff4100';
            herbPercentage.innerHTML='20%';
        }
        if(time === herbStart+24){
            herbPercentage.innerHTML='30%';
        }
        if(time === seaweedStart+32){
            herbDiv.style.backgroundColor='#ffba00';
            herbPercentage.innerHTML='40%';
        }
        if(time === herbStart+40){
            herbPercentage.innerHTML='50%';
        }
        if(time === seaweedStart+48){
            herbDiv.style.backgroundColor='#ffe800';
            herbPercentage.innerHTML='60%';
        }
        if(time === herbStart+56){
            herbPercentage.innerHTML='70%';
        }
        if(time === seaweedStart+64){
            herbDiv.style.backgroundColor='#e4f801';
            herbPercentage.innerHTML='80%';
        }
        if(time === herbStart+74){
            herbPercentage.innerHTML='90%';
        }
        if(time === herbStart+85){
            herbDiv.style.backgroundColor='#50fc08';
            herbPercentage.innerHTML='100%';
        }
    }

}, 500); //set to 6000 after testing

function startSeaweed() {
    seaweed = true;
    seaweedStart = time;
    seaweedDiv.style.backgroundColor='rgb(255,0,0)';
    seaweedPercentage.innerHTML='0%';
}
seaweedButton.addEventListener('click',startSeaweed);

function startHerbs() {
    herbs = true;
    herbStart = time;
    herbDiv.style.backgroundColor='rgb(255,0,0)';
    herbPercentage.innerHTML='0%';
}
herbButton.addEventListener('click',startHerbs);