const buttonYes = document.getElementById("button1");
const buttonThink = document.getElementById("button2");
const beValentineTitle = document.getElementById("title");
const gifQ = document.getElementById("gif1");
const buttonClick = document.getElementById("button3")
let audio = document.getElementById("myAudio")
const songA = document.getElementById("myAudio");
const pOfSong = document.getElementById("p");

// Data
const dataArray = [];


// Các hàm điều khiển âm nhạc
function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}


function afterYes() {
    playMusic();

    // Tạo data
    const data = {
        question: beValentineTitle.textContent, // Lấy câu hỏi
        answer: buttonYes.textContent
    };
    dataArray.push(data);

    beValentineTitle.innerHTML = "Thanks for saying Yes";

    gifQ.src = "img/giphy.gif";
    gifQ.style.margin = "1px;";
    buttonClick.style.visibility = "visible";
    buttonYes.style.visibility = "hidden";
    buttonThink.style.visibility = "hidden";
    songA.style.visibility = "visible";
    pOfSong.style.visibility = "visible";
}

function choose() {
    console.log(dataArray);

    // Lấy data
    const data = {
        question: beValentineTitle.textContent,
        answer: buttonClick.textContent
    }
    dataArray.push(data);

    beValentineTitle.innerHTML = "Just to let you know that...";
    gifQ.style.visibility = "hidden";
    buttonClick.innerHTML = "->";
    buttonClick.addEventListener("click", cOl);
}

function cOl() {
    beValentineTitle.innerHTML = "I love you so muchhhhhh!";
    gifQ.style.visibility = "visible";
    gifQ.src = "img/gif3.gif";
    buttonClick.addEventListener("click", gift);
}

function gift() {
    beValentineTitle.innerHTML = "What gift do you want?";
    buttonYes.innerHTML = "Food";
    buttonThink.innerHTML = "Me";
    gifQ.src = "img/gif4.gif";
    buttonThink.style.visibility = "visible";
    buttonYes.style.visibility = "visible";
    buttonYes.style.margin = "15px";
    buttonThink.style.margin = "15px"
    buttonThink.style.cursor = "pointer";
    buttonYes.addEventListener("click", foodie);
    buttonThink.addEventListener("click", gdt)
    buttonClick.style.visibility = "hidden";
}

function foodie() {
    beValentineTitle.innerHTML = "Just DM me what u want to eat, okay? (you can choose both UwU <3)"
    buttonYes.style.visibility = "visible";
    buttonYes.innerHTML = "Coffee Date"
    buttonThink.innerHTML = "Just eat"
    buttonThink.disabled = true;
    buttonThink.style.visibility = "visible";
    buttonClick.style.visibility = "visible";
    buttonClick.addEventListener("click", theEnd);
    buttonYes.style.cursor = "default";
    buttonThink.style.cursor = "default";
    gifQ.src = "img/gif5.gif";
}

function gdt() {
    beValentineTitle.innerHTML = "I know you just want to see what happen when you click this!!!"
    buttonClick.style.visibility = "visible";
    buttonYes.style.visibility = "hidden";
    buttonThink.style.visibility = "hidden";
    buttonClick.addEventListener("click", gdt2);
    gifQ.src = "img/gif7.gif";
}

function gdt2() {
    beValentineTitle.innerHTML = "Okay just DM me too okay? or you want keyring handmade? or something?"
    buttonClick.addEventListener("click", theEnd);
    buttonYes.style.visibility = "hidden";
    buttonThink.style.visibility = "hidden";
    buttonClick.style.visibility = "visible";
    gifQ.src = "img/gif8.gif";
}

function theEnd() {
    beValentineTitle.innerHTML = "Thanks for being by my side <3";
    buttonYes.style.visibility = "hidden";
    buttonThink.style.visibility = "hidden";
    buttonClick.style.visibility = "hidden";
    gifQ.style.visibility = "visible"
    gifQ.src = "img/gif6.gif";
}

buttonClick.style.cursor = "pointer";
buttonYes.style.cursor = "pointer";
buttonThink.style.cursor = "not-allowed";
buttonYes.addEventListener("click", afterYes);
buttonClick.addEventListener("click", choose)