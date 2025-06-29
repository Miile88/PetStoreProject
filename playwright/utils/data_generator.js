
function generateString() {
    return Math.random().toString(36).substring(2);
}

function generateNumber() {
    return Math.floor(Math.random() * 100)+50;
}

function generateRandomDigit(length = 9) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10) + 1).join('');
}

function generateNumber0to10() {
  return Math.floor(Math.random() * 11); 
}

function generateRandomISODate() {
  const year = 2023 + Math.floor(Math.random() * 3); 
  const month = Math.floor(Math.random() * 12);    
  const day = Math.floor(Math.random() * 28) + 1;    
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);
  const ms = Math.floor(Math.random() * 1000);

  const date = new Date(Date.UTC(year, month, day, hour, minute, second, ms));
  return date.toISOString();
}


function generateStatus() {
    const status = [ "placed", "approved", "delivered" ];
    const randomIndex = Math.floor(Math.random() * status.length);

    return status[randomIndex];
}
function generateCompletion() {
    var status = [true, false];
    var randomIndex = Math.floor(Math.random() * status.length);

    return status[randomIndex];
}
module.exports = { generateString,generateNumber,generateRandomDigit,generateNumber0to10,generateRandomISODate,generateStatus,generateCompletion};





