import { Recipe } from './index';

/*
Name: Waldorf Salad
Lead Time: 24 hours
Prep Time: 45 mins.
Cook Time: N/A

Ingredients
----
Diced Tart Apples, 2 C.
Sugar, 1 T.
Celery, diced, 1 C.
Grapes, halved, 1 C.
Pecans, toasted, rough copped, 1/2 C.
Heavy whipping cream, whipped, 1/2 C.
Mayonnaise, 1/4 C.
Salt, 1/2 t.

Instructions
----
To a large bowl add apples, sugar, and lemon juice, Combine.
To mixture add celery, grapes, and nuts.

Separately, fold together whipped cream and mayonnaise. Fold
in the apple mixture and season to taste. Chill 1 hour to overnight.
*/

export const waldorfSalad: Recipe = {
  name: 'Waldorf Salad',
  leadTime: '24 hours',
  prepTime: 'N/A',
  cookTime: 'N/A',
  ticketNumber: 10006,
  ingredients: [
    {
      name: 'Diced Tart Apples',
      quantity: '2 C.',
    },
    {
      name: 'Sugar',
      quantity: '1 T.',
    },
    {
      name: 'Celery, diced',
      quantity: '1 C.',
    },
    {
      name: 'Grapes, halved',
      quantity: '1 C.',
    },
    {
      name: 'Pecans, toasted, rough copped',
      quantity: '1/2 C.',
    },
    {
      name: 'Heavy whipping cream, whipped',
      quantity: '1/2 C.',
    },
    {
      name: 'Mayonnaise',
      quantity: '1/4 C.',
    },
    {
      name: 'Salt',
      quantity: '1/2 t.',
    },
  ],
  instructions: [
    'To a large bowl add apples, sugar, and lemon juice, Combine.',
    'To mixture add celery, grapes, and nuts.',
    'Separately, fold together whipped cream and mayonnaise.',
    'Fold in the apple mixture and season to taste. Chill 1 hour to overnight.',
  ],
};
