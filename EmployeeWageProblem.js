// UC 1 -- To check for the attendance of the employee
const IS_ABSENT = 0;
let employeeCheck = Math.floor((Math.random()*10) % 2);
if(employeeCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}
else
{
    console.log("Employee is Present");
}
// UC 2 -- Check for daily wage based on whether the employee is part time or full time
/**
 * * Constants for the type of employee allotted to 1 or 2
 * ! Starting point of the UC 2
 * * Other constant for number of hours for part time and full time services
 */
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHour = 0;
/**
 * * Random number generates a real number between 0 and 1(exclusive)
 * * switch case for checking the employee type
 * Then allocating the defined data of employee hourto the employee hour variable
 * In end calculating the total daily wage
 */
employeeCheck = Math.floor((Math.random()*10) % 3);
switch(employeeCheck)
{
    case IS_PART_TIME:
        employeeHour = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        employeeHour = FULL_TIME_HOURS;
        break;
    default:
        employeeHour = 0;
        break;
}
let employeeWage = employeeHour * WAGE_PER_HOUR;
console.log("Employee Wage :" + employeeWage);
