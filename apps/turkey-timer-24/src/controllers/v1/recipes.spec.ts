import { getRecipes, parsePaginationNumber } from './recipes';
describe('recipes', () => {
  describe('getRecipes', () => {
    test('should be defined', () => {
      expect(getRecipes).toBeDefined();
    });

    test('should return 3 recipes', () => {
      expect(getRecipes()).toHaveLength(3);
    });

    test('should return 3 recipe', () => {
      expect(getRecipes(3)).toHaveLength(3);
    });
  });

  describe('parsePaginationNumber', () => {
    test('should be defined', () => {
      expect(parsePaginationNumber).toBeDefined();
    });

    test('should return 0 when pageNumber is greater than recipes length', () => {
      expect(parsePaginationNumber(5, 4)).toBe(0);
    });

    test('should return paginationNumber when pageNumber is less than recipes length', () => {
      expect(parsePaginationNumber(3, 4)).toBe(3);
    });

    test('should return paginationNumber when paginationNumber is equal to recipes length', () => {
      expect(parsePaginationNumber(4, 4)).toBe(4);
    });

    test('should return 0 when paginationNumber is less than 0', () => {
      expect(parsePaginationNumber(-1, 4)).toBe(0);
    });
  });
});
