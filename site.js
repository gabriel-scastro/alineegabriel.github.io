const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const dataCasar = new Date("2025-11-08T15:00:00"); // Data e hora do casamento

function countdown() {
  const currentData = new Date();
  const totalSegundos = (dataCasar - currentData) / 1000;

  const dias = Math.floor(totalSegundos / 3600 / 24);
  const horas = Math.floor((totalSegundos / 3600) % 24);
  const minutos = Math.floor((totalSegundos / 60) % 60);
  const segundos = Math.floor(totalSegundos % 60);

  diasEl.innerHTML = dias;
  horasEl.innerHTML = formatTime(horas);
  minutosEl.innerHTML = formatTime(minutos);
  segundosEl.innerHTML = formatTime(segundos);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

// função da confirmação de presença
function abrirPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
      }
      function fecharPopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
      }

// função de lista de presente
function abrirPresente() {
    document.getElementById('presente').style.display = 'block';
    document.getElementById('overlay-b').style.display = 'block';
      }
      function fecharPresente() {
        document.getElementById('presente').style.display = 'none';
        document.getElementById('overlay-b').style.display = 'none';
      }
    // função cerimonia popup
    function abrirCerimonia(){
      document.getElementById('overlay-c').style.display = 'block';
      document.getElementById('cerimonia').style.display ='block';
  }
  function fecharCerimonia(){
      document.getElementById('overlay-c').style.display = 'none';
      document.getElementById('cerimonia').style.display ='none';
  }
    // função recepcao popup
    function abrirRecepcao(){
      document.getElementById('overlay-d').style.display = 'block';
      document.getElementById('recepcao').style.display ='block';
  }
  function fecharRecepcao(){
      document.getElementById('overlay-d').style.display = 'none';
      document.getElementById('recepcao').style.display ='none';
  }