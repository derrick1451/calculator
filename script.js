const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

//add eventlistener to each button

buttons.forEach(function(button)
{
    button.addEventListener('click', calculate);
});
function calculate(e){
    //current clicked butttons value
    const clickedButtonValue = e.target.value;
    if(clickedButtonValue === "="){
        //check if the display is not empty then only do the calculation
        if(display.value !== ''){
            //calculate and show the answer on the display
            display.value = (display.value);
        }
    } else if(clickedButtonValue === "c"){
        //clear everything on display
        display.value = '';

    }else{
        //otherwise concatenate it to the display
        display.value  += clickedButtonValue;
    }

}