import { Audios } from "./audios.js"; 
import { FillGrid } from "./grid.js";
import { Puzzlelogic } from "./puzzle.js";
import { update } from "./update.js";
    let {audio , move} = Audios()
    document.getElementById('play').setAttribute('disabled', 'true')
    document.getElementById('puzzlecount').addEventListener("change",()=>{
        document.getElementById('play').removeAttribute('disabled')
    })
    
    document.getElementById('play').addEventListener('click', () => {
        audio.play()
        let howmuch = parseInt(document.getElementById('puzzlecount').value)
        if (![3, 4, 5, 6].includes(howmuch))
          return console.log("invalid size!");
          
        document.getElementById('puzzlecount').remove()
        document.getElementById('play').remove()
        document.querySelector('.info-card').remove()
        let randoms = []
        let grid = []
        FillGrid(grid,randoms,howmuch)
        const puzzle = document.getElementById('puzzle')
        const playMoveSound = () => {
          const sound = move.cloneNode() 
          sound.play()
        }
        Puzzlelogic(puzzle,grid,howmuch,playMoveSound)
        update(grid,howmuch)
        
      })