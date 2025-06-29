const {
  generateString,
  generateNumber,
  generateRandomDigit,
  generateNumber0to10,
  generateRandomISODate,
  generateStatus,
  generateCompletion
} = require('./data_generator');


function generateUser() {
  return {
    id: generateNumber(),
    username: `testuser${generateString()}`,
    firstname: generateString(),
    lastname: generateString(),
    email: `testuser${generateNumber()}@test.com`,
    password: `test${generateNumber()}`,
    phone: generateRandomDigit(),
    userStatus: generateNumber()
  };
}

 function generateOrder() {
  return {
    id: generateNumber(),
    petId: generateNumber(),
    quantity:generateNumber0to10(),
    shipDate:generateRandomISODate(),
    status:generateStatus(),
    complete:generateCompletion()
  };
}


module.exports = {
  generateUser,
  generateOrder
};