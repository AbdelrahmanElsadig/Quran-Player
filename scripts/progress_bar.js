import {audio} from './btns.js'
function time_skip() {
    const bar = document.querySelector('.progress-bar');
    bar.addEventListener('click', (e) => {
        audio.seek(audio.duration() * (e.pageX / window.innerWidth))
    })
}
export {
    time_skip
}