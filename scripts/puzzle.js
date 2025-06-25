import {
  update
} from "./update.js"
export function Puzzlelogic(puzzle, grid, size, playMoveSound) {
  puzzle.innerHTML = ''
  const tiles = document.querySelectorAll('.tile')
  puzzle.style.display = 'grid'
  let ff = 80;
  if (size == 4) {
    ff = 60;
  } else if (size == 5) {
    ff = 50;
  } else if (size == 6) {
    ff = 40;
  }
  tiles.forEach(tile => {
    tile.style.width = `${ff}px`
    tile.style.height = `${ff}px`
    tile.style.fontSize = `${ff * 0.25}px`
  })
  puzzle.style.gridTemplateColumns = `repeat(${size}, ${ff}px)`
  puzzle.style.gridTemplateRows = `repeat(${size}, ${ff}px)`
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let val = grid[i][j]
      let div = document.createElement('div')
      div.className = val === '' ? 'tile empty' : 'tile'
      div.textContent = val
      div.dataset.row = i
      div.dataset.col = j

      div.addEventListener('click', function () {
        playMoveSound();
        let r = parseInt(this.dataset.row)
        let c = parseInt(this.dataset.col)

        let dirs = [
          [r - 1, c],
          [r + 1, c],
          [r, c - 1],
          [r, c + 1]
        ]

        for (let [rr, cc] of dirs) {
          if (rr >= 0 && rr < size && cc >= 0 && cc < size) {
            if (grid[rr][cc] === '') {
              ;
              [grid[r][c], grid[rr][cc]] = [grid[rr][cc], grid[r][c]]
              update(grid, size)
              return
            }
          }
        }
      })

      puzzle.appendChild(div)
    }
  }
}