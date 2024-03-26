// Refactor the following code to use object destructuring assignment.

/* function addressMaker(address) {
  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States",
  };
} */

function addressMaker(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: "United States",
  };
}
