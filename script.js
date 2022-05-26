onload = function(){
    let main = this.document.createElement('main');
    let br = this.document.createElement('br');
    let h2 = this.document.createElement('h2');
    let p = this.document.createElement('p');
    let div = this.document.createElement('div');
    let a = this.document.createElement('a');
    let img = this.document.createElement('img');
    
    function setAttributes(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key])
        }
    }

    Element.prototype.setAttributes = function (attrs) {
        for (var idx in attrs) {
            if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
                for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}
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
    
    const phrases = [
        `Bem, espere bastante músicas dessa banda (Posso falar mais tarde sobre minha história com ela, inclusive comecei a escutá-la poucos dias antes
        da gente conversar pela primeira vez.) Essa playlist em geral vai seguir uma cronologia parecida com a da sua, sim estou copiando na cara dura.
        Essa música retrata a essência de quem eu era em 2018, uma visã introspectiva minha que hoje em dia brincamos mas foi o momento em que me senti mais
        vulnerável em todos os sentidos. Essa música, tem um tom relativamente melancólico, e a primeira frase "Oh, why is your hate so addicting and I, 
        well I wonder where you've been, I don't see you often" me faz lembrar sobre essa época em que você me odiava (com todas as razões) e meu objetivo
        diante de tudo aquilo, era simplesmente te mostrar que eu não era um babaca e que eu estava ferido. Mal sabia que você seria minha "Luz". `
    ]

    const songNames = ['Wild Nothing - Shadow'];
    const songLinks = ['https://www.youtube.com/watch?v=eeb262NT7S0'];
    const songLyrics = ['https://www.azlyrics.com/lyrics/wildnothing/shadow.html']
    const songAlbum = ['https://m.media-amazon.com/images/I/81+4qvYc0nL._AC_SX425_.jpg'];

    songNames.forEach(function(_, index){

        let altDiv = this.document.createElement('div');
        let altA = this.document.createElement('a');
        let alth2 = this.document.createElement('h2');
        let altp = this.document.createElement('p');
    
        main.appendChild(br);
        main.appendChild(div);
        div.setAttribute('class', 'playlist-song');
        div.appendChild(a);
        setAttributes(a, {'href': `${songLinks[index]}`, 'target': '_blank'});
        a.appendChild(img);
        img.setAttribute('src', `${songAlbum[index]}`);
        div.appendChild(altDiv);
        altDiv.setAttribute('class', 'playlist-song-text');
        altDiv.appendChild(altA);
        setAttributes(altA, {'href': `${songLyrics[index]}`, 'target': '_blank'});
        altA.appendChild(alth2);
        alth2.innerHTML = songNames[index];
        altDiv.appendChild(altp);
        altp.innerHTML = phrases[index];
    })


    
    
    
}


