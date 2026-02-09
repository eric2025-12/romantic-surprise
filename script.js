

// Start music after first click (mobile restriction)
document.body.addEventListener('click', function(){
document.getElementById('music').play();
},{once:true});


const flower = document.getElementById('flower');
const text = document.getElementById('flowerText');
const btn = document.getElementById('enterBtn');
const lettersSection = document.getElementById('lettersSection');
const letters = document.querySelector('.letters');


flower.addEventListener('click', ()=>{
flower.classList.add('open');
text.style.display='block';
btn.style.display='inline-block';
});


btn.addEventListener('click', ()=>{
lettersSection.style.display='flex';
letters.style.display='flex';
window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
});


function toggleMessage(el){
const msg = el.querySelector('.message');
msg.style.display = msg.style.display === 'block' ? 'none':'block';
}