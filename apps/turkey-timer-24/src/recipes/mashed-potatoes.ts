import { Recipe } from './index';
/*
Mashed Potatoes

Serves: 4
Total Time: 20 mins. prep | 20 mins. cook | 10 mins. serve

Ingredients
Yukon gold potatoes, quartered, boiled until fork tender, 1.5#
Kerry Gold || Plugra, cubed, 1#
Heavy Cream, 3 C.
Salt, TT

Directions
While potatoes cook, combine cream and butter in a pan over low heat. Pass prepared potatoes through ricer. Return to heat and heat over low 3 minutes to cook off water. Slowly add butter and cream, folding into riced potatoes. Season to taste and serve.
*/

export const mashedPotatoes: Recipe = {
  name: 'Mashed Potatoes',
  leadTime: '4 hours',
  prepTime: '1 hour',
  cookTime: '30 mins',
  ticketNumber: 10003,
  ingredients: [
    {
      name: 'Gold potatoes, quartered, fork tender',
      quantity: '1.5#',
    },
    {
      name: 'Kerry Gold Butter, cubed',
      quantity: '1#',
    },
    {
      name: 'Heavy Cream',
      quantity: '3 C.',
    },
    {
      name: 'Salt',
      quantity: 'TT',
    },
  ],
  instructions: [
    'While potatoes cook, combine cream and butter in a pan over low heat. Pass prepared potatoes through ricer.',
    'Return to heat and heat over low 3 minutes to cook off water. Slowly add butter and cream, folding into riced potatoes.',
    'Season to taste and serve.',
  ],
};
