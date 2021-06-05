const dino = document.querySelector(".dino")
const background = document.querySelector('.background')

let position = 0;
var IsJumping = false;


function handleKeyUp(event) {
    if (event.keyCode === 32) {
      if(!IsJumping)
        jump()
    }
}

function jump() {
  IsJumping = true;

  let upInterval = setInterval(() => {
    if(position >= 180) {

      clearInterval(upInterval)

      let DescerInterval = setInterval(() => {
        if(position <= 0) {
          clearInterval(DescerInterval)
          IsJumping = false;

        } else {
          position -= 10
          dino.style.bottom = position + 'px';

          }
        }, 15.5);

    } else {
      position += 25;
      dino.style.bottom = position + 'px';

    }
  }, 20);
}
 
function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 10000

  cactus.classList.add('cactus')
  cactus.style.left = cactusPosition + 'px';
  background.appendChild(cactus)

  let animationLeft = setInterval(() => {
    if(cactusPosition < -60) {
      clearInterval(animationLeft)
      background.removeChild(cactus)
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {

      clearInterval(animationLeft)
      document.body.innerHTML = `<h1 class="game-over"> Fim do Jogo </h1>`;
      console.log("passei no dino")

    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }

  }, 20);

  setTimeout(createCactus, Math.random() * 6000);
}

createCactus()

document.addEventListener('keyup', handleKeyUp)

document.addEventListener('keyup', function(e){
  if(e.keyCode === 32){
    createCactus()
    div.classList.remove('game-over') 
  }
});

