let pointsElHome = document.getElementById("points-el-home");
let homeCount = 0;

let pointsElGuest = document.getElementById("points-el-guest");
let guestCount = 0;

function homePlus2() {
    homeCount += 2;
    pointsElHome.textContent = homeCount;
}

function homePlus3() {
    homeCount += 3;
    pointsElHome.textContent = homeCount;
}

function homePlus5() {
    homeCount += 5;
    pointsElHome.textContent = homeCount;
}

function guestPlus2() {
    guestCount += 2;
    pointsElGuest.textContent = guestCount;
}

function guestPlus3() {
    guestCount += 3;
    pointsElGuest.textContent = guestCount;
}

function guestPlus5() {
    guestCount += 5;
    pointsElGuest.textContent = guestCount;
}

function newGame() {
    homeCount = 0;
    pointsElHome.textContent = homeCount;
    guestCount = 0;
    pointsElGuest.textContent = guestCount;
}