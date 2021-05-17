//declaring variables
const $startBtn = document.querySelector(".startBtn button");
const $infoBox = document.querySelector(".infoBox");
const $quitBtn = $infoBox.querySelector(".quit");
const $continue = $infoBox.querySelector(".continue");
const $quizBox = document.querySelector(".quizBox");


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
    $infoBox.classList.remove("activeInfo");
    $quizBox.classList.add("activeInfo");
    showQuestion(0)
}

let queCount = 0;

function showQuestion(index){
    const $queText = document.querySelector(".queText");
    const $optionList = document.querySelector(".optionList");
    let queTag = '<span>'+ questions[index].question +'</span>';
    let optionTag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[3] +'<span></span></div>'

    $queText.innerHTML = queTag;
    $optionList.innerHTML = optionTag;
}