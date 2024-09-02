import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GDB: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GDB', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter to currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GDB', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
