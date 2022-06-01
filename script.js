import { songs } from './utils/modules.js'
import { bonus } from './utils/modules.js'
import { bonus_song } from './utils/modules.js'

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


    const header = document.getElementById('header-text');
    const button = document.createElement('button');
    const playlistA = document.createElement('a');

    header.appendChild(playlistA);
    setAttributes(playlistA, {'href': 'https://www.youtube.com/playlist?list=PLbxlRkeAiJD4Y31i_JpqVe3L419ph_5NT', 'target': '_blank'});
    playlistA.appendChild(button);
    setAttributes(button, {'type' : 'button', 'id': button});
    button.innerHTML = 'PLAY';

    
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

    const article = this.document.createElement('article');
    const bonusButton = this.document.createElement('button')
    const bonusBr = this.document.createElement('br');
    const bonusDivButton = this.document.createElement('div');
    this.document.body.appendChild(article);
    article.appendChild(h2);
    h2.innerHTML = `Música Bônus`;
    h2.style.textAlign = "center";
    article.appendChild(p);
    p.innerHTML = bonus.bonustext;
    article.appendChild(bonusDivButton);
    bonusDivButton.setAttribute('class', 'div-button')
    bonusDivButton.appendChild(bonusButton);
    setAttributes(bonusButton, {'type' : 'button', 'id': 'bonus-button'});
    bonusButton.innerHTML = 'Clique aqui :)';
    this.document.body.appendChild(bonusBr);

    
    
    this.document.getElementById('bonus-button').addEventListener('click', function(){
        
        bonus_song.forEach(function (song) {
            let div = document.createElement('div');
            let altDiv = document.createElement('div');
            let altA = document.createElement('a');
            let alth2 = document.createElement('h2');
            let altp = document.createElement('p');
            let img = document.createElement('img');
            let a = document.createElement('a');
            let bonusTitle = document.createElement('h2');
            article.appendChild(br);
            article.appendChild(div);
            div.setAttribute('class', 'playlist-song');
            div.appendChild(a);
            a.appendChild(img);
            img.setAttribute('src', song.album);
            div.appendChild(altDiv);
            altDiv.setAttribute('class', 'playlist-song-text');
            altDiv.appendChild(bonusTitle);
            bonusTitle.innerHTML = `Sua voz`;
            altA.appendChild(alth2);
            alth2.innerHTML = song.name;
            altDiv.appendChild(altp);
            altp.innerHTML = song.phrase;
            
            a.addEventListener('click', () =>{
                alert('Igual a sua voz, simplesmente não há nada igual.');
            })
            
            bonusTitle.addEventListener('click', () =>{
                alert('As letras da sua voz, indecifráveis sinais de eterno flerte.');
            })

        })
        bonusButton.remove();
    })
}