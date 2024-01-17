// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import lieux from "../../utils/places";

const differentLieu = lieux;


// Recherchez l'objet ayant l'ID 3
const lieuAvecID3 = differentLieu.find((lieu) => lieu.id === 3);

let indice = -1; // Initialisez l'indice à -1

if (lieuAvecID3) {
  // Si un objet avec ID 3 a été trouvé, obtenez son indice dans le tableau
  indice = differentLieu.indexOf(lieuAvecID3);
}

const PhotoPage = () => {
  // pas oublier de le mettre
  clearPage();
  renderPhoto();
};

function renderPhoto() {
  const main = document.querySelector('main');
  main.innerHTML = `
    <img src="${differentLieu[indice].image}" alt="Image du lieu">
    <p>${differentLieu[indice].name}<br>
    <input type= "button" id = "precedent" value = "precedent">
    <input type= "button" id = "suivant" value = "suivant">
  `;


    const buttonPrecedent = document.getElementById('precedent');
    buttonPrecedent.addEventListener('click',clickPrecedent);
  
    const buttonSuivant = document.getElementById('suivant');
    buttonSuivant.addEventListener('click',clickSuivant);

    if(indice === differentLieu.length-2){
      buttonSuivant.disabled = true;
    }

    if(indice === 0){
      buttonPrecedent.disabled = true;
    }

 
}

function clickPrecedent(){
  if(indice > 0){
    indice -= 1;
    renderPhoto();
  }
 
}

function clickSuivant(){

  if(indice < differentLieu.length){
    indice += 1;
    renderPhoto();
  }
}

export default PhotoPage;
