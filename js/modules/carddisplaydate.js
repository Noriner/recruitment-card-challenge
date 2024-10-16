export default function(){
    const cardMonthInput = document.getElementById('CardMonthInput');
    const cardYearInput = document.getElementById('CardYearInput');

    const cardMonthDisplay = document.getElementById('MonthDisplay');
    const cardYearDisplay = document.getElementById('YearDisplay');

    cardMonthDisplay.textContent = 'MM';
    cardYearDisplay.textContent = 'YY';

    cardMonthInput.addEventListener('change', (event) => {
        const selectValue = event.target.value;
        
        if (selectValue =='') {
            cardMonthDisplay.textContent = 'MM';
        } else {
            cardMonthDisplay.textContent = selectValue;
        }
    });

    cardYearInput.addEventListener('change', (event) => {
        const selectValue = event.target.value;
        
        if (selectValue =='') {
            cardYearDisplay.textContent = 'YY';
        } else {
            cardYearDisplay.textContent = selectValue.slice(-2);
        }
    });
}