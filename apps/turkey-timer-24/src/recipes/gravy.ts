import { Recipe } from './index';

export const chickenFootStock: Recipe = {
  name: 'Chicken Foot Stock',
  leadTime: '48 hours',
  prepTime: 'N/A',
  cookTime: 'N/A',
  ticketNumber: 10013,
  ingredients: [
    {
      name: 'Chicken Feet',
      quantity: '2 lb',
    },
    {
      name: 'Vegetable Scraps',
      quantity: 'TT',
    },
  ],
  instructions: [
    'Add chicken feet and vegetable scraps to a large stock pot and cover with water.',
    'Bring to a boil and reduce to a simmer.',
    'Simmer for 8 hours, skimming off any foam that rises to the top.',
  ],
};

export const gravy: Recipe = {
  name: 'Gravy',
  leadTime: 'N/A',
  prepTime: 'N/A',
  cookTime: '30 mins.',
  ticketNumber: 10014,
  ingredients: [
    {
      name: 'Turkey Drippings',
      quantity: 'TT',
    },
    {
      name: 'Chicken Foot Stock',
      quantity: '1 recipe',
    },
    {
      name: 'Flour',
      quantity: '1/4 C.',
    },
    {
      name: 'Butter, unsalted',
      quantity: '1/4 C.',
    },
  ],
  instructions: [
    'In a saucepan, melt butter over medium heat.',
    'Add flour and whisk until a roux forms.',
    'Slowly add chicken foot stock and turkey drippings, whisking constantly to avoid lumps.',
    'Simmer until thickened, about 10 minutes.',
    'Season to taste and serve.',
  ],
};
