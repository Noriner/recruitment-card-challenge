export default function(){
    const cardCvvInput = document.getElementById('CVV');
    const cardCvvDisplay = document.getElementById('CvvDisplay');

    cardCvvInput.addEventListener('input', (event) =>{
        const inputValue = event.target.value;

        if (inputValue == ''){
            cardCvvDisplay.textContent ='';
        } else {
            cardCvvDisplay.textContent = inputValue;
        }
    })
}