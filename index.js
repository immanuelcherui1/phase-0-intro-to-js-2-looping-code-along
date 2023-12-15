// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrappedGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
        debugger;
    }
    return gifts;
}

wrappedGifts(gifts);


function writeCards(names, message) {
    const messages = []
    for (let counter = 0; counter < names.length; counter++) {
        messages.push(`Thank you, ${names[counter]}, for the wonderful ${message} gift!`);
    }
    return messages;
}

console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}