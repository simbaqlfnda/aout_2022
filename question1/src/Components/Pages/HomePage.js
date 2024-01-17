// pas oublier de export
import lieux from "../../utils/places";
import { clearPage } from '../../utils/render';

const lieu = lieux;

const HomePage = () => {
  clearPage();
  renderHome();
  
};

function renderHome(){
  const main = document.querySelector('main');
  main.innerHTML = `

  <h1>Places to visit !</h1>
  `;

  lieu.forEach((endroit) => {
    main.innerHTML += `<h1>${endroit.name}</h1>`;
  });

}

export default HomePage;
