function calculateNumberOfDays() {
    var checkin = new Date(document.getElementById('checkin').value);
    var checkout = new Date(document.getElementById('checkout').value);
    var timeDiff = checkout - checkin;
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    document.getElementById('totalDays').value = daysDiff;
    calculateTotal();
}

function calculateTotal() {
    var totalDays = parseInt(document.getElementById('totalDays').value);
    var totalPersons = parseInt(document.getElementById('totalPersons').value);
    var perPersonCost = parseFloat(document.getElementById('perPersonCost').value);
    var deluxRate = 100;
    var suiteRate = 150;
    var acCost = document.getElementById('ac').checked ? 20 : 0;
    var lockerCost = document.getElementById('locker').checked ? 10 : 0;
    var roomType = document.getElementById('roomType').value;

    var roomCost = (roomType === 'delux') ? (deluxRate * totalDays) : (suiteRate * totalDays);
    var amenitiesCost = (acCost + lockerCost) * totalDays;
    var totalRoomCost = roomCost + amenitiesCost;
    var totalAmount = totalRoomCost + (perPersonCost * totalPersons);

    document.getElementById('total').value = totalAmount.toFixed(2);

    calculateRemainingAmount();
}

function calculateRemainingAmount() {
    var totalAmount = parseFloat(document.getElementById('total').value);
    var advance = parseFloat(document.getElementById('advance').value);
    var remainingAmount = totalAmount - advance;

    document.getElementById('balance').value = remainingAmount.toFixed(2);
}

function validateForm() {
    var name = document.getElementById('name').value;
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;
    var totalPersons = document.getElementById('totalPersons').value;
    var advance = document.getElementById('advance').value;

    if (name === "" || checkin === "" || checkout === "" || totalPersons === "" || advance === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    alert("Your booking is confirmed!");
    return true;
}