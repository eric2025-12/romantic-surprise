document.addEventListener("DOMContentLoaded", () => {

/* ---------------- LOADER ---------------- */

const loader = document.getElementById("loader");
const flowerSection = document.getElementById("flowerSection");

setTimeout(() => {
    loader.style.display = "none";
    flowerSection.classList.remove("hidden");

    // Auto bloom after reveal (cinematic feel)
    setTimeout(autoBloom, 700);

}, 2000);



/* ---------------- MUSIC ---------------- */

const music = document.getElementById("bgMusic");

// Mobile-safe play
document.body.addEventListener("click", () => {
    music.volume = 0.4;
    music.play().catch(()=>{});
}, { once:true });



/* ---------------- FLOWER ---------------- */

const flower = document.getElementById("flower");
const flowerText = document.getElementById("flowerText");
const enterBtn = document.getElementById("enterBtn");
const lettersSection = document.getElementById("lettersSection");

let bloomed = false;

function autoBloom(){

    if(bloomed) return;

    flower.classList.add("open");
    flowerText.style.display = "block";
    enterBtn.style.display = "inline-block";

    bloomed = true;
}

flower.addEventListener("click", autoBloom);



enterBtn.addEventListener("click", () => {

    lettersSection.classList.remove("hidden");

    lettersSection.scrollIntoView({
        behavior:"smooth"
    });

});



/* ---------------- LETTERS ---------------- */

const letters = document.querySelectorAll(".letter");
const final = document.querySelector(".final");

let openedCount = 0;
let typingStarted = false;

letters.forEach(letter => {

    letter.addEventListener("click", () => {

        const msg = letter.querySelector(".message");

        if(msg.style.display === "block") return;

        msg.style.display = "block";

        openedCount++;

        // subtle heart burst on each open
        burstHearts(8);

        if(openedCount === letters.length && !typingStarted){

            final.style.display = "block";

            launchConfetti();

            startTyping();

            typingStarted = true;
        }

    });

});



/* ---------------- TYPEWRITER ---------------- */

function startTyping(){

const text = "I hope this made you smile ❤️";

let i = 0;

const typing = document.getElementById("typing");

const interval = setInterval(()=>{

    typing.textContent += text[i];

    i++;

    if(i >= text.length){
        clearInterval(interval);
    }

},45);

}



/* ---------------- FLOATING HEARTS ---------------- */

// constant ambient hearts
setInterval(createHeart, 900);

function createHeart(){

const heart = document.createElement("div");

heart.className = "floating-heart";
heart.innerHTML = "❤️";

// random position
heart.style.left = Math.random()*100 + "vw";
heart.style.top = (Math.random()*100 + 20) + "vh";

// random size
heart.style.fontSize = (Math.random()*18 + 12) + "px";

// random speed
heart.style.animationDuration = (Math.random()*5 + 5) + "s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),9000);
}



// burst hearts when letter opens
function burstHearts(amount){

for(let i=0;i<amount;i++){

setTimeout(()=>createHeart(), i*120);

}

}



/* ---------------- CONFETTI ---------------- */

function launchConfetti(){

for(let i=0;i<160;i++){

const confetti = document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="10px";
confetti.style.height="10px";

confetti.style.background =
`hsl(${Math.random()*360},100%,70%)`;

confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-20px";

confetti.style.borderRadius="3px";
confetti.style.pointerEvents="none";

confetti.style.transition="transform 4s linear, opacity 4s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=
`translateY(120vh) rotate(${Math.random()*900}deg)`;

confetti.style.opacity="0";

},20);

setTimeout(()=>confetti.remove(),4000);

}

}

});
