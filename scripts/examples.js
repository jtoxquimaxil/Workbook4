function printEmployeeAndPay(emp) {
    console.log("Name: " + emp.name);
    console.log("Pay: " + emp.payRate);
   }
   let emp1 = {
    employeeId: "1", 
    name: "Ezra", 
    jobTitle: "Theater Teacher", 
    payRate: 38.46
    };
   let emp2 = {
    employeeId: "2", 
    name: "Elisha", 
    jobTitle: "Game Programmer", 
    payRate: 43.27
    };
   printEmployeeAndPay(emp1);
   printEmployeeAndPay(emp2);

////////////////////////////////////////////

function createPayStub(id, name, payRate, hoursWorked) {
    let grossPay = 0;
    if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
    }
    else {
    grossPay = (40 * payRate) +
    ((hoursWorked - 40) * 1.5 * payRate);
    }
    let payStub = {
    employeeId: id, 
    name: name, 
    grossPay: grossPay
    };
    return payStub;
   }
   let emp1PayStub = 
    createPayStub("1", "Ezra", 38.46, 49);
   console.log(emp1PayStub.name + " earned $" + 
    emp1PayStub.grossPay.toFixed(2));
   let emp2PayStub = 
    createPayStub("2", "Elisha", 43.27, 42);
   console.log(emp2PayStub.name + " earned $" + 
    emp2PayStub.grossPay.toFixed(2));