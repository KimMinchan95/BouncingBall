let ball = document.querySelector('.ball');
let info = document.querySelector('.info');
let y = 1;
let gravity = 1;

setInterval(() => {
  if (y > 420) {
    gravity = -gravity;
  }
  gravity += 1;
  y += gravity;
  ball.style.top = (y) + 'px';
  info.innerText = `Y : ${y}, G : ${gravity}`;
}, 100);