import { Recipe } from './index';

/*
Cranberry Gelatin


Ingredients:
Raspberry gelatin, 3 oz. package, 2 ea. 
Boiling water, divided, 2 C. 
Wholeberry cranberry sauce, 14 oz can, 1 ea. 
Lemon juice, 2 T. 
Heavy whipping cream, 1 C. 
Cream cheese, softened, 8 oz. 
Pecans, chopped, toasted, 1/2 C.

Directions:
Dissolve gelatin in 1 C. Boiling water. 
In a separate bowl, combine cranberry sauce and remaining water. 
Add gelatin mixture & lemon juice. 
Add to a greased 13 x 9 glass baking dish. 
Add to refrigerator until firm, about 1 hour. 

To serve, beat cream until stiff. Separately, beat cream cheese until smooth. 
Stir in 1/2 C. cream then fold in remaining whipped cream. Spread over gelatin. 
Sprinkle with pecans. Refrigerate 2 hours. Serve.

*/

export const cranberryGelatin: Recipe = {
  name: 'Cranberry Gelatin',
  leadTime: '24 hours',
  prepTime: '30 mins.',
  cookTime: 'N/A',
  ticketNumber: 10005,
  ingredients: [
    {
      name: 'Rasp. gelatin, 3 oz. pkg.',
      quantity: '2 ea.',
    },
    {
      name: 'Boiling water, divided',
      quantity: '2 C.',
    },
    {
      name: 'Wholeberry cranberry sauce, 14 oz can',
      quantity: '1 ea.',
    },
    {
      name: 'Lemon juice',
      quantity: '2 T.',
    },
    {
      name: 'Heavy whipping cream',
      quantity: '1 C.',
    },
    {
      name: 'Cream cheese, softened',
      quantity: '8 oz.',
    },
    {
      name: 'Pecans, chopped, toasted',
      quantity: '1/2 C.',
    },
  ],
  instructions: [
    'Dissolve gelatin in 1 C. Boiling water.',
    'In a separate bowl, combine cranberry sauce and remaining water.',
    'Add gelatin mixture & lemon juice.',
    'Add to a greased 13 x 9 glass baking dish.',
    'Add to refrigerator until firm, about 1 hour.',
    'To serve, beat cream until stiff. Separately, beat cream cheese until smooth.',
    'Stir in 1/2 C. cream then fold in remaining whipped cream. Spread over gelatin.',
    'Sprinkle with pecans. Refrigerate 2 hours. Serve.',
  ],
};
