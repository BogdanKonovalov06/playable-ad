import waffles from '../public/images/table/win-or-loose/waffles.png';
import cupcakes from '../public/images/table/win-or-loose/cupcakes.png';
import leftovers from '../public/images/table/win-or-loose/leftovers.png';

// export const dishes = [waffles, cupcakes, leftovers];

export interface Dish {
  dish: string;
  img: string;
}

export const dishes: Dish[] = [
  { dish: 'waffles', img: waffles },
  { dish: 'cupcakes', img: cupcakes },
  { dish: 'leftovers', img: leftovers },
];
