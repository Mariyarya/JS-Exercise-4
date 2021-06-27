
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 11;


if (runnerAge >= 18 && registeredEarly === true) {
    raceNumber += 1000;
};


if (runnerAge > 18 && registerEarly === true) {
    console.log(`you will race at 9:30 and your race number is ${raceNumber}.`);
}

else if (runnerAge > 18 && registeredEarly === false) {
    console.log(`you will race at 11:00 am and your race number is ${raceNumber}`);
}


else if (runnerAge < 18) {
    console.log(`you will race at 12:30 pm and your race number is ${raceNumber}`)
} else {
    console.log(`you need to registrate `)
}
