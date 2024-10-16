export default function(){
  const cardNumberInput = document.getElementById('CardNumberInput');
  const cardNumberDisplay = document.getElementById('CardNumberDisplay');

  cardNumberDisplay.textContent = '#### #### #### ####';

  cardNumberInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    
    if (inputValue == '') {
      cardNumberDisplay.textContent = '#### #### #### ####';
    } else {
      cardNumberDisplay.textContent = inputValue;
    }
  });
}