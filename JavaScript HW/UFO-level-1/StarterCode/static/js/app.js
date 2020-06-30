function buildTable(tData) {
  var tbody = d3.select("tbody");
  tData.forEach((sighting) => {
    var newRow = tbody.append('tr');

    Object.entries(sighting).forEach(([k,v]) => {

      newRow.append('td').text(v)
    });
  });

}
// Initial build of table
buildTable(data)

var form = d3.select('.form-group');
var button = d3.select("#filter-btn");
button.on("click", onSubmit);
form.on('submit', onSubmit);
//-------------------------------------------------------------
function onSubmit() {
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");


  console.log(inputValue);

  function filterByInput(selection) {
    return selection.datetime === inputValue;
  }
  var newTable = data.filter(filterByInput);
  console.log(newTable);
  var tbody = d3.select("tbody");
  tbody.html('')


  buildTable(newTable);
}
