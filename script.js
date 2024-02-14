const buttonYes = document.getElementById("button1");
const buttonThink = document.getElementById("button2");
const beValentineTitle = document.getElementById("title");
const gifQ = document.getElementById("gif1");
const buttonClick = document.getElementById("button3")
let audio = document.getElementById("myAudio")
const songA = document.getElementById("myAudio");
const pOfSong = document.getElementById("p");
const answerWant = document.getElementById("answerText");

let phase;

// Data
const dataArray = [];


// Control play music
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

    // Create data
    const data = {
        question: beValentineTitle.textContent, // Get question
        answer: buttonYes.textContent // Get answer
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
    // Create data
    const data = {
        question: beValentineTitle.textContent, // Get question
        answer: buttonClick.textContent // Get answer
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

    buttonClick.style.visibility = "hidden";

    // Add event listener
    buttonYes.addEventListener("click", foodie);
    buttonThink.addEventListener("click", gdt)
}

function foodie() {
    phase = "foodie";

    beValentineTitle.innerHTML = "(you can choose both UwU <3)"

    buttonYes.style.visibility = "visible";
    buttonYes.innerHTML = "Coffee Date"
    buttonYes.style.cursor = "default";

    buttonThink.innerHTML = "Just eat"
    buttonThink.disabled = true;
    buttonThink.style.visibility = "visible";
    buttonThink.style.cursor = "default";

    answerWant.style.visibility = "visible";

    buttonClick.style.visibility = "visible";

    gifQ.src = "img/gif5.gif";

    const choiceNodes = document.getElementsByClassName("choice");
    choiceNodes[0].style.visibility = "visible";
    choiceNodes[1].style.visibility = "visible";

    buttonClick.addEventListener("click", theEnd);
}

function gdt() {
    beValentineTitle.innerHTML = "I know you just want to see what happen when you click this!!!"

    buttonYes.style.visibility = "hidden";
    buttonThink.style.visibility = "hidden";
    answerWant.style.visibility = "hidden";

    gifQ.src = "img/gif7.gif";

    buttonClick.style.visibility = "visible";
    buttonClick.addEventListener("click", gdt2);
}

function gdt2() {
    phase = "gdt";

    beValentineTitle.innerHTML = "Is there anything you want? or you want keyring handmade? or something?"
    buttonClick.addEventListener("click", theEnd);
    answerWant.style.visibility = "visible";
    buttonYes.style.visibility = "hidden";
    buttonThink.style.visibility = "hidden";
    buttonClick.style.visibility = "visible";
    gifQ.src = "img/gif8.gif";
}

function theEnd() {
    beValentineTitle.innerHTML = "Thanks for being by my side <3";

    // Display input node
    const answerInput = document.getElementsByClassName("send-message")[0];
    answerInput.style.display = "inline";

    // Check phase
    if (phase === "foodie") {
        const foodieNode = document.getElementsByName("foodie");

        let foodieChoice;
        for (let i = 0; i < foodieNode.length; i++) {
            if (foodieNode[i].checked) {
                foodieChoice = foodieNode[i].value;
            }
        }

        let choiceDisplay;
        if (foodieChoice === "coffee") {
            choiceDisplay = "Coffee Date";
        } else if (foodieChoice === "eat") {
            choiceDisplay = "Just eat";
        }

        // Load choice into answer text
        answerWant.value = choiceDisplay;

        // Prevent change value
        answerWant.disabled = true;

        // Hide radio buttons
        const choiceNodes = document.getElementsByClassName("choice");
        choiceNodes[0].style.visibility = "hidden";
        choiceNodes[1].style.visibility = "hidden";
    }

    buttonYes.style.visibility = "hidden";
    buttonThink.style.visibility = "hidden";
    buttonClick.style.visibility = "hidden";
    gifQ.style.visibility = "visible"
    gifQ.src = "img/gif6.gif";

    // Change page
    const buttonSend = document.getElementById("submitQ");
    buttonSend.addEventListener("click", () => {
        // Create data
        const data = {
            question: beValentineTitle.textContent,
            answer: answerWant.value
        }
        dataArray.push(data);

        // Save processed data in local storage
        localStorage.setItem("valentineData", JSON.stringify(dataArray))

        window.location.href = "mail.html";
    })

}

buttonClick.style.cursor = "pointer";
buttonYes.style.cursor = "pointer";
buttonThink.style.cursor = "not-allowed";
buttonYes.addEventListener("click", afterYes);
buttonClick.addEventListener("click", choose)