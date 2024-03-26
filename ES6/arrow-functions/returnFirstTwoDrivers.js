// Refactor the function returnFirstTwoDrivers() to use arrow function syntax.

function returnFirstTwoDrivers() {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
}

const returnFirstTwoDrivers = () => {
  const drivers = ["Salley", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
};
