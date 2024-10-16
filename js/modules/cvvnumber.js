export default function(){
// Aktywacja odwrócenia karty po aktywowaniu elementu CVV
    const cvvInput = document.getElementById('CVV');
    const cardWrapper = document.querySelector('.card__wrapper');

    cvvInput.addEventListener('focus', () => {
        cardWrapper.classList.add('active');
        });
    
        cvvInput.addEventListener('blur', () => {
        cardWrapper.classList.remove('active');
        });
    // Koniec odwrócenia karty 

    //ograniczenie do cyfr
    cvvInput.addEventListener('keypress', (event) => {
    
        const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
    
      if (!allowedKeys.includes(event.key) && (event.key < '0' || event.key > '9')) {
        event.preventDefault();
      }
    });

    //ograniczenie do 3 elementów 
    cvvInput.addEventListener('input', (event)=>{    
        let inputValue = event.target.value.replace(/\s+/g, '');
        if (inputValue.length > 3) {
            inputValue = inputValue.substring(0, 3);
        }
        event.target.value = inputValue;
    })

   
}