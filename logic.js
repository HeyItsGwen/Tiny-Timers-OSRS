//get the timer divs
let seaweedDiv = document.getElementById('seaweed');
let herbDiv = document.getElementById('herbs');
let birdDiv = document.getElementById('birds');
let treeDiv = document.getElementById('trees');
let fruitTreeDiv = document.getElementById('fruitTrees');

//dropdown divs
let treeDropdownDiv = document.getElementById('treeDropdownDiv');
let fruitTreeDropdownDiv = document.getElementById('fruitTreeDropdownDiv');

//dropdown buttons to change text
let treeDropDown = document.getElementById('treeDropdown');
let fruitTreeDropDown = document.getElementById('fruitTreeDropdown');

//get the start buttons from the dom
let seaweedButton = document.getElementById('seaweedButton');
let herbButton = document.getElementById('herbButton');
let birdButton = document.getElementById('birdButton');
let treeButton = document.getElementById('treeButton');
let fruitTreeButton = document.getElementById('fruitTreeButton');

//get the percentage elements
let seaweedPercentage = document.getElementById('seaweedPercent');
let herbPercentage = document.getElementById('herbPercent');
let birdPercentage = document.getElementById('birdPercent');
let treePercentage = document.getElementById('treePercent');
let fruitTreePercentage = document.getElementById('fruitTreePercent');

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
let trees = false;
let fruitTrees = false;

//set variables for when in the global time the buttons were pressed
let seaweedStart = 0;
let herbStart = 0;
let birdStart = 0;
let treeStart = 0;
let fruitTreeStart = 0;

//array to store different tree growth times
//[0]oak,[1]willow,[2]maple,[3]yew,[4]magic
let treeTimes =[[[1],[8],[20],[40],[60],[80],[100],[120],[140],[160],[180],[190],[200]],
                [[1],[14],[28],[56],[84],[112],[140],[168],[196],[224],[252],[266],[280]],
                [[1],[16],[32],[64],[96],[128],[160],[192],[224],[256],[288],[304],[320]],
                [[1],[20],[40],[80],[120],[160],[200],[240],[280],[320],[360],[380],[400]],
                [[1],[24],[48],[96],[144],[192],[240],[288],[336],[384],[432],[456],[480]]];
//variable storing the selected fruit tree
let selectedTree = 0;
let selectedFruitTree = 0;
/*

FIGURE OUT TREEEEES
dropdown for tree type to set how long it lasts

2nd js file for tree/fruit tree times array?

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
    //trees check a variable that stores the selected tree, and then use that variable to access an array location to get time intervals
    //if time === treeArray[selectedTreeVariable][timeInterval]
    if(trees){
        if(time === treeTimes[selectedTree][0]){
            treePercentage.innerHTML='1%';
        }
        if(time === treeTimes[selectedTree][1]){
            treePercentage.innerHTML='5%';
        }
        if(time === treeTimes[selectedTree][2]){
            treePercentage.innerHTML='10%';
        }
        if(time === treeTimes[selectedTree][3]){
            treeDiv.style.backgroundColor='#ff4100';
            treePercentage.innerHTML='20%';
        }
        if(time === treeTimes[selectedTree][4]){
            treePercentage.innerHTML='30%';
        }
        if(time === treeTimes[selectedTree][5]){
            treeDiv.style.backgroundColor='#ffba00';
            treePercentage.innerHTML='40%';
        }
        if(time === treeTimes[selectedTree][6]){
            treePercentage.innerHTML='50%';
        }
        if(time === treeTimes[selectedTree][7]){
            treeDiv.style.backgroundColor='#ffe800';
            treePercentage.innerHTML='60%';
        }
        if(time === treeTimes[selectedTree][8]){
            treePercentage.innerHTML='70%';
        }
        if(time === treeTimes[selectedTree][9]){
            treeDiv.style.backgroundColor='#e4f801';
            treePercentage.innerHTML='80%';
        }
        if(time === treeTimes[selectedTree][10]){
            treePercentage.innerHTML='90%';
        }
        if(time === treeTimes[selectedTree][11]){
            treePercentage.innerHTML='95%';
        }
        if(time === treeTimes[selectedTree][12]){
            treeDiv.style.backgroundColor='#50fc08';
            treePercentage.innerHTML='100%';
        }
    }
    if(fruitTrees){
        if(time === fruitTreeStart+1){
            fruitTreePercentage.innerHTML='1%';
        }
        if(time === fruitTreeStart+48){
            fruitTreePercentage.innerHTML='5%';
        }
        if(time === fruitTreeStart+96){
            fruitTreePercentage.innerHTML='10%';
        }
        if(time === fruitTreeStart+192){
            fruitTreereeDiv.style.backgroundColor='#ff4100';
            fruitTreePercentage.innerHTML='20%';
        }
        if(time === fruitTreeStart+288){
            fruitTreePercentage.innerHTML='30%';
        }
        if(time === fruitTreeStart+384){
            fruitTreereeDiv.style.backgroundColor='#ffba00';
            fruitTreePercentage.innerHTML='40%';
        }
        if(time === fruitTreeStart+480){
            fruitTreePercentage.innerHTML='50%';
        }
        if(time === fruitTreeStart+576){
            fruitTreereeDiv.style.backgroundColor='#ffe800';
            fruitTreePercentage.innerHTML='60%';
        }
        if(time === fruitTreeStart+672){
            fruitTreePercentage.innerHTML='70%';
        }
        if(time === fruitTreeStart+798){
            fruitTreereeDiv.style.backgroundColor='#e4f801';
            fruitTreePercentage.innerHTML='80%';
        }
        if(time === fruitTreeStart+864){
            fruitTreePercentage.innerHTML='90%';
        }
        if(time === fruitTreeStart+912){
            fruitTreePercentage.innerHTML='95%';
        }
        if(time === fruitTreeStart+960){
            fruitTreereeDiv.style.backgroundColor='#50fc08';
            fruitTreePercentage.innerHTML='100%';
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
function startTrees(){
    trees = true;
    treeStart = time;
    treeDiv.style.backgroundColor='rgb(255,0,0)';
    treePercentage.innerHTML='0%';
}
treeButton.addEventListener('click',startTrees);
function startFruitTrees() {
    fruitTrees = true;
    fruitTreeStart = time;
    fruitTreeDiv.style.backgroundColor='rgb(255,0,0)';
    treePercentage.innerHTML='0%';
}
fruitTreeButton.addEventListener('click',startFruitTrees);

//making the timers appear/disappear
//showhide function with checkbox div arg
//html onclick on checkboxes calls showhide function and inputs the div according to the checkbox
//checkbox id, timer div id, dropdown true/false
function checkboxStatus(checkbox,div,dropdown){
    if(checkbox.checked){
        div.classList.remove('d-none');
        div.classList.add('d-flex');
        if(dropdown){
            if(checkbox){
                treeDropdownDiv.classList.remove('d-none');
                treeDropdownDiv.classList.add('d-flex');
            }
        }
    } else if(!checkbox.checked) {
        div.classList.remove('d-flex');
        div.classList.add('d-none');
        if(dropdown){
            if(checkbox){
                treeDropdownDiv.classList.remove('d-flex');
                treeDropdownDiv.classList.add('d-none');
            }
        }
    }
}
//function for changing the inner text of the dropdown button 
function treeDropdownSelect(num){
    //switch that finds what (tree) is, then changed the text of the dropdown and does something to change what the timer does
    selectedTree = num;
    if(num==0){
        treeDropDown.innerHTML = 'Oak';
    } else if(num==1) {
        treeDropDown.innerHTML = 'Willow';
    } else if(num==2) {
        treeDropDown.innerHTML = 'Maple';
    } else if(num==3) {
        treeDropDown.innerHTML = 'Yew';
    } else if(num==4) {
        treeDropDown.innerHTML = 'Magic';
    }  else {
        treeDropDown.innerHTML = 'Oak';
    }
}
//onpageload function to check the previously set status of checkboxes and hide timers accordingly
function checkboxCheck(){
    checkboxStatus(seaweedCheckbox,seaweedDiv,false);
    checkboxStatus(birdCheckbox,birdDiv,false);
    checkboxStatus(herbCheckbox,herbDiv,false);
    checkboxStatus(treeCheckbox,treeDiv,true);
    checkboxStatus(fruitTreeCheckbox,fruitTreeDiv,true);
}