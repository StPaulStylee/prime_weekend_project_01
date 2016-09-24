$(document).ready(function () {
  $('#employeeInfo').on('submit', function(event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employeeInfo').serializeArrary();
    console.log('fields', fields);

    fields.forEach()
  });
});
