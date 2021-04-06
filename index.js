// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(gue, messa){
    const messaArray = [];
    for (let i = 0; i < gue.length; i++){
        messaArray.push(`Thank you, ${gue[i]}, for the wonderful ${messa} gift!`);
    }
    return messaArray;
}

function countDown(numb){
    while (numb >= 0){
        console.log(numb);
        numb--;
    }
}

