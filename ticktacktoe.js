'use strict'
let playit = () => {
    mu.play()
}



let m
let x = 'X';
let oscore = 0;
let xscore = 0
let xscorecount = document.querySelector('.xscore')
let oscorecount = document.querySelector('.oscore')
let emptyDiv = (empty) => {
    b1.innerHTML = empty;
    b2.innerHTML = empty;
    b3.innerHTML = empty;
    b4.innerHTML = empty;
    b5.innerHTML = empty;
    b6.innerHTML = empty;
    b7.innerHTML = empty;
    b8.innerHTML = empty;
    b9.innerHTML = empty
}
const rrr = (e) => {
    if (x == 'X' && e.target.innerText == "") {
        e.target.innerText = `${x}`
        x = 'O';
        e.target.style.color = '#a52a72';
        if (b1.innerHTML == "X" && b2.innerHTML == "X" && b3.innerHTML == "X") {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b4.innerHTML == "X" && b5.innerHTML == "X" && b6.innerHTML == "X") {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)

        } else if (b7.innerHTML == "X" && b8.innerHTML == "X" && b9.innerHTML == "X") {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b1.innerHTML == "X" && b5.innerHTML == "X" && b9.innerHTML == "X") {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)

        } else if (b2.innerHTML == "X" && b5.innerHTML == "X" && b8.innerHTML == "X") {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)

        } else if (b3.innerHTML == 'X' && b5.innerHTML == 'X' && b7.innerHTML == 'X') {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        }
        else if (b1.innerHTML == "X" && b4.innerHTML == "X" && b7.innerHTML == "X") {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b3.innerHTML == 'X' && b6.innerHTML == 'X' && b9.innerHTML == 'X') {
            xscore++
            xscorecount.textContent = xscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        }

    } else if (e.target.innerText == '') {
        e.target.style.color = '#00ccff';
        e.target.innerText = `${x}`
        x = 'X';
        if (b1.innerHTML == "O" && b2.innerHTML == "O" && b3.innerHTML == "O") {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b4.innerHTML == "O" && b5.innerHTML == "O" && b6.innerHTML == "O") {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)

        } else if (b7.innerHTML == "O" && b8.innerHTML == "O" && b9.innerHTML == "O") {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b1.innerHTML == "O" && b5.innerHTML == "O" && b9.innerHTML == "O") {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b3.innerHTML == 'O' && b5.innerHTML == 'O' && b7.innerHTML == 'O') {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b2.innerHTML == "O" && b5.innerHTML == "O" && b8.innerHTML == "O") {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        }
        else if (b1.innerHTML == "O" && b4.innerHTML == "O" && b7.innerHTML == "O") {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        } else if (b3.innerHTML == 'O' && b6.innerHTML == 'O' && b9.innerHTML == 'O') {
            oscore++
            oscorecount.textContent = oscore;
            setTimeout(() => {
                emptyDiv("")
            }, 200)
        }



    }

    if (oscore == 5) {
        t.innerHTML = 'O WON'
        setTimeout(() => {
            emptyDiv("")
        }, 300)
    } else if (xscore == 5) {
        t.innerHTML = 'X WON'
        setTimeout(() => {
            emptyDiv("")
        }, 300)
    }



}