function generatePyramid() {
  const rows = document.getElementById("rowsInput").ariaValueMax;
  let pyramidHTML = "";
  for (let rowNum = 1; rowNum <= rows; rowNum++) {
    let rowHTML = "";
    for (let spaceNum = 1; spaceNum <= rows - rowNum; spaceNum++) {
      rowHTML += '<div class="block"></div>';
    }
    for (let starNum = 1; starNum <= 2 * rowNum - 1; starNum++) {
      rowHTML += '<div class="block">*</div>';
    }
    pyramidHTML += rowHTML + "<br>";
  }
  document.getElementById("pyramidOutput").innerHTML = pyramidHTML;
}
