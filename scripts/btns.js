import {
    Howler,
    Howl
} from "howler";
import { urls } from "./surahs";
import { get_volume } from "./volume_bar";

var loader = new Howl({
    src: urls,
    volume: get_volume()
})

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
                audio = new Howl({
                src :[surahs[surah.dataset.id].url],
                volume: get_volume(),
                onend: () => {
                    if(!surah.nextElementSibling) {
                        deactivate(surah) 
                        return 
                    }
                    surah.nextElementSibling.querySelector('.play-btn').click()
                }
            })
            
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
    create_btn_events, audio
}

