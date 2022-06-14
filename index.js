const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwo = drivers.slice(0,2);
const lastTwo = drivers.slice(-2)

function returnFirstTwoDrivers() {
    return firstTwo;
}

function returnLastTwoDrivers() {
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function(fare){
        return fareMultiplier * fare;
    }
}

const fareDoubler = function(fare){
    return fare * 2;
}

const fareTripler = function(fare){
    return fare * 3;
}

const selectDifferentDrivers = function (returnLastTwoDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers()
}