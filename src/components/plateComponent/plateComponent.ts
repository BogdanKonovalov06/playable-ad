import plateImage from '../../../public/images/table/plate.png';
import mainDishLed from '../../../public/images/table/maindish_led.png';

import './plateComponent.css';
import { shuffleArray } from '../../utils/shuffleArray';
import { Dish } from '../../dishes';

export const plateComponent = (dish: Dish, index: number): string => {
  return `
    <div class="plate-component" id="plate-${index}" data-dish="${dish.dish}">
      <img src="${mainDishLed}" class="main-dish" alt="main dish led image" />
      <img src="${dish.img}" class="dish dish-${dish.dish}" alt="dish image"/>
      <img src="${plateImage}" class="plate" alt="plate image" />
    </div>
  `;
};

export const plateContainer = (dishes: Dish[]): string => {
  const shuffledDishes = shuffleArray([...dishes]);
  return `
    <div class="plate-container">
      ${shuffledDishes
        .map((dish, index) => plateComponent(dish, index))
        .join('')}
    </div>
  `;
};

export const attachDishClickEvent = (
  gameResult: (result: 'win' | 'lose') => void
) => {
  const plateComponents = document.querySelectorAll('.plate-component');
  let dishIsChosen = false;

  plateComponents.forEach((component) => {
    component.addEventListener('click', () => {
      if (!dishIsChosen) {
        const mainDishLed = component.querySelector('.main-dish');
        const dishType = component.getAttribute('data-dish');
        mainDishLed!.classList.add('hide-led');

        if (dishType === 'leftovers') {
          gameResult('lose');
        } else {
          gameResult('win');
        }

        dishIsChosen = true;
      }
    });
  });
};
