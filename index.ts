import {question} from 'readline-sync';

type Operator = '+'|'-'|'*'|'/';

function main() {

    const firstStr: string = question("Enter first number: \n");
    const operator: string = question("Enter Operator: \n");
    const secondStr: string = question("Enter Second number: \n");

    const validInputs : boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if(validInputs){
        const firstNum : number = parseInt(firstStr);
        const secondNum : number = parseInt(secondStr);
        const result = calculate(firstNum ,secondNum, operator as Operator);
        console.log("= " + result);
    }else{
        console.log('\n invalid inputs, please do it again ');
        main();
    }
}

function isNumber(str: string): boolean {
    const maybeNum = parseInt(str)
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

function isOperator(operator : string): boolean{
    switch(operator){
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function calculate(firstNum:number ,secondNum: number, operator: Operator){

    switch(operator){
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}

main();