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
  for (let i = 0; i < size; i++) {
    let row = []
    for (let j = 0; j < size; j++) {
      let val = flat[i * size + j]
      row.push(val)
      if (val !== '') randoms.push(val)
    }
    grid.push(row)
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
    return (invCount + rowFromBottom) % 2 === 1 
  }
}
