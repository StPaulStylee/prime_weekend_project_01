var app = angular.module('basicApp', []);

app.controller('basicController', function(){
    console.log('basicController loaded');
    var self = this;

    self.employees = []; //Holds all of our created employees

    self.createEmployee = function () {
      console.log('Submitted Employee', self.employee);
      self.employees.push(angular.copy(self.employee));
    }
    self.deleteEmployee = function(employee) {
      var index = self.employees.indexOf(employee);
      self.employees.splice(index, 1);
    }

    self.getTotal = function () {
      console.log('Employees Array', self.employees);
      var monthlyTotal = 0;
      for (var i = 0; i < self.employees.length; i++) {
        var annualSalary = self.employees[i].salary;
        monthlyTotal += (annualSalary/12).toFixed(2);
      }
      return monthlyTotal;
    }
});//End of app.controller
