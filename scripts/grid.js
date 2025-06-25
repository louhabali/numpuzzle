export function FillGrid(grid, randoms, size) {
  let nums = Array.from({ length: size * size - 1 }, (_, i) => i + 1)
  let isSolvable = false
  let flat = []

  while (!isSolvable) {
    nums.sort(() => Math.random() - 0.5)
    flat = [...nums, '']

    if (isPuzzleSolvable(flat, size)) {
      isSolvable = true
    }
  }
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

function isPuzzleSolvable(tiles, size) {
  let invCount = 0
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] !== '' && tiles[j] !== '' && tiles[i] > tiles[j]) {
        invCount++
      }
    }
  }

  if (size % 2 !== 0) {
    return invCount % 2 === 0 
  } else {
    let blankRow = Math.floor(tiles.indexOf('') / size)
    let rowFromBottom = size - blankRow
    return (invCount + rowFromBottom) % 2 === 0
  }
}
