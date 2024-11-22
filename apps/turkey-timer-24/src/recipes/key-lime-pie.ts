import { Recipe } from './index';

/*
Pulverize graham crackers in food processor until finely ground into crumbs (skip this step if starting with graham cracker crumbs).
1 ½ cups (170 g) graham cracker crumbs
Stir together graham cracker crumbs and sugars in a medium-sized bowl.  Add melted butter and use a fork to combine ingredients well until crumbs are all moistened.
2 Tablespoons sugar,1 Tablespoons brown sugar,7 Tablespoons (100 g) butter
Pour mixture into pie plate or springform pan.  Use the (clean!) bottom of a measuring cup to firmly pack crumbs into the bottom of the pan and (if using a pie pan) gently press up the sides.  Use your fingers to pack crumbs tightly into the sides of the pie pan.
If the crust needs to be pre-baked, bake on 350F (175C) for 10-13 minutes and allow to cool before filling. If using this crust as part of a different recipe, bake according to your recipe's instructions.  If this crust is for a no-bake recipe, refrigerate or freeze for 10-20 minutes before filling.
*/
export const grahamCrackerCrust: Recipe = {
  name: 'Graham Cracker Crust',
  leadTime: '24 hours',
  prepTime: 'N/A',
  cookTime: 'N/A',
  ticketNumber: 10013,
  ingredients: [
    {
      name: 'Graham crackers, crushed',
      quantity: '1 1/2 C.',
    },
    {
      name: 'Sugar',
      quantity: '2 T.',
    },
    {
      name: 'Brown Sugar, packed',
      quantity: '1 T.',
    },
    {
      name: 'Salt',
      quantity: '1/4 t.',
    },
    {
      name: 'Unsalted butter, melted',
      quantity: '7 T.',
    },
  ],
  instructions: [
    'Pulverize graham crackers in food processor until finely ground into crumbs (skip this step if starting with graham cracker crumbs).',
    'Stir together graham cracker crumbs and sugars in a medium-sized bowl.  Add melted butter and use a fork to combine ingredients well until crumbs are all moistened.',
    'Pour mixture into pie plate or springform pan.  Use the (clean!) bottom of a measuring cup to firmly pack crumbs into the bottom of the pan and (if using a pie pan) gently press up the sides.  Use your fingers to pack crumbs tightly into the sides of the pie pan.',
    "If the crust needs to be pre-baked, bake on 350F (175C) for 10-13 minutes and allow to cool before filling. If using this crust as part of a different recipe, bake according to your recipe's instructions.  If this crust is for a no-bake recipe, refrigerate or freeze for 10-20 minutes before filling.",
  ],
};

/* 
### Key Lime Pie

**Yield**: 8 servings  
**Rating**: 4.7/5  
**Preparation Time**: 10 minutes  
**Cook Time**: 15 minutes  
**Source**: [AllRecipes](https://www.allrecipes.com/recipe/12698/easy-key-lime-pie-i/)

#### Ingredients:
- 3 large egg yolks
- 1 can sweetened condensed milk (14 oz)
- ½ cup key lime juice
- 1 prepared graham cracker crust
- Optional: whipped cream and lime slices for garnish

#### Instructions:
1. **Prepare Filling**: Beat egg yolks and sweetened condensed milk in a medium bowl. Stir in lime juice until smooth. 
2. **Assemble Pie**: Pour mixture into the prepared graham cracker crust.
3. **Bake**: Preheat oven to 375°F. Bake for 15 minutes until filling is set.
4. **Cool**: Let the pie cool completely. Chill in the refrigerator before serving.
5. **Garnish**: Top with whipped cream and lime slices, if desired. Serve cold.

*/

export const keyLimePie: Recipe = {
  name: 'Key Lime Pie',
  leadTime: '24 hours',
  prepTime: '30 mins.',
  cookTime: 'N/A',
  ticketNumber: 10014,
  ingredients: [
    {
      name: 'Egg yolks',
      quantity: '3',
    },
    {
      name: 'Sweetened condensed milk',
      quantity: '1 can (14 oz)',
    },
    {
      name: 'Key lime juice',
      quantity: '1/2 C.',
    },
    {
      name: 'Graham cracker crust',
      quantity: '1 prepared',
    },
    {
      name: 'Whipped cream and lime slices',
      quantity: 'for garnish',
    },
  ],
  instructions: [
    'Prepare Filling: Beat egg yolks and sweetened condensed milk in a medium bowl. Stir in lime juice until smooth.',
    'Assemble Pie: Pour mixture into the prepared graham cracker crust.',
    'Bake: Preheat oven to 375°F. Bake for 15 minutes until filling is set.',
    'Cool: Let the pie cool completely. Chill in the refrigerator before serving.',
    'Garnish: Top with whipped cream and lime slices, if desired. Serve cold.',
  ],
};
