import { Recipe } from './index';

export const dryBrinedTurkey: Recipe = {
  name: 'Dry Brined Turkey',
  leadTime: '48 hours',
  prepTime: '4 1/2 hours',
  cookTime: '3 1/2 hours',
  ticketNumber: 10001,
  ingredients: [
    {
      name: 'Turkey, 12-16#',
      quantity: '1 EA.',
    },
    {
      name: 'Kosher salt',
      quantity: 'TT',
    },
    {
      name: 'Black pepper',
      quantity: '1 T.',
    },
    {
      name: 'Thyme sprigs',
      quantity: '10 EA.',
    },
    {
      name: 'Parsley, flat leaf',
      quantity: '1 EA.',
    },
    {
      name: 'Onions, small, halved',
      quantity: '2',
    },
    {
      name: 'Apples, cored and halved',
      quantity: '2 EA.',
    },
    {
      name: 'Butter, softened, unsalted',
      quantity: '1/2 C.',
    },
    {
      name: 'White wine',
      quantity: '2 C.',
    },
  ],
  instructions: [
    '48 hours before serving, rinse and pat dry. Rub all over with salt, remembering to slip salt under skin.',
    'Wrap in a large plastic bag and refrigerate. The next day, turn the bird over.',
    'A few hours before cooking, remove from the bag and pat dry. Place in the roasting pan and allow to come to ambient temperature.',
    'Heat oven to 450°F. Sprinkle half the pepper in the main cavity of the bird. Add thyme, parsley, half the onions, and half the apples. Truss the legs. Put remaining apples and onions in neck opening and tuck neck skin under the bird.',
    'Rub butter under breast skin and onto thigh meat. Sprinkle remaining pepper on the skin. Roast for 30 minutes.',
    'Remove from the oven, reduce heat to 350°F and cover the breast and wing tips with foil. Add wine to the pan and return to the oven. Roast for another 2 hours.',
    'When the internal temperature reaches 160°F remove from the oven. Tip the bird to drain juices from the cavity into the pan. Allow to rest for 30 minutes, covered with foil.',
    'Pour fat and drippings from pan into a measuring cup. Deglaze pan with 1/2 C. of white wine and pour into same measuring cup.',
    'Carve and serve.',
  ],
} as Recipe;
