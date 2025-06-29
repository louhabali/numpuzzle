import {
  Audios
} from "./audios.js";
import {
  FillGrid
} from "./grid.js";
import {
  Puzzlelogic
} from "./puzzle.js";
import {
  update
} from "./update.js";
let {
  audio,
  move
} = Audios()
document.getElementById('play').setAttribute('disabled', 'true')
document.getElementById('puzzlecount').addEventListener("change", () => {
  document.getElementById('play').removeAttribute('disabled')
})
let musicOn = false
let soundOn = false

document.getElementById('toggle-music').addEventListener('click', () => {
  musicOn = !musicOn
  if (musicOn) {
    audio.play()
    document.getElementById('toggle-music').textContent = '🎵 Music: On'
  } else {
    audio.pause()
    document.getElementById('toggle-music').textContent = '🔇 Music: Off'
  }
})

document.getElementById('toggle-sound').addEventListener('click', () => {
  soundOn = !soundOn
  if (soundOn) {
    document.getElementById('toggle-sound').textContent = '🔊 Sound: On'
  } else {
    move.pause()
    document.getElementById('toggle-sound').textContent = '🔈 Sound: Off'
  }
})

function playMoveSound() {
  if (soundOn) {
    move.currentTime = 0
    move.play()
  }
}
let countdown
let timeLeft = 0
document.getElementById('play').addEventListener('click', () => {
  let howmuch = parseInt(document.getElementById('puzzlecount').value)
  clearInterval(countdown)
  timeLeft = howmuch * 20
  updateTimerDisplay()
  countdown = setInterval(() => {
    timeLeft--
    updateTimerDisplay()
    if (timeLeft <= 0) {
      clearInterval(countdown)
      onLose()
    }
  }, 1000)

  document.getElementById('timer').style.display = 'block'
  document.getElementById('lose-message').style.display = 'none'
  if (![3, 4, 5, 6].includes(howmuch))
    return console.log("invalid size!");

  document.getElementById('puzzlecount').remove()
  document.getElementById('play').remove()
  document.querySelector('.info-card').remove()
  let randoms = []
  let grid = []
  FillGrid(grid, randoms, howmuch)
  const puzzle = document.getElementById('puzzle')
  Puzzlelogic(puzzle, grid, howmuch, playMoveSound)
  update(grid, howmuch, countdown)

})

function updateTimerDisplay() {
  const timer = document.getElementById('timer')
  if (timer) {
    timer.textContent = `⏱ Time Left: ${timeLeft}s`

  }
}
document.getElementById('play-again-win').addEventListener('click', () => {
  location.reload()
})

function onLose() {
  document.getElementById('timer').style.display = 'none'
  document.getElementById('toggle-music').style.display = 'none'
  document.getElementById('toggle-sound').style.display = 'none'
  document.getElementById('lose-message').style.display = 'block'
  document.getElementById('puzzle').style.display = 'none'
}
document.getElementById('play-again').addEventListener('click', () => {
  location.reload()
})