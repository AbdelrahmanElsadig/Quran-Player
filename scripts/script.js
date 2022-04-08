import howler from 'howler'
import {surahs,create_surahs} from './surahs/surahs.js'
import {create_btn_events, audio} from './btns.js'
import { time_skip} from './progress_bar.js'
create_surahs()




create_btn_events(surahs)

setInterval(() => {
    if (!audio) return
    let loading_bar = document.querySelector('.inner-bar')
    if (audio.playing()) {
        loading_bar.style.width = (audio.seek() / audio.duration()) * 100 + '%'
    }
},300)
time_skip()


