#! /usr/bin/env node
// this above line is called SHABANg that defines which intrepretor its need to execute. maks binary file to execute code
///change version to 1.0.1 in package jason
/// we need to add after in package jason" bin " = "index.js",
// n other laptop with help of   npx sas-simple-calculator    we can run this code
//  version changes 1.0.0 , 2.0.0 first number is major change like adding new feature in code script , 1.1.0 second number is  addition in code script and 1.0.1 third number is to fix typo in script
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter First Number" ,type: "number", name:"firstnumber"},
    {message:"Enter Second Number",type: "number", name:"secondnumber"},
    {message:"Select One Of The Operators To Perform Operation",
     type:"list",
     name:"operator",
     choices:["Addition","Subtraction","Multiplication","Division"],}]);
     // conditionalstatment
     if(answer.operator === "Addition"){
        console.log("Your Value is =" , answer.firstnumber + answer.secondnumber)}
        else if(answer.operator === "Subtraction"){
         console.log("Your Value is =", answer.firstnumber - answer.secondnumber)}
         else if(answer.operator === "Multiplication"){
            console.log("Your Value is =" , answer.firstnumber * answer.secondnumber)}
            else if(answer.operator === "Division"){
               console.log("Your Value is =" , answer.firstnumber/ answer.secondnumber)} 
               else(
                  console.log("Please Select Valid Operator"));
     