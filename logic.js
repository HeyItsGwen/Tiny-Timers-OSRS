//get the start buttons from the dom
let seaweedButton = document.getElementById('seaweedButton');
let herbButton = document.getElementById('herbButton');

//set variables for global time, and check if buttons have been pressed (false)
let time = 0;
let seaweed = false;
let herbs = false;

//set variables for when in the global time the buttons were pressed
let seaweedStart = 0;
let herbStart = 0;

//start a 2 minute loop
const twoMinutes = setInterval(function() {
    console.log(time);
    //add 2 to time every 2 minutes
    time += 2;

    //check if timer started (true)
    if(seaweed){
        //check different time intervals to change percentage value and background color of dom objects

    }
    if(herbs){

    }

}, 1200); //set to 6000 after testing

function startSeaweed() {
    seaweed = true;
    seaweedStart = time;
    console.log(seaweedStart);
}

function startHerbs() {
    herbs = true;
    herbStart = time;
    console.log(herbStart);
}