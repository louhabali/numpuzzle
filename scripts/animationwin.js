export function showWinAnimation() {
          const tiles = document.querySelectorAll('.tile')
          tiles.forEach(tile => {
            if (tile.classList.contains('empty')) return
            tile.classList.add('win-effect')
          })
          setTimeout(() => {
            tiles.forEach(tile => tile.classList.remove('win-effect'))
          }, 3000)
        }