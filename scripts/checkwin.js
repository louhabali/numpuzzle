export function checkWin(grid,size) {
          let c = 1
          for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
              if (i === size - 1 && j === size - 1) {
                if (grid[i][j] !== '') return false
              } else {
                if (grid[i][j] !== c) return false
                c++
              }
            }
          }
          return true
        }