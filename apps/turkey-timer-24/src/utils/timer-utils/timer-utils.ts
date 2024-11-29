import { intervalToDuration, Duration, differenceInMinutes } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

// convert to PST
export const tTime = new Date('2025-11-27T17:00:00');

export type TMinusTime = {
  days: [string, string];
  hours: [string, string];
  minutes: [string, string];
  seconds?: [string, string];
};
export type IsUnder2Minutes = boolean;
export type IsOver30Days = boolean;
export type GetTMinusTimeResponse = [TMinusTime, IsUnder2Minutes, IsOver30Days];

export const formatDuration = (duration: Duration): TMinusTime => {
  const keys = ['days', 'hours', 'minutes', 'seconds'];

  return keys.reduce((acc, k) => {
    const value = (duration[k] as number) ?? 0;
    const formattedValue = value.toString().padStart(2, '0');

    return {
      ...acc,
      [k]: [formattedValue[0], formattedValue[1]],
    };
  }, {} as TMinusTime);
};

export const getTMinusTime = (): GetTMinusTimeResponse => {
  // now should be current time + 8 hours

  const now = toZonedTime(new Date(), 'America/Los_Angeles');

  const shouldIncludeSeconds = isUnder2Minutes(now);

  const res = formatDuration(
    intervalToDuration({
      start: now,
      end: tTime,
    })
  );
  if (!shouldIncludeSeconds) {
    delete res.seconds;
  }

  return [res, shouldIncludeSeconds, isOver30Days(now)];
};

export const isUnder2Minutes = (now = new Date()): boolean => {
  return (
    differenceInMinutes(tTime, now) <= 2 && differenceInMinutes(tTime, now) >= 0
  );
};

export const isOver30Days = (now = new Date()): boolean => {
  return differenceInMinutes(tTime, now) > 30 * 24 * 60;
};
