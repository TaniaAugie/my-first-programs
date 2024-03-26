//Refactor the following code to use string template literals.

/* const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary(file) {
  return (
    "The file" + file.name + "." + file.extension + "is of size" + file.size
  );
} */

const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
