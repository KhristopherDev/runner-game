const player = document.querySelector('.player');
const log = document.querySelector('.log');
const clouds = document.querySelector('.clouds');
const lose = document.getElementById('lose');

const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {

        player.classList.remove('jump');

    }, 1000)
}

const loop = setInterval(() => {

    const logPosition = log.offsetLeft;
    const playerPosition = window.getComputedStyle(player).bottom.replace('px', '');

    if (logPosition <= 110 && logPosition > 0 && playerPosition < 70) {

        log.style.animation = 'none';
        log.style.left = '${logPosition}px';

        player.style.animation = 'none';
        player.style.bottom = '${playerPosition}px';
        player.src = 'resources/player_neutral.gif'

        clouds.style.animation = 'none';

        clearInterval(loop);

        lose.textContent = 'Morreu!';

        const interval = setInterval(() => {
            location.reload();
            clearInterval();
        }, 1800)
    }

}, 10)

document.addEventListener('keydown', jump);
