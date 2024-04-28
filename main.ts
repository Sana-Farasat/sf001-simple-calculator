import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright.bold("\n\t\t ___Simple Calculator___ \t\n"));

let condition=true;

while(condition){
const answer= await inquirer.prompt([{
    name: "firstnumber",
    type: "number",
    message: chalk.greenBright("\n Enter your first number")},

    {name: "secondnumber",
    type: "number",
    message: chalk.greenBright("\n Enter your second number")},
     
     {name:'operator',
     type: 'list',
     message: chalk.greenBright('\n select one of the operator to perform operations') ,
     choices: ["Addition", "Subtraction", "Multiplication", "Division" , "Exponent" , "Modulus"],
  },
  ]);

 // console.log(answer.operator);
 //conditional operators
  
 if (answer.operator === "Addition" ){
      console.log(chalk.magentaBright("\n Your addition answer is" , answer.firstnumber + answer.secondnumber))
    }else if (answer.operator === "Subtraction" ){
       console.log(chalk.magentaBright("\n Your subtraction answer is" , answer.firstnumber - answer.secondnumber))
    }else if(answer.operator === "Multiplication"){
      console.log(chalk.magentaBright("\n Your multiplication answer is" , answer.firstnumber * answer.secondnumber))
    }else if(answer.operator === "Division"){
      console.log(chalk.magentaBright("\n Your diviion answer is" , answer.firstnumber / answer.secondnumber))
    }else if(answer.operator === "Exponent"){
      console.log(chalk.magentaBright("\n Your exponent answer is" , answer.firstnumber ** answer.secondnumber))
    }else if(answer.operator === "Modulus"){
      console.log(chalk.magentaBright("\n Your modulus answer is" , answer.firstnumber % answer.secondnumber))
    }else{
      console.log(chalk.redBright("\n Please select a valid operator"))
    };
    let condition2=await inquirer.prompt(
    {name:'continue',
       type:'confirm',
       message:chalk.greenBright('\n Do you want to continue?'),
       default:'false'
    });
    condition=condition2.continue
    };
    console.log(chalk.magentaBright.italic("\n\t\t ....The End.... \t\n "));
      
