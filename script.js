import { songs } from './utils/modules.js'

onload = function () {
    let main = this.document.createElement('main');
    let br = this.document.createElement('br');
    let h2 = this.document.createElement('h2');
    let p = this.document.createElement('p');

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key])
        }
    }

    Element.prototype.setAttributes = function (attrs) {
        for (var idx in attrs) {
            if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
                for (var prop in attrs[idx]) { this.style[prop] = attrs[idx][prop]; }
            } else if (idx === 'html') {
                this.innerHTML = attrs[idx];
            } else {
                this.setAttribute(idx, attrs[idx]);
            }
        }
    };

    let h2MainContent = `“I find pieces of you in every song I listen to”`;
    let pMainContent = `Para ser direto ao ponto (você sabe que eu enrolo bastante), dedico 
    essa playlist inteiramente à você, fe, com todo o amor e carinho do mundo.`

    this.document.body.appendChild(main);
    main.appendChild(h2);
    h2.innerHTML = h2MainContent;
    main.appendChild(p);
    p.innerHTML = pMainContent;

    songs.forEach(function (song) {
        let div = document.createElement('div');
        let altDiv = document.createElement('div');
        let altA = document.createElement('a');
        let alth2 = document.createElement('h2');
        let altp = document.createElement('p');
        let img = document.createElement('img');
        let a = document.createElement('a');

        main.appendChild(br);
        main.appendChild(div);
        div.setAttribute('class', 'playlist-song');
        div.appendChild(a);
        setAttributes(a, { 'href': song.link, 'target': '_blank' });
        a.appendChild(img);
        img.setAttribute('src', song.album);
        div.appendChild(altDiv);
        altDiv.setAttribute('class', 'playlist-song-text');
        altDiv.appendChild(altA);
        setAttributes(altA, { 'href': song.lyrics, 'target': '_blank' });
        altA.appendChild(alth2);
        alth2.innerHTML = song.name;
        altDiv.appendChild(altp);
        altp.innerHTML = song.phrase;
    })
}
