export default function(){
  const cardHolderInput = document.getElementById('CardHolderInput');
  const cardHolderDisplay = document.getElementById('CardHolderDisplay');

  cardHolderDisplay.textContent = 'Jan Kowalski';

  cardHolderInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    
    if (inputValue == '') {
      cardHolderDisplay.textContent = 'Jan Kowalski';
    } else {
      cardHolderDisplay.textContent = inputValue;
    }
  });
}