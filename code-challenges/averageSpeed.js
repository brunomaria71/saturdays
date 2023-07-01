function aveSpd(upTime, upSpd, downSpd) {
  let s = (2 * upSpd * downSpd) / (upSpd + downSpd);
  return s;
}

let upTime = 18;
let upSpd = 20;
let downSpd = 60;

console.log(aveSpd(upTime, upSpd, downSpd));
// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.

// the formula for calculating average speed given two speeds for half the distance is

// S = 2ab / a+b

// time is not necessarily relevant in this problem
