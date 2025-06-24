import { checkWin } from "./checkwin.js";
import { showWinAnimation } from "./animationwin.js";
export function update(grid,size) {
          const allTiles = document.querySelectorAll('.tile')
          allTiles.forEach(tile => {
            let r = parseInt(tile.dataset.row)
            let c = parseInt(tile.dataset.col)
            let val = grid[r][c]
            tile.textContent = val
            tile.className = val === '' ? 'tile empty' : 'tile'
          })
          if (checkWin(grid,size)) {
            setTimeout(() => showWinAnimation(), 500)
            setTimeout(() => window.location.reload(), 3500)
          }
        }