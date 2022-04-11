import {audio} from './btns.js'

const volume_bar = () => {
    const bar = document.querySelector('.volume-slider');
    const unused_bar = document.querySelector('.unused-bar');
    const btn = document.querySelector('.slider-btn');
    let is_sliding = false;

    btn.addEventListener('mousedown', (e) => {
        btn.classList.add('grabbing');
        let rect = bar.getBoundingClientRect();
        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :
            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;
        btn.style.left = progress + '%';
        is_sliding = true;
    })

    btn.addEventListener('mousemove', (e) => {
        if (!is_sliding) return;
        let rect = bar.getBoundingClientRect();
        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :
            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;
        btn.style.left = progress + '%';
        unused_bar.style.width = 100 - progress + '%';
        if (!audio) return;
        audio.volume(get_volume())
    });

    btn.addEventListener('mouseup', (e) => {
        btn.classList.remove('grabbing');
        if (!is_sliding) return;
        let rect = bar.getBoundingClientRect();
        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :
            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;
        btn.style.left = progress + '%';
        unused_bar.style.width = 100 - progress + '%';
        if (!audio) return;
        audio.volume(get_volume())
    });

    bar.addEventListener('click', e => {     
        if(is_sliding) {
            is_sliding = false;
            return
        } ;
        let rect = bar.getBoundingClientRect();
        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :
            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;
        btn.style.left = progress + '%';
        unused_bar.style.width = 100 - progress + '%';
        if (!audio) return;
        audio.volume(get_volume())
    });


}


function get_volume() {
    const bar = document.querySelector('.volume-slider');
    const btn = document.querySelector('.slider-btn');
    let bar_rect = bar.getBoundingClientRect();
    let btn_rect = btn.getBoundingClientRect();
    let btn_rect_x = btn_rect.x + (btn_rect.width /2) >= bar_rect.x ? 
    btn_rect.x + (btn_rect.width /2): bar_rect.x
    let volume = (btn_rect_x - bar_rect.x) / bar_rect.width;
    return volume
}

export {volume_bar,get_volume}