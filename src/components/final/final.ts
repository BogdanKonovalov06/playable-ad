import foreground from '../../../public/images/final/foreground.png';
import candice from '../../../public/images/final/Candice.png';
import blitzyFinal from '../../../public/images/final/Blitzy-final.png';
import logoBig from '../../../public/images/final/BingoBlitzLogoBig.png';
import callToAction from '../../../public/images/final/CallToAction.png';
import restart from '../../../public/images/final/restart.png';
import './final.css';

export const finalView = () => {
  return `
    <div class="final">
        <img src='${candice}' alt='candice' class='candice'/>
        <img src='${foreground}' alt='foreground' class='foreground'/>
        <img src='${logoBig}' alt='logo-big' class='logo-big'/>
        <img src='${callToAction}' alt='call to action' class='call-to-action'/>
        <img src='${restart}' alt='restart' class='restart'/>
        <img src='${blitzyFinal}' alt='blitzy' class='blitzy-final'/>
    </div>
    `;
};
