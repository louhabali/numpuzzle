import {
  checkWin
} from "./checkwin.js";
import {
  showWinAnimation
} from "./animationwin.js";
export function update(grid, size, countdown) {
  const allTiles = document.querySelectorAll('.tile')
  allTiles.forEach(tile => {
    let r = parseInt(tile.dataset.row)
    let c = parseInt(tile.dataset.col)
    let val = grid[r][c]
    tile.textContent = val
    tile.className = val === '' ? 'tile empty' : 'tile'
  })
  if (checkWin(grid, size)) {
    console.log(11);

    clearInterval(countdown)
    setTimeout(() => {
      showWinAnimation()
      document.getElementById('toggle-music').remove()
      document.getElementById('toggle-sound').remove()
      document.getElementById('timer').remove()
      setTimeout(() => {
        document.getElementById('win-message').style.display = 'block'
        document.getElementById('puzzle').remove()
      }, 3000)
    }, 500)
  }
}