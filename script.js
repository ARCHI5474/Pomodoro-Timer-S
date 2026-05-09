let timeLeft = 1500; // 25分×60秒
let timerId = null;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

// 表示を更新する関数
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // 1桁の時に0を足す処理
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// カウントダウンの開始
startButton.addEventListener('click', () => {
    if (timerId !== null) return; // 二重起動防止

    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            alert('時間になりました。お疲れ様です。');
        }
    }, 1000);
});

// リセット
resetButton.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 1500;
    updateDisplay();
});
