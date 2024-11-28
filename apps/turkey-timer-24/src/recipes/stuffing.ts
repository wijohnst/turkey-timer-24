import { Recipe } from './index';

/*
### Brioche Chestnut Stuffing

**Yield**: 10 servings  
**Preparation Time**: 2 hours  

#### Ingredients:
- 1 brioche loaf, torn into 1-inch pieces (14-16 oz)
- 8 T. unsalted butter (plus more for the pan, 1 stick)
- 1 large onion, diced
- 1 cup diced fennel (about 1/2 small fennel bulb)
- 1 ½ t. kosher salt (plus more as needed)
- 1 tbsp fresh thyme, chopped
- 1 tbsp fresh sage, chopped
- 5 oz roasted peeled chestnuts, roughly chopped
- ½ tsp ground black pepper
- 2 ½ cups turkey or chicken stock
- 2 large eggs
- 2 tbsp chopped parsley  

#### Instructions:
1. **Dry the Brioche**:  
   Arrange brioche pieces in a single layer on a rimmed baking sheet. Let dry overnight, or place in a 200°F oven for 1-2 hours until stale but not colored.

2. **Toast the Brioche**:  
   Heat the oven to 375°F. Butter a shallow 2-quart casserole or gratin dish. Melt 4 tbsp butter, and toss brioche with melted butter in the prepared dish. Bake until golden and toasted, 8-10 minutes. Let cool, then transfer to a large bowl (reserve the dish).

3. **Cook Aromatics**:  
   In a 12-inch skillet, melt the remaining 4 tbsp butter over medium heat. Stir in onion, celery, fennel, and ½ tsp salt. Cook until soft and lightly browned, about 12 minutes. Stir in thyme and sage; cook for 1 minute. Transfer to the bowl with brioche. Fold in chestnuts and pepper; let cool.

4. **Combine Liquids and Assemble**:  
   In a medium bowl, whisk 1 ½ cups stock with eggs, parsley, and remaining 1 tsp salt. Gently fold into the brioche mixture, then transfer back into the prepared baking dish. Drizzle on remaining 1 cup stock until the mixture is moist but not squishy (you may not need all the stock).

5. **Bake the Stuffing**:  
   Cover the dish with foil and bake until lightly springy, about 25 minutes. Remove foil and bake until golden brown, another 20-30 minutes. Serve warm.

*/

export const briocheChestnutStuffing: Recipe = {
  name: 'Brioche Chestnut Stuffing',
  leadTime: '24 hours',
  prepTime: '8 hours',
  cookTime: '1 hour',
  ticketNumber: 10004,
  ingredients: [
    {
      name: 'Brioche loaf, torn',
      quantity: '14-16 oz',
    },
    {
      name: 'Unsalted butter',
      quantity: '1 stick',
    },
    {
      name: 'Onion, diced',
      quantity: '1',
    },
    {
      name: 'Fennel, diced',
      quantity: '1 C.',
    },
    {
      name: 'Kosher salt',
      quantity: '1 1/2 t.',
    },
    {
      name: 'Fresh thyme, chopped',
      quantity: '1 T.',
    },
    {
      name: 'Fresh sage, chopped',
      quantity: '1 T.',
    },
    {
      name: 'Roasted chestnuts, peeled, chopped',
      quantity: '5 oz',
    },
    {
      name: 'Ground black pepper',
      quantity: '1/2 t.',
    },
    {
      name: 'Turkey or chicken stock',
      quantity: '2 1/2 cups',
    },
    {
      name: 'Eggs',
      quantity: '2',
    },
    {
      name: 'Parsley, chopped',
      quantity: '2 T.',
    },
  ],
  instructions: [
    'Arrange brioche pieces in a single layer on a rimmed baking sheet. Let dry overnight, or place in a 200°F oven for 1-2 hours until stale but not colored.',
    'Heat the oven to 375°F. Butter a shallow 2-quart casserole or gratin dish. Melt 4 T. butter, and toss brioche with melted butter in the prepared dish. Bake until golden and toasted, 8-10 minutes. Let cool, then transfer to a large bowl (reserve the dish).',
    'In a 12-inch skillet, melt the remaining 4 T. butter over medium heat. Stir in onion, celery, fennel, and ½ t. salt. Cook until soft and lightly browned, about 12 minutes. Stir in thyme and sage; cook for 1 minute. Transfer to the bowl with brioche. Fold in chestnuts and pepper; let cool.',
    'In a medium bowl, whisk 1 ½ cups stock with eggs, parsley, and remaining 1 t. salt. Gently fold into the brioche mixture, then transfer back into the prepared baking dish. Drizzle on remaining 1 cup stock until the mixture is moist but not squishy (you may not need all the stock).',
    'Cover the dish with foil and bake until lightly springy, about 25 minutes. Remove foil and bake until golden brown, another 20-30 minutes. Serve warm.',
  ],
};
