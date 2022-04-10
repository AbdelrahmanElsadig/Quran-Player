const path = {
    join(...args){
        let res = ``;
        for (let s of arguments){
            res += s
        }
        return res
    }
}
const BASE = `../quran/`;
path.join(BASE,`Surat_Al-'Alaq.mp3`)


const surahs = [
    {
        id: 0,
        name: `Surat Al-'Alaq`,
        number: 96,
        duration: '1:10',
        reciter: `Abdur-Rahman as-Sudais`,
        url: path.join(BASE,`Surat_`,`Al-'Alaq.mp3`)
    },
    {
        id: 1,
        name: `Surat Al-'Asr`,
        number: 103,
        duration: '0:25',
        reciter: `Abdur-Rahman as-Sudais`,
        url: path.join(BASE,`Surat_`,`Al-'Asr.mp3`)
    },
    {
        id: 2,
        name: `Surat Al-Mulk`,
        number: 67,
        duration: '5:57',
        reciter: `Abdur-Rahman as-Sudais`,
        url: path.join(BASE,`Surat_`,`Al-Mulk.mp3`)
    },
    {
        id: 3,
        name: `Surat Al-Muzzammil`,
        number: 72,
        duration: '3:23',
        reciter: `Abdur-Rahman as-Sudais`,
        url: path.join(BASE,`Surat_`,`Al-Muzzammil.mp3`)
    },
    {
        id: 4,
        name: `Surat Al-Qalam`,
        number: 68,
        duration: '5:40',
        reciter: `Abdur-Rahman as-Sudais`,
        url: path.join(BASE,`Surat_`,`Al-Qalam.mp3`)
    },
    {
        id: 5,
        name: `Surat Al-Qiyamah`,
        number: 75,
        duration: '2:40',
        reciter: `Abdur-Rahman as-Sudais`,
        url: path.join(BASE,`Surat_`,`Al-Qiyamah.mp3`)
    }
]

function create_surahs() {
    surahs.forEach(surah => {
        let container = document.createElement('div');
        container.classList.add('surah');
        container.setAttribute('data-id',surah.id);
        container.innerHTML = `<img class="play-btn" src="./images/play.svg" alt="">
        <div class="info">
            <h3 class="surah-name">${surah.name} (${surah.number})</h3>
            <p class="reciter">${surah.reciter}</p>
        </div>
        <p class="duration">${surah.duration}</p>`;
        document.querySelector('.surahs').appendChild(container)
    })
}

export {surahs, create_surahs}