// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
   let scuberHq = 42;  
    let distance = (scuberHq - pickupLocation);
    return (Math.abs(distance));
};
function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation);
    return (blocks * 264);
}
function distanceTravelledInFeet(start, destination){
    
    return ((Math.abs(destination - start)) * 264);
}
function calculatesFarePrice(start, destination) {
    let fareDistance = distanceTravelledInFeet(start, destination);
    if (fareDistance <= 400) {
        return (0);
    } else if (fareDistance > 400 && fareDistance < 2000) {
        return ((fareDistance - 400) * 0.02);

    } else if (fareDistance > 2000 && fareDistance < 2500) {
        return (25);
    } else {
        return (`cannot travel that far`);
    }
}