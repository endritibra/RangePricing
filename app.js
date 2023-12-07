let rangeSlider = document.querySelector('#range-slider');
let billing = document.querySelector('#billing');
let price = document.querySelector('#price');
let monthlyRate = [10, 30, 50];
let pageviewsTypes = ['100k+', '500k+', '1M+'];
let isAnnual = false;
let pageviews = document.querySelector('#pageviews');

price.innerHTML = monthlyRate[rangeSlider.value];

rangeSlider.oninput = function () {
    updateCosts();
};

billing.addEventListener('change', () => {
    isAnnual = !isAnnual; // Simplified toggle between true and false
    updateCosts();
});

const updateCosts = () => {
    pageviews.innerHTML = pageviewsTypes[rangeSlider.value];
    if (isAnnual) {
        price.innerHTML = Math.round(monthlyRate[rangeSlider.value] * 0.75);
    } else {
        price.innerHTML = monthlyRate[rangeSlider.value];
    }
};

console.log(price);
