//* Creating Random Numbers
let randomNum = Math.floor(Math.random() * 20 + 1);
let guessNum = document.getElementById('guessNum').textContent = randomNum;

//* Numbers Verification

let inputBox = document.getElementById('inputBox');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    let inputOutput = inputBox.value;
    if (inputOutput == guessNum) {
        document.getElementById('message').textContent = '🎉 Correct Number';
        document.getElementById('winImg').style.display = 'block';
        document.getElementById('hideImg').style.display = 'none';
    } else if (inputOutput > guessNum) {
        document.getElementById('message').textContent = '😎 Its High Number';
        document.getElementById('hideImg').style.backgroundImage = 'url(../IMG/high.png)';
    } else if (inputOutput < guessNum) {
        document.getElementById('message').textContent = '😒 Its Low Number';
        document.getElementById('hideImg').style.backgroundImage = 'url(../IMG/low.png)';
    }
})

//* How Much Attempt Section

let attemptNum = document.getElementById('attemptNum');
let attemptScore = 0;

submitBtn.addEventListener('click', () => {
    attemptScore++;
    attemptNum.textContent = attemptScore;
})

//* Try Again Button

let againBtn = document.getElementById('againBtn');

againBtn.addEventListener('click', () => {
    location.reload();
})

//* Footer Copyright Date

let copyDate = document.getElementById('copyDate');

copyDate.innerHTML = new Date().getFullYear();