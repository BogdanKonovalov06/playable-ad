import { FinalElements } from '../components/final/finalElements';

const classNameMap: { [key in keyof FinalElements]: string } = {
  finalContainer: 'show-final',
  candice: 'show-candice',
  blitzyFinal: 'show-blitzy',
  logoBig: 'show-logo-big',
  callToAction: 'call-to-action-final',
  restartButton: 'restart-final',
};

const toggleClass = (
  action: 'add' | 'remove',
  elements: FinalElements,
  elementName?: keyof FinalElements
) => {
  const method = action === 'add' ? 'add' : 'remove';

  if (elementName) {
    elements[elementName]?.classList[method](classNameMap[elementName]);
  } else {
    Object.keys(elements).forEach((key) => {
      const el = key as keyof FinalElements;
      elements[el]?.classList[method](classNameMap[el]);
    });
  }
};

export const animateFinal = (
  elements: FinalElements,
  resetGame: () => void
) => {
  setTimeout(() => {
    toggleClass('add', elements, 'finalContainer');
    toggleClass('add', elements, 'logoBig');
  }, 3000);

  setTimeout(() => {
    toggleClass('add', elements, 'blitzyFinal');
    toggleClass('add', elements, 'candice');
  }, 3000);

  setTimeout(() => {
    toggleClass('add', elements, 'callToAction');
    toggleClass('add', elements, 'restartButton');
    elements.restartButton?.addEventListener('click', resetGame);
  }, 3500);
};

export const restartGame = (elements: FinalElements) => {
  toggleClass('remove', elements);
};
