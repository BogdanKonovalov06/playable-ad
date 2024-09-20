import logo from '../public/images/logo.png';
import hintArm from '../public/images/hint/hint-arm.png';
import hintBody from '../public/images/hint/hint-body.png';
import winStamp from '../public/images/stamps/winStamp.png';
import failStamp from '../public/images/stamps/failStamp.png';
import copyrightImage from '../public/images/copyright.png';

import { dishes } from './dishes';
import {
  attachDishClickEvent,
  plateContainer,
} from './components/plateComponent/plateComponent';
import { finalView } from './components/final/final';
import { animateFinal, restartGame } from './utils/animateFinal';
import { getFinalElements } from './components/final/finalElements';

import './style.css';

let dishIsChosen = false;

const renderGame = () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container"> 
      <div class="logo-wrapper">
        <img src="${logo}" class="logo" alt="logo" />
      </div>
  
      ${plateContainer(dishes)}
  
      <div>
        <img src='${hintArm}' id='hint-arm'/>
        <img src='${hintBody}' id='hint-body'/>
      </div>
  
      <div id="stamp-container"></div>
  
      ${finalView()} 

      <img src="${copyrightImage}" class="copyright" alt="copyright" />
    </div>
  `;

  attachDishClickEvent(handleGameResult);
};

const handleGameResult = (result: 'win' | 'lose') => {
  const stampContainer = document.getElementById('stamp-container');
  const finalContainer = document.querySelector('.final');

  if (!stampContainer || !finalContainer) return;

  setTimeout(() => {
    if (result === 'win') {
      stampContainer.innerHTML = `<img src="${winStamp}" alt="Win Stamp" class="stamp" />`;
    } else {
      stampContainer.innerHTML = `<img src="${failStamp}" alt="Lose Stamp" class="stamp" />`;
    }

    setTimeout(() => {
      stampContainer.classList.add('show');
    }, 500);
  }, 1000);

  const finalElements = getFinalElements();
  animateFinal(finalElements, resetGame);
};

const resetGame = () => {
  dishIsChosen = false;
  const finalElements = getFinalElements();
  restartGame(finalElements);
  renderGame();
};

renderGame();
