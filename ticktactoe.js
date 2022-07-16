'use strict';

let ttt = 'X'
let score = 0
let scoreo = 0;
const winnerBoard = document.querySelector('.winnerboard');

const emptyBox = () => {
    b1.innerHTML = '';
    b2.innerHTML = '';
    b3.innerHTML = '';
    b4.innerHTML = '';
    b5.innerHTML = '';
    b6.innerHTML = '';
    b7.innerHTML = '';
    b8.innerHTML = '';
    b9.innerHTML = '';
}

const checktiexo = () => {

    let box1 = b1.innerHTML;
    let box2 = b2.innerHTML;
    let box3 = b3.innerHTML;
    let box4 = b4.innerHTML;
    let box5 = b5.innerHTML;
    let box6 = b6.innerHTML;
    let box7 = b7.innerHTML;
    let box8 = b8.innerHTML;
    let box9 = b9.innerHTML;
    console.log(box1, box2, box3)

    if (box1 == 'O' && box2 == 'O' && box3 == 'X' && box4 == 'X' && box5 == 'X' && box6 == 'O' && box7 == 'O' && box8 == 'X' && box9 == 'X') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);


    } else if (box1 == 'X' && box2 == 'X' && box3 == 'O' && box4 == 'O' && box5 == 'O' && box6 == 'X' && box7 == 'X' && box8 == 'O' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);

    } else if (box1 == 'X' && box2 == 'O' && box3 == 'X' && box4 == 'O' && box5 == 'X' && box6 == 'X' && box7 == 'O' && box8 == 'X' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);

    } else if (box1 == 'O' && box2 == 'X' && box3 == 'O' && box4 == 'X' && box5 == 'O' && box6 == 'X' && box7 == 'X' && box8 == 'O' && box9 == 'X') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'X' && box2 == 'O' && box3 == 'X' && box4 == 'X' && box5 == 'O' && box6 == 'X' && box7 == 'O' && box8 == 'X' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'O' && box2 == 'X' && box3 == 'O' && box4 == 'X' && box5 == 'O' && box6 == 'O' && box7 == 'X' && box8 == 'O' && box9 == 'X') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'X' && box2 == 'X' && box3 == 'O' && box4 == 'O' && box5 == 'O' && box6 == 'X' && box7 == 'X' && box8 == 'O' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'X' && box2 == 'O' && box3 == 'O' && box4 == 'O' && box5 == 'X' && box6 == 'X' && box7 == 'O' && box8 == 'X' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'O' && box2 == 'O' && box3 == 'X' && box4 == 'X' && box5 == 'X' && box6 == 'O' && box7 == 'O' && box8 == 'O' && box9 == 'X') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'O' && box2 == 'X' && box3 == 'X' && box4 == 'X' && box5 == 'O' && box6 == 'O' && box7 == 'X' && box8 == 'O' && box9 == 'X') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'X' && box2 == 'O' && box3 == 'X' && box4 == 'O' && box5 == 'X' && box6 == 'O' && box7 == 'O' && box8 == 'X' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);

    } else if (box1 == 'X' && box2 == 'O' && box3 == 'X' && box4 == 'x' && box5 == 'O' && box6 == 'X' && box7 == 'O' && box8 == 'X' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'O' && box2 == 'X' && box3 == 'O' && box4 == 'O' && box5 == 'X' && box6 == 'O' && box7 == 'X' && box8 == 'O' && box9 == 'X') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'X' && box2 == 'O' && box3 == 'X' && box4 == 'X' && box5 == 'O' && box6 == 'O' && box7 == 'O' && box8 == 'X' && box9 == 'X') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    } else if (box1 == 'O' && box2 == 'X' && box3 == 'O' && box4 == 'O' && box5 == 'X' && box6 == 'X' && box7 == 'X' && box8 == 'O' && box9 == 'O') {
        winnerBoard.classList.remove('winnerboardNone');
        tex.innerHTML = `IT'S A TIE`
        setTimeout(() => {
            winnerBoard.classList.add('winnerboardNone')
            emptyBox();
        }, 5000);
    }


}




const box = (e) => {

    if (ttt == 'X' && e.target.innerHTML == '') {
        e.target.innerHTML = `${ttt}`;
        ttt = 'O'
        console.log(ttt)
        if (b1.innerHTML == 'X' && b2.innerHTML == 'X' && b3.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b4.innerHTML == 'X' && b5.innerHTML == 'X' && b6.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b7.innerHTML == 'X' && b8.innerHTML == 'X' && b9.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b1.innerHTML == 'X' && b4.innerHTML == 'X' && b7.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b2.innerHTML == 'X' && b5.innerHTML == 'X' && b8.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b3.innerHTML == 'X' && b6.innerHTML == 'X' && b9.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b1.innerHTML == 'X' && b5.innerHTML == 'X' && b9.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b3.innerHTML == 'X' && b5.innerHTML == 'X' && b7.innerHTML == 'X') {
            score++
            scoreboardX.innerHTML = score;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'X WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        }


    } else if (e.target.innerHTML == '') {
        e.target.innerHTML = `${ttt}`
        ttt = 'X'
        if (b1.innerHTML == 'O' && b2.innerHTML == 'O' && b3.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b4.innerHTML == 'O' && b5.innerHTML == 'O' && b6.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b7.innerHTML == 'O' && b8.innerHTML == 'O' && b9.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b1.innerHTML == 'O' && b4.innerHTML == 'O' && b7.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b2.innerHTML == 'O' && b5.innerHTML == 'O' && b8.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b3.innerHTML == 'O' && b6.innerHTML == 'O' && b9.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b1.innerHTML == 'O' && b5.innerHTML == 'O' && b9.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
            }, 5000);
        } else if (b3.innerHTML == 'O' && b5.innerHTML == 'O' && b7.innerHTML == 'O') {
            scoreo++
            scoreboardO.innerHTML = scoreo;
            winnerBoard.classList.remove('winnerboardNone');
            i.play()
            tex.innerHTML = 'O WINS'
            setTimeout(() => {
                winnerBoard.classList.add('winnerboardNone')
                emptyBox();
                i.pause()
            }, 5000);
        }


    }
    checktiexo()

    let o = true

}

const exit = () => {
    location.href = 'index.html'
}
const restart = () => {
    emptyBox()
    score = 0;
    scoreo = 0;
    scoreboardX.innerHTML = score;
    scoreboardO.innerHTML = scoreo;
}

