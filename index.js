alert("Welcome to My Simple Calculator. Click 'OK' to start");
const firstNumber = parseFloat(prompt('Enter First Number:'));
const operator = prompt('Enter operator as +,   -,   /,   * ' );
const secondNumber = parseFloat(prompt('Enter Second Number:'));


let result = 0;
if(isNaN(firstNumber) || isNaN(secondNumber)){
    alert('Wrong Input! Refresh the page and provide a valid number')
}else{
    if(operator== '+'){
        result = firstNumber + secondNumber;
    }else if(operator == '-'){
        result = firstNumber - secondNumber;
    }else if(operator == '/'){
        result = firstNumber / secondNumber;
    }else if(operator == '*'){
        result = firstNumber * secondNumber;
    }
    alert(firstNumber+operator+secondNumber+'=' + result);
    alert("Thank you for your time.");
}