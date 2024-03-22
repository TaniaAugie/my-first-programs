function generatePyramid() {
  const rows = document.getElementById("rowsInput").value;
  let pyramidHtml = "";
  for (let rowNum = 1; rowNum <= rows; rowNum++) {
    let rowHtml = "";
    for (let spaceNum = 1; spaceNum <= rows - rowNum; spaceNum++) {
      rowHtml += '<div class="block"></div>';
    }

    pyramidHtml += rowHtml + "<br>";
  }
  document.getElementById("pyramidOutput").innerHTML = pyramidHtml;
}
