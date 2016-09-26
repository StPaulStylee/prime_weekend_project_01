$(document).ready(function () {
  $('#employeeInfo').on('submit', function(event) {
    event.preventDefault();
/*Takes data from inputs and creats an array of objects with them.
The .forEach(); then takes each index object and creates a single
employee object. */
    var employee = {};

    var fields = $('#employeeInfo').serializeArray();
    console.log('fields', fields);

    fields.forEach(function (element, index) {
      employee[element.name] = element.value;
    });
    console.log('employee object', employee);
// Clears inputs after submission
    $('#employeeInfo').find('input[type=text]').val('');

    appendDom(employee);
    monthlySalary(employee);
  });
//Function that creates an <li> and appends the input data into list items
  function appendDom(emp) {
    var $emp = $('<li class="employee"</li>');
    $emp.append('<p>' + emp.employeeFirstName + '</p>');
    $('#a').append($emp);
    var $emp = $('<li class="employee"</li>');
    $emp.append('<p>' + emp.employeeLastName + '</p>');
    $('#b').append($emp);
    var $emp = $('<li class="employee"</li>');
    $emp.append('<p>' + emp.employeeID + '</p>');
    $('#c').append($emp);
    var $emp = $('<li class="employee"</li>');
    $emp.append('<p>' + emp.employeeTitle + '</p>');
    $('#d').append($emp);
    var $emp = $('<li class="employee"</li>');
    $emp.append('<p>' + emp.employeeSalary + '</p>');
    $('#e').append($emp);
  }
  var $sal = 0;
  function monthlySalary(sal) {
    //var $sal = $sal + salary input;
    var $para = $('<p id="monthly"></p>');
    $sal = ($sal + Math.round(sal.employeeSalary / 12));
    $para.append($sal);
    $('#monthlySalary').find('#monthly').remove();
    $('#monthlySalary').append($para);
  }
  $('.delete').on('click', function() {
    $('.employeeDataList').find('#first').find('#a').find('li:last').remove();
    $('.employeeDataList').find('#last').find('#b').find('li:last').remove();
    $('.employeeDataList').find('#id').find('#c').find('li:last').remove();
    $('.employeeDataList').find('#title').find('#d').find('li:last').remove();
    $('.employeeDataList').find('#salary').find('#e').find('li:last').remove();
  });
});
