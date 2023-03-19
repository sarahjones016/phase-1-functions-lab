function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    return distanceFromHqInBlocks(pickupLocation) * 264;
 }

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {

    let distanceTravelledInFeet = Math.abs(destination - start) * 264;

    if (distanceTravelledInFeet < 400) {
        return 0;
    } else if ((distanceTravelledInFeet > 400) && (distanceTravelledInFeet < 2000)) {
        return (distanceTravelledInFeet - 400) * .02;
    } else if ((distanceTravelledInFeet > 2000) && (distanceTravelledInFeet < 2500)) {
        return 25;
    } else if (distanceTravelledInFeet > 2500) {
        return "cannot travel that far";
    }
}