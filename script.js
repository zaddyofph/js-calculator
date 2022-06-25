let chooseOperator = window.prompt("choose an operator: ");
let first = window.prompt('enter a first number: ');
let second = window.prompt('enter a second number: ');

if (chooseOperator === "+"){
    let add = parseInt(first) + parseInt(second);
    console.log(add);
    alert(add);
}

else if (chooseOperator === "-"){
    let subtract = parseInt(first) - parseInt(second);
    alert(subtract);
}
else if (chooseOperator === "*"){
    let multiply = parseInt(first) * parseInt(second);
    alert(multiply);
}
else if (chooseOperator === "/"){
    let divide = parseInt(first) / parseInt(second);
    alert(divide);
}
else{
    chooseOperator;
}
