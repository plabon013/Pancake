
/* Selecting Pancake type */
const pancakeType = document.querySelector('#type');

/* All the toppings declared individually */
const nuts = document.querySelector('#nuts');
const bananas = document.querySelector('#bananas');
const syrup = document.querySelector('#syrup');
const whippedCream = document.querySelector('#whippedCream');
const iceCream = document.querySelector('#iceCream');

const eatIn = document.querySelector('#eat-in');
const pickUp = document.querySelector('#pick-up');
const delivery = document.querySelector('#delivery');

const inputCName = document.querySelector('#customer-name');
const displayCName = document.querySelector('.order-info .c-name');
const displayCakeType = document.querySelector('.order-info .cake-type');
const displayToppings = document.querySelector('.order-info .cake-top');
const displayExtras = document.querySelector('.order-info .cake-extra');
const displayDeliveryMethod = document.querySelector('.order-info .cake-delivery');
const displayTotalPrice = document.querySelector('.order-info .cake-price');

const showButton = document.querySelector('#show-button');
const displaySummary = document.querySelector('.order-info');


/* Declared two variables for the final prices */
const bannerPrice = document.querySelector('.price-banner #totalPrice');
const displayPrice = document.querySelector('.price-display #totalPrice');

/* Declared priceAnimate for the animation */
const priceAnimate = document.querySelector('.price-banner span');


function updatePrice() {

    const initPrice = +(pancakeType.value);

    let finalPrice = initPrice;

    if (nuts.checked) {
        finalPrice += +(nuts.value);
    }
    if (bananas.checked) {
        finalPrice += +(bananas.value);
    }
    if (syrup.checked) {
        finalPrice += +(syrup.value);
    }
    if (whippedCream.checked) {
        finalPrice += +(whippedCream.value);
    }
    if (iceCream.checked) {
        finalPrice += +(iceCream.value);
    }
    if (eatIn.checked) {
        finalPrice += +(eatIn.value);
    }
    if (pickUp.checked) {
        finalPrice += +(pickUp.value);
    }
    if (delivery.checked) {
        finalPrice += +(delivery.value);
    }

    bannerPrice.textContent = `$${finalPrice}`;
    displayPrice.textContent = `$${finalPrice}`;

    priceAnimation();

}

function showCustomerSummary() {
    displayCName.textContent = inputCName.value;
    inputCName.value = '';

    displayCakeType.textContent = pancakeType.options[pancakeType.selectedIndex].text;

    /* Toppings */
    let toppings = [];
    if (nuts.checked) {
        toppings.push('Nuts');
    }
    if (bananas.checked) {
        toppings.push('Bananas');
    }
    if (syrup.checked) {
        toppings.push('Syrup');
    }
    if (toppings.length > 0) {
        displayToppings.textContent = toppings.join(', ');
    }

    /* Extras part */
    let extras = [];
    if (whippedCream.checked) {
        extras.push('Whipped Cream');
    }
    if (iceCream.checked) {
        extras.push('Icecream');
    }
    if (extras.length > 0) {
        displayExtras.textContent = extras.join(', ');
    }

    /* Delivery Method */
    let deliveryMethod = '';
    if (eatIn.checked) {
        deliveryMethod = 'Eat In';
    } else if (pickUp.checked) {
        deliveryMethod = 'Pick Up';
    } else if (delivery.checked) {
        deliveryMethod = 'Home Delivery';
    }
    displayDeliveryMethod.textContent = deliveryMethod;

    /* Show Price */
    displayTotalPrice.textContent = bannerPrice.textContent;

    displaySummary.style.display = 'block';


    let orders = [
        displayCName.textContent,
        displayCakeType.textContent,
        displayToppings.textContent,
        displayExtras.textContent,
        displayDeliveryMethod.textContent,
        displayTotalPrice.textContent,
    ];
    console.log(orders);


}

pancakeType.addEventListener('change', updatePrice);
nuts.addEventListener('change', updatePrice);
bananas.addEventListener('change', updatePrice);
syrup.addEventListener('change', updatePrice);
whippedCream.addEventListener('change', updatePrice);
iceCream.addEventListener('change', updatePrice);
eatIn.addEventListener('change', updatePrice);
pickUp.addEventListener('change', updatePrice);
delivery.addEventListener('change', updatePrice);
showButton.addEventListener('click', showCustomerSummary);
