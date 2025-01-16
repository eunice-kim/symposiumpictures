const homeCircle = document.getElementById('home-circle');
const infoCircle = document.getElementById('info-circle');
const infoContainer = document.getElementById('info-container');
const info = document.getElementById('info');

homeCircle.addEventListener("click", showInfo);
infoCircle.addEventListener("click", hideInfo);

function showInfo() {
  console.log('showInfo');
  infoContainer.style.display="flex";
  setTimeout(function() {
    infoContainer.style.opacity=1;
    setTimeout(function() {
      info.style.opacity=1;
    },500);
  },50);
}

function hideInfo() {
  console.log('hideInfo');
  info.style.opacity=0;
  setTimeout(function() {
      infoContainer.style.opacity=0;
      setTimeout(function() {
        infoContainer.style.display="none";
      },1000);
  },1000);
}
