//get the timer divs
let seaweedDiv = document.getElementById('seaweed');
let herbDiv = document.getElementById('herbs');
let birdDiv = document.getElementById('birds');
let treeDiv = document.getElementById('trees');
let fruitTreeDiv = document.getElementById('fruitTrees');

//dropdown divs
let treeDropdownDiv = document.getElementById('treeDropdownDiv');
let fruitTreeDropdownDiv = document.getElementById('fruitTreeDropdownDiv')

//get the start buttons from the dom
let seaweedButton = document.getElementById('seaweedButton');
let herbButton = document.getElementById('herbButton');
let birdButton = document.getElementById('birdButton');

//get the percentage elements
let seaweedPercentage = document.getElementById('seaweedPercent');
let herbPercentage = document.getElementById('herbPercent');
let birdPercentage = document.getElementById('birdPercent');

//get the checkbox dom elements
let seaweedCheckbox = document.getElementById('seaweedBox');
let herbCheckbox = document.getElementById('herbBox');
let birdCheckbox = document.getElementById('birdBox');
let treeCheckbox = document.getElementById('treeBox');
let fruitTreeCheckbox = document.getElementById('fruitTreeBox');

//set variables for global time, and check if buttons have been pressed (false)
let time = 0;
let seaweed = false;
let herbs = false;
let birds = false;

//set variables for when in the global time the buttons were pressed
let seaweedStart = 0;
let herbStart = 0;
let birdStart = 0;

/*

FIGURE OUT TREEEEES
dropdown for tree type to set how long it lasts

*/

//start a 1 minute loop
const oneMinute = setInterval(function() {
    //add 1 to time every 1 minutes
    time += 1;

    //check if timer started (true)
    if(seaweed){
        //check different time intervals to change percentage value and background color of dom objects
        if(time === seaweedStart+1){
            seaweedPercentage.innerHTML='1%';
        }
        if(time === seaweedStart+2){
            seaweedPercentage.innerHTML='5%';
        }
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
        if(time === seaweedStart+36){
            seaweedPercentage.innerHTML='90%';
        }
        if(time === seaweedStart+28){
            seaweedPercentage.innerHTML='95%';
        }
        if(time === seaweedStart+40){
            seaweedDiv.style.backgroundColor='#50fc08';
            seaweedPercentage.innerHTML='100%';
        }
    }
    if(herbs){
        if(time === herbStart+1){
            herbPercentage.innerHTML = '1%'
        }
        if(time === herbStart+4){
            herbPercentage.innerHTML='5%'
        }
        if(time === herbStart+8){
            herbPercentage.innerHTML='10%';
        }
        if(time === herbStart+16){
            herbDiv.style.backgroundColor='#ff4100';
            herbPercentage.innerHTML='20%';
        }
        if(time === herbStart+24){
            herbPercentage.innerHTML='30%';
        }
        if(time === herbStart+32){
            herbDiv.style.backgroundColor='#ffba00';
            herbPercentage.innerHTML='40%';
        }
        if(time === herbStart+40){
            herbPercentage.innerHTML='50%';
        }
        if(time === herbStart+48){
            herbDiv.style.backgroundColor='#ffe800';
            herbPercentage.innerHTML='60%';
        }
        if(time === herbStart+56){
            herbPercentage.innerHTML='70%';
        }
        if(time === herbStart+64){
            herbDiv.style.backgroundColor='#e4f801';
            herbPercentage.innerHTML='80%';
        }
        if(time === herbStart+72){
            herbPercentage.innerHTML='90%';
        }
        if(time === herbStart+76){
            herbPercentage.innerHTML = '95%'
        }
        if(time === herbStart+80){
            herbDiv.style.backgroundColor='#50fc08';
            herbPercentage.innerHTML='100%';
        }
    }
    /*
    '#ff4100'
    '#ffba00'
    '#ffe800'
    '#e4f801'
    '#50fc08'
    */
    if(birds){
        if(time === birdStart+1){
            birdPercentage.innerHTML='1%';
        }
        if(time === birdStart+ 3){
            birdPercentage.innerHTML='5%';
        }
        if(time === birdStart+ 5){
            birdPercentage.innerHTML='10%';
        }
        if(time === birdStart+ 10){
            birdPercentage.innerHTML='20%';
            birdDiv.style.backgroundColor='#ff4100';
        }
        if(time === birdStart+ 15){
            birdPercentage.innerHTML='30%';
        }
        if(time === birdStart+ 20){
            birdPercentage.innerHTML='40%';
            birdDiv.style.backgroundColor='#ffba00';
        }
        if(time === birdStart+ 25){
            birdPercentage.innerHTML='50%';
        }
        if(time === birdStart+ 30){
            birdPercentage.innerHTML='60%';
            birdDiv.style.backgroundColor='#ffe800';
        }
        if(time === birdStart+ 35){
            birdPercentage.innerHTML='70%';
        }
        if(time === birdStart+ 40){
            birdPercentage.innerHTML='80%';
            birdDiv.style.backgroundColor='#e4f801';
        }
        if(time === birdStart+ 45){
            birdPercentage.innerHTML='90%';
        }
        if(time === birdStart+ 47){
            birdPercentage.innerHTML='95%';
        }
        if(time === birdStart+ 50){
            birdPercentage.innerHTML='100%';
            birdDiv.style.backgroundColor='#50fc08';
        }
    }
}, 600);

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

function startBirds(){
    birds = true;
    birdStart = time;
    birdDiv.style.backgroundColor='rgb(255,0,0)';
    birdPercentage.innerHTML='0%'
}
birdButton.addEventListener('click',startBirds);

//making the timers appear/disappear
//showhide function with checkbox div arg
//html onclick on checkboxes calls showhide function and inputs the div according to the checkbox
//checkbox id, timer div id, dropdown true/false
function checkboxStatus(checkbox,div,dropdown){
    if(checkbox.checked){
        div.classList.remove('d-none');
        div.classList.add('d-flex');
        if(dropdown){
            if(checkbox === treeCheckbox){
                treeDropdownDiv.classList.remove('d-none');
                treeDropdownDiv.classList.add('d-flex');
                console.log('has dropdown')
            } else if(checkbox === fruitTreeCheckbox){
                fruitTreeDropdownDiv.classList.remove('d-none');
                fruitTreeDropdownDiv.classList.add('d-flex');
                console.log('has dropdown')
            }
        }
    } else if(!checkbox.checked) {
        div.classList.remove('d-flex');
        div.classList.add('d-none');
        if(dropdown){
            if(checkbox === treeCheckbox){
                treeDropdownDiv.classList.remove('d-flex');
                treeDropdownDiv.classList.add('d-none');
                console.log('has dropdown off')
            } else if(checkbox === fruitTreeCheckbox){
                fruitTreeDropdownDiv.classList.remove('d-flex');
                fruitTreeDropdownDiv.classList.add('d-none');
                console.log('has dropdown off')
            }
        }
    }
}
//function for changing the inner text of the dropdown button 
function treeDropdownSelect(tree){}
//onpageload function to check the previously set status of checkboxes and hide timers accordingly
function checkboxCheck(){
    checkboxStatus(seaweedCheckbox,seaweedDiv,false);
    checkboxStatus(birdCheckbox,birdDiv,false);
    checkboxStatus(herbCheckbox,herbDiv,false);
    checkboxStatus(treeCheckbox,treeDiv,true);
    checkboxStatus(fruitTreeCheckbox,fruitTreeDiv,true);
}