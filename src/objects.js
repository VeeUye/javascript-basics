const createPerson = (name, age) => {
  const obj = { name, age };
  return obj;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(object => object.age);
};

const findByName = (name, people) => {
  return people.find(object => object.name === name);
};

const findHondas = cars => {
  return cars.filter(entry => {
    return entry.manufacturer === 'Honda';
  });
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
