let who = ['¡Un Alien prófugo de la prisión que está a la vuelta de mi casa','¡Mi polola','¡Un demonio que había exorcisado la semanana pasada volvió buscando venganza y','¡La vecina', '¡Mi gato', '¡Un agente de la CIA', '¡Tom Holland'];
let what = ['reescribió','cambió','borró','publicó', 'filtró'];
let when = ['anoche mientras me convertí en licántropo!','cuando salí a comprar una energética!','mientras practicaba yoga!'];

function excuseGenerator(who, what, when){
    var numWho = Math.floor(Math.random() * who.length);
    var numWhat = Math.floor(Math.random() * what.length);
    var numWhen = Math.floor(Math.random() * when.length);
    return who[numWho] + " " + what[numWhat] + " " + "mi código" + " " + when[numWhen];
}

function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}

window.onload = onLoad;