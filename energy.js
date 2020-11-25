/**
 * Copyright (c) 2020
 *
 * The Logs program calculates the number of logs that
 * the truck can carry of the log size the user has chosen.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/11/23 
 */
 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Declaring the constant C
  const C = 2.998 * (10**8);
  
// input
rl.question('Enter the mass of an object in kg:', (massObject) => {
  // process
 var energyCreated = (massObject * (C**2));
 var numberOfBombs = energyCreated / (4 * 10**12);
 
  // output
  console.log(``);
  console.log(`The energy released from the object is ${energyCreated} Joules.`);
  console.log(`This energy is equivalent to ${numberOfBombs} bombs.`);

  rl.close();
});
