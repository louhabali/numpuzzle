export function Audios() {
    const audio = new Audio('./sounds/music.mp3')
    audio.loop = true
    audio.volume = 0.1
    audio.preload = 'auto'
    const move = new Audio('./sounds/move.mp3')
    move.volume = 0.5
    return {audio , move}
}