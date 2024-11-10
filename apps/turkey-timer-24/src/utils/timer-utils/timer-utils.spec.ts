import { getTMinusTime, formatDuration, isUnder2Minutes } from './timer-utils';

jest.useFakeTimers({
  now: new Date(1730582210841),
});

describe('Timer Utils', () => {
  describe('getTMinusTime', () => {
    test('should be defined', () => {
      expect(getTMinusTime).toBeDefined();
    });

    describe('Should return the correct TMinus time', () => {
      test('TMinus is more than 2 minutes', () => {
        const [tMinusTime] = getTMinusTime();

        expect(tMinusTime).toEqual({
          days: ['2', '5'],
          hours: ['2', '3'],
          minutes: ['4', '3'],
        });
      });

      test('TMinus is 2 minutes', () => {
        jest.useFakeTimers({
          now: new Date('2024-11-28T13:58:00'),
        });
        const [tMinusTime] = getTMinusTime();

        expect(tMinusTime).toEqual({
          days: ['0', '0'],
          hours: ['0', '0'],
          minutes: ['0', '2'],
          seconds: ['0', '0'],
        });
      });

      test('TMinus is less than 2 minutes', () => {
        jest.useFakeTimers({
          now: new Date('2024-11-28T13:58:30'),
        });
        const [tMinusTime] = getTMinusTime();

        expect(tMinusTime).toEqual({
          days: ['0', '0'],
          hours: ['0', '0'],
          minutes: ['0', '1'],
          seconds: ['3', '0'],
        });
      });
    });
  });

  describe('isUnder2Minutes', () => {
    test('should be defined', () => {
      expect(isUnder2Minutes).toBeDefined();
    });

    test('should be false if duration is greater or equal to 2 minutes', () => {
      const now = new Date('2024-11-28T13:57:00');

      expect(isUnder2Minutes(now)).toBe(false);
    });

    test('should be true if duration is 2 minutes', () => {
      const now = new Date('2024-11-28T13:58:00');

      expect(isUnder2Minutes(now)).toBe(true);
    });

    test('should be true if duration is less than 2 minutes', () => {
      const now = new Date('2024-11-28T13:58:30');

      expect(isUnder2Minutes(now)).toBe(true);
    });
  });

  describe('formatDuration', () => {
    test('should be defined', () => {
      expect(formatDuration).toBeDefined();
    });

    test.todo(
      'should not include seconds when duration is greater or equal to 2 minutes'
    );

    test('should return 0 when key is less than 10', () => {
      const duration = {
        days: 5,
        hours: 2,
        minutes: 8,
        seconds: 3,
      };
      const formattedDuration = formatDuration(duration);

      expect(formattedDuration).toEqual({
        days: ['0', '5'],
        hours: ['0', '2'],
        minutes: ['0', '8'],
        seconds: ['0', '3'],
      });
    });
  });
});
