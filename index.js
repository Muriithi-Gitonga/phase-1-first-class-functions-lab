// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
    const firstTwoDrivers = [...array]
    return firstTwoDrivers.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
    const LastTwoDrivers = [...array];
    return LastTwoDrivers.splice(-2,2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (paramenter) {
    return function (fare) {
        return fare * paramenter;
    }
}

const fareDoubler = createFareMultiplier => {
    return createFareMultiplier * 2
}
    
const fareTripler = createFareMultiplier => {
    return createFareMultiplier * 3
}


const selectDifferentDrivers = (arrayOfDrivers, funct) => {
    return funct(arrayOfDrivers)
}