import { calculate, sigmoid_max } from './algorithm';

export function calculateInvestmentReturn(oldUpvotes: number, newUpvotes: number, netWorth: number) {
  let factor = calculate(newUpvotes, oldUpvotes, netWorth);

  let investmentReturn = (Math.round((factor - 1) * 100 * 100)) / 100;
  //var upperLimit = (Math.round(sigmoid_max(oldUpvotes) * 10000) - 10000) / 100 + "%";
  //var upperLimitAmount = calculatePoint(sigmoid_max(oldUpvotes), oldUpvotes, netWorth);

  return investmentReturn;
}

export function calculateBreakEvenPoint(upvotes: number) {
  return Math.round(calculatePoint(1, upvotes, 100) * 100) / 100;
}

function calculatePoint(factor: number, oldNumber: number, net_worth: number) {
  var y = oldNumber;
  var z = factor;
  var TOL: number;

  var x = y;
  var newFactor = calculate(x, y, net_worth);

  if (factor !== 1) {
    z = 0.999 * factor;

    if (y > 50000) {
      TOL = 50;
    } else if (y > 2000) {
      TOL = 10;
    } else {
      TOL = 1;
    }

    if (newFactor > z) {
      while (newFactor > z) {
        x = x - TOL;
        newFactor = calculate(x, y, net_worth);
      }
    } else {
      while (newFactor < z) {
        x = x + TOL;
        newFactor = calculate(x, y, net_worth);
      }
    }
  } else {
    if (y > 50000) {
      TOL = 1;
    } else if (y > 2000) {
      TOL = 0.1;
    } else {
      TOL = 0.01;
    }

    while (newFactor < z) {
      x = x + TOL;
      newFactor = calculate(x, y, net_worth);
    }
  }

  return x;
}