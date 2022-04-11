import {
    Howler,
    Howl
} from "howler";
import { Howlers } from "./surahs";
import { get_volume } from "./volume_bar";

var audio;


function create_btn_events(surahs) {
    const playlist = [...document.querySelectorAll('.surah')];
    playlist.forEach(surah => {
        const btn = surah.querySelector('.play-btn');
        btn.addEventListener('click', () => {
            let current = document.querySelector('.surah.active');
            if (current && current.dataset.id != surah.dataset.id) deactivate(current)


            if (surah.classList.contains('active') && btn.attributes.getNamedItem('src').value == './images/pause.svg') {
                audio.pause();
                btn.setAttribute('src', './images/play.svg');
                return
            }
            if(!audio || audio._src != [surahs[surah.dataset.id].url]){
                audio = Howlers[parseInt(surahs[surah.dataset.id].id)];
            
            }
            
            btn.setAttribute('src', './images/pause.svg')
            surah.classList.add('active');
            btn.classList.add('active');
            audio.play()
        })
    })
}

function deactivate(surah){
    audio.pause()
    const btn = surah.querySelector('.play-btn');
    surah.classList.remove('active');
    btn.classList.remove('active');
    btn.setAttribute('src','./images/play.svg');
}



export {
    create_btn_events, audio,deactivate
}

