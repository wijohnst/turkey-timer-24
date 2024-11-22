import { Recipe } from './index';

/*
### Milk Bread Pull-Apart Rolls

**Yield**: 8 rolls  
**Rating**: 5/5  
**Preparation Time**: 10 minutes  
**Cook Time**: 3 hours  
**Source**: cooking.nytimes.com  

#### Ingredients:
- **Tangzhong**:
  - 1 tbsp bread or all-purpose flour (16 g)
  - 3 tbsp whole milk (45 mL)
- **Dough**:
  - 1 ½ cups bread or all-purpose flour (plus more for shaping, 300 g)
  - 2 tbsp sugar (25 g)
  - 2 tsp instant yeast (6 g)
  - 1 tsp kosher salt (4 g, such as Diamond Crystal)
  - ½ cup whole milk, warmed to 120°F (120 mL)
  - 1 large egg
  - 4 tbsp unsalted butter, room temperature, cut into ½-inch squares (plus more for greasing)
- **Egg Wash**:
  - 1 large egg
  - 1 tbsp milk  

#### Instructions:

1. **Make the Tangzhong**:  
   In a small saucepan, whisk together flour and milk until smooth. Cook over medium-low heat, whisking frequently, until the mixture thickens and reaches 149°F, about 3 minutes. The tangzhong is ready when you can drag a spoon through it, leaving a clean track on the bottom of the pan. Transfer to a small bowl and let cool to room temperature (yields ~1/3 cup).

2. **Make the Dough**:  
   - In a stand mixer bowl fitted with the paddle attachment, combine flour, sugar, yeast, and salt. Add warm milk, egg, and tangzhong. Mix on low speed for ~3 minutes until a soft dough forms.
   - Switch to the dough hook. Add butter pieces and mix on low, scraping down sides as needed, until butter is incorporated (~3 minutes). Increase to medium-high speed and mix until the dough pulls from the bowl sides but remains slightly sticky, 6-8 minutes. The dough should be soft, smooth, and tacky.

3. **First Rise**:  
   Lightly grease a large bowl with butter. Shape dough into a ball, transfer to the greased bowl, cover, and proof in a warm spot until doubled, about 1 hour.

4. **Shape Rolls**:  
   - Grease the bottom and sides of a 9-inch round cake pan with butter. Lightly flour a work surface, deflate dough, and divide into 8 pieces (~75 g each).  
   - For round rolls: Roll each piece into a tight ball and place seam-side down in the pan, spacing ~½ inch apart.  
   - For knots: Roll each piece into an 8-10 inch log. Twist 3-4 times, tie into a loose knot, and tuck ends underneath. Place seam-side down in the pan, spaced ~½ inch apart. Cover and let rise 45 minutes to 1 hour.

5. **Bake the Rolls**:  
   Preheat oven to 350°F. Beat the egg and milk for egg wash, then brush over risen rolls. Bake until golden brown, about 25 minutes. If browning too quickly, tent with parchment paper. Cool in the pan for 15 minutes, then transfer to a wire rack to cool completely, about 1 hour.

*/

export const rolls: Recipe = {
  name: 'Milk Bread Pull-Apart Rolls',
  leadTime: 'N/A',
  prepTime: '3 hours',
  cookTime: '1 1/2 hours',
  ticketNumber: 10012,
  ingredients: [
    {
      name: 'Bread Flour',
      quantity: '1 tbsp',
    },
    {
      name: 'Whole milk',
      quantity: '3 tbsp',
    },
    {
      name: 'Bread Flour',
      quantity: '1 ½ cups',
    },
    {
      name: 'Sugar',
      quantity: '2 tbsp',
    },
    {
      name: 'Instant yeast',
      quantity: '2 tsp',
    },
    {
      name: 'Kosher salt',
      quantity: '1 tsp',
    },
    {
      name: 'Whole milk, warmed to 120°F',
      quantity: '1/2 cup',
    },
    {
      name: 'Large egg',
      quantity: '1',
    },
    {
      name: 'Unsalted butter, room temperature, 1/2" squares',
      quantity: '4 tbsp',
    },
    {
      name: 'Egg',
      quantity: '1',
    },
    {
      name: 'Milk',
      quantity: '1 tbsp',
    },
  ],
  instructions: [
    'Make the Tangzhong: In a small saucepan, whisk together flour and milk until smooth. Cook over medium-low heat, whisking frequently, until the mixture thickens and reaches 149°F, about 3 minutes. The tangzhong is ready when you can drag a spoon through it, leaving a clean track on the bottom of the pan. Transfer to a small bowl and let cool to room temperature (yields ~1/3 cup).',
    'In a stand mixer bowl fitted with the paddle attachment, combine flour, sugar, yeast, and salt. Add warm milk, egg, and tangzhong. Mix on low speed for ~3 minutes until a soft dough forms. Switch to the dough hook. Add butter pieces and mix on low, scraping down sides as needed, until butter is incorporated (~3 minutes). Increase to medium-high speed and mix until the dough pulls from the bowl sides but remains slightly sticky, 6-8 minutes. The dough should be soft, smooth, and tacky.',
    'First Rise: Lightly grease a large bowl with butter. Shape dough into a ball, transfer to the greased bowl, cover, and proof in a warm spot until doubled, about 1 hour.',
    'Grease the bottom and sides of a 9" round cake pan with butter. Lightly flour a work surface, deflate dough, and divide into 8 pieces (~75 g each). For round rolls: Roll each piece into a tight ball and place seam-side down in the pan, spacing ~½ inch apart. For knots: Roll each piece into an 8-10 inch log. Twist 3-4 times, tie into a loose knot, and tuck ends underneath. Place seam-side down in the pan, spaced ~½ inch apart. Cover and let rise 45 minutes to 1 hour.',
    'Preheat oven to 350°F. Beat the egg and milk for egg wash, then brush over risen rolls. Bake until golden brown, about 25 minutes. If browning too quickly, tent with parchment paper. Cool in the pan for 15 minutes, then transfer to a wire rack to cool completely, about 1 hour.',
  ],
};
