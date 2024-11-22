import { Recipe } from './index';

/*
Green Bean & Corn Casserole


Ingredients:
Corn, canned, drained, 2 ea.
French cut green beans, canned, drained, 1 ea.
Green onion, chopped, 1/2 C. 
Celery, chopped, 1/2 C. 
Green pepper, chopped, 1/4 C. 
Sharp cheddar cheese, grated, 3/4 C. 
Cream of Celery Soup, 1 ea. 
Sour cream, 8 oz. 
S&P, TT

Butter stick, 1 ea., melted
Ritz crackers, sleeve, blitzed,  1 ea.

Directions:
In a bowl combine corn through salt and pepper. 
Add mixture to a greased casserole dish. 
Meanwhile, combine cracker crumbs and butter. 
Spread cracker topping over casserole and bake at 350°, uncovered, 1 hour.

*/

export const greenBeanCornCasserole: Recipe = {
  name: 'Green Bean & Corn Casserole',
  leadTime: '24 hours',
  prepTime: '1 1/2 hours',
  cookTime: '1 hour',
  ticketNumber: 10002,
  ingredients: [
    {
      name: 'Corn, canned, drained',
      quantity: '2 EA.',
    },
    {
      name: 'Green beans, french, canned, drained',
      quantity: '1 EA.',
    },
    {
      name: 'Green onion, chopped',
      quantity: '1/2 C.',
    },
    {
      name: 'Celery, chopped',
      quantity: '1/2 C.',
    },
    {
      name: 'Green pepper, chopped',
      quantity: '1/4 C.',
    },
    {
      name: 'Sharp cheddar cheese, grated',
      quantity: '3/4 C.',
    },
    {
      name: 'Cream of Celery Soup',
      quantity: '1 EA.',
    },
    {
      name: 'Sour cream',
      quantity: '8 oz.',
    },
    {
      name: 'S&P',
      quantity: 'TT',
    },
    {
      name: 'Butter, stick, melted',
      quantity: '1 EA.',
    },
    {
      name: 'Ritz crackers, sleeve, blitzed',
      quantity: '1 EA.',
    },
  ],
  instructions: [
    'In a bowl combine corn through salt and pepper.',
    'Add mixture to a greased casserole dish.',
    'Meanwhile, combine cracker crumbs and butter.',
    'Spread cracker topping over casserole and bake at 350°, uncovered, 1 hour.',
  ],
};
