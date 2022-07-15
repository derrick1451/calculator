//create variables to store data
const number = document.querySelectorAll('.number')
const display = document.querySelector('.text-area')
const operator = document.querySelectorAll('.eqn')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
//variable for storing the first insered number
let currentNum = '';
let previousNum = '';
let operation = '';
//create a function to display the numbers on the screen
number.forEach(button =>{
    button.addEventListener('click',(e)=>{
        let target = e.target.innerText
        //handle(target)
        if(currentNum.length <= 11){
            currentNum += target
            display.innerText = currentNum;
        }
    })
});
//function to handle the operator
operator.forEach(op =>{
    op.addEventListener('click',(e)=>{
        let target = e.target.innerText;
        operation = target;
        previousNum = currentNum;
        display.innerText = previousNum + ' ' + target;
        currentNum = ''
        
    })
})

equals.addEventListener('click',()=>{
    //clear button to return nothing is previous value and current value is an empty string
    if(currentNum != '' && previousNum != ""){
        calculate()
    } 
})
function calculate(){
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)
    if(operation === '+'){
        previousNum = previousNum + currentNum;
    }else if(operation === '-'){
        previousNum = previousNum - currentNum;
    }else if(operation === '/'){
        previousNum = previousNum / currentNum
    }else if(operation === '*'){
        previousNum = previousNum * currentNum
    }
    //operation = '';
    
    //here the current number is updated to become the previous value which is the answer
    currentNum = previousNum;
    display.innerText = round(previousNum)
}
// add an event listner on the clear button
clear.addEventListener('click',()=>{
    previousNum = ''
    currentNum = ''
    display.innerText = '0'
})
function round(number){
    return Math.round(number*100000)/100000
};