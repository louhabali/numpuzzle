export function FillGrid (grid,randoms,size) {
    for (let i = 1; i <= size; i++) {
          let rows = []
          for (let j = 1; j <= size; j++) {
            if (i == size && j == size) {
              rows.push('')
              break
            }
            let r
            while (true) {
              r = Math.floor(Math.random() * (size * size - 1)) + 1
              if (!randoms.includes(r)) {
                randoms.push(r)
                break
              }
            }
            rows.push(r)
          }
          grid.push(rows)
        }
}