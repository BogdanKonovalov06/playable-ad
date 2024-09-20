export type FinalElements = {
  finalContainer: HTMLElement | null;
  candice: HTMLElement | null;
  blitzyFinal: HTMLElement | null;
  logoBig: HTMLElement | null;
  callToAction: HTMLElement | null;
  restartButton: HTMLElement | null;
};

export const getFinalElements = (): FinalElements => {
  return {
    finalContainer: document.querySelector('.final'),
    candice: document.querySelector('.candice'),
    blitzyFinal: document.querySelector('.blitzy-final'),
    logoBig: document.querySelector('.logo-big'),
    callToAction: document.querySelector('.call-to-action'),
    restartButton: document.querySelector('.restart'),
  };
};
