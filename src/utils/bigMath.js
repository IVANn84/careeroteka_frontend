import Big from 'big.js';

const checkCorrect = (number, index, methodName) => {
  try {
    if ([null, undefined].includes(number)) {
      switch (methodName) {
        case 'minus': {
          if (index === 0) {
            throw new TypeError(`"${number}" can't be used as minuend for BigMath.${methodName}()`);
          } else {
            return Big(0);
          }
        }

        case 'divide': {
          if (index === 0) {
            throw new TypeError(`"${number}" can't be used as dividend for BigMath.${methodName}()`);
          } else {
            return Big(1);
          }
        }

        default: {
          return Big(0);
        }
      }
    } else {
      return Big(number);
    }
  } catch (error) {
    if (error.message === '[big.js] Invalid number') {
      throw new TypeError(`Invalid use "${number}" like an argument for BigMath.${methodName}()`);
    } else {
      throw error;
    }
  }
};

const prepareArguments = (methodName, args = {}) => args.map((
  number,
  index,
) => checkCorrect(number, index, methodName));

export const correctToString = bigNumber => {
  // Корректная обработка big чисел формата value * -e^10 и вывод их в виде строки
  if (bigNumber.e < 0) {
    const decimalPart = new Array(Math.abs(bigNumber.e + 1))
      .fill('0')
      .join('')
      .concat(bigNumber.c.join(''));

    return `${bigNumber.s === -1 ? '-' : ''}0.${decimalPart}`;
  }
  return bigNumber.toString();
};

const plus = (...args) => {
  if (args?.length) {
    const methodName = 'plus';
    const bigNumbers = prepareArguments(methodName, args);
    const calculating = () => bigNumbers
      .reduce((acc, currentNumber) => currentNumber.plus(acc), Big(0));
    return correctToString(calculating());
  }
};

const minus = (minuend, subtrahend) => {
  const methodName = 'minus';
  const bigNumbers = prepareArguments(methodName, [minuend, subtrahend]);
  const calculating = () => bigNumbers[0].minus(bigNumbers[1]);

  return correctToString(calculating());
};

const divide = (dividend, divider) => {
  const methodName = 'divide';
  const bigNumbers = prepareArguments(methodName, [dividend, divider]);
  const calculating = () => bigNumbers[0].div(bigNumbers[1]);

  return correctToString(calculating());
};

const times = (multiplied, multiplier) => {
  const methodName = 'times';
  const bigNumbers = prepareArguments(methodName, [multiplied, multiplier]);
  const calculating = () => bigNumbers[0].times(bigNumbers[1]);

  return correctToString(calculating());
};

const toFixed = (number, precision = 2, roundMod = 1) => {
  /*
        roundMod
        0 - без округления
        1 - дефолтное, округление в большую сторону
    */

  Big.RM = roundMod;
  const methodName = 'toFixed';
  const bigNumbers = prepareArguments(methodName, [number]);
  const calculating = bigNumbers[0].toFixed(precision);

  return precision > 2
    ? calculating.toString()
    : parseFloat(calculating);
};

const lt = (compared, comparer) => {
  const methodName = 'lt';
  const bigNumbers = prepareArguments(methodName, [compared, comparer]);
  const calculating = () => bigNumbers[0].lt(bigNumbers[1]);

  return calculating();
};

const lte = (compared, comparer) => {
  const methodName = 'lte';
  const bigNumbers = prepareArguments(methodName, [compared, comparer]);
  const calculating = () => bigNumbers[0].lte(bigNumbers[1]);

  return calculating();
};

const gt = (compared, comparer) => {
  const methodName = 'gt';
  const bigNumbers = prepareArguments(methodName, [compared, comparer]);
  const calculating = () => bigNumbers[0].gt(bigNumbers[1]);

  return calculating();
};

const gte = (compared, comparer) => {
  const methodName = 'gte';
  const bigNumbers = prepareArguments(methodName, [compared, comparer]);
  const calculating = () => bigNumbers[0].gte(bigNumbers[1]);

  return calculating();
};

const eq = (compared, comparer) => {
  const methodName = 'eq';
  const bigNumbers = prepareArguments(methodName, [compared, comparer]);
  const calculating = () => bigNumbers[0].eq(bigNumbers[1]);

  return calculating();
};

const BigMath = {
  plus,
  minus,
  divide,
  times,
  toFixed,
  lt,
  lte,
  gt,
  gte,
  eq,
};

export default BigMath;
