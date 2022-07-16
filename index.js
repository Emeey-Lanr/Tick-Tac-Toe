const text = document.querySelector('.text');
const btn = document.querySelector('.btnplayit')
const bodyHousing = document.querySelector('.body');
const playmusic = document.querySelector('#playsong');

setTimeout(() => {
    text.classList.remove('textNone')
}, 2000)
setTimeout(() => {
    btn.classList.remove('btnplayNone')
    bodyHousing.style.paddingBottom = '60px'

}, 4000)
btn.addEventListener('click', () => {
    playmusic.play();
    location.href = 'ticktactoe.html'
})

