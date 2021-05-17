//declaring variables
const $startBtn = document.querySelector(".startBtn button");
const $infoBox = document.querySelector(".infoBox");
const $quitBtn = $infoBox.querySelector(".quit");
const $continue = $infoBox.querySelector(".continue");


//Start quiz with a click
$startBtn.onclick = () =>{
    $infoBox.classList.add("activeInfo");
}

//exit quiz with a click
$quitBtn.onclick = () =>{
    $infoBox.classList.remove("activeInfo");
}

//continue to questions
$continue.onclick = () =>{
    $infoBox.classList.add("activeInfo");
}