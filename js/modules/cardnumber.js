export default function(){
  const cardInputNumber = document.getElementById('CardNumberInput');

  //kontrola wprowadzonego znaku
  cardInputNumber.addEventListener('keypress', (event) => {
    
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];

    if (!allowedKeys.includes(event.key) && (event.key < '0' || event.key > '9')) {
      event.preventDefault();
    }
  });

  //wstawienie co 4 znak przerwy oraz ograniczenie do 16 znaków 
  cardInputNumber.addEventListener('input', (event)=>{
    let inputValue = event.target.value.replace(/\s+/g, '');

    if (inputValue.length > 16) {
      inputValue = inputValue.substring(0, 16);
    }

    inputValue = inputValue.replace(/(.{4})/g, '$1 ');

    inputValue = inputValue.trim();

    event.target.value = inputValue;
  })
//Koniec edycji wyglądu Input Card Number
}