let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');

openShopping.addEventListener('click', ()=> {
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Chicken thighs fried in butter',
        image: '../images/dui-ga-chien-bo.png',
        price: 100000
    },

    {
        id: 2,
        name: 'Spicy cheese grilled chicken rice',
        image: '../images/com-ga-nuong-pho-mai-cay.jpg',
        price: 120000
    },

    {
        id: 3,
        name: 'Kimchi rice',
        image: '../images/com-chien-kim-chi-a0fb68c1-0755-45b5-bd6a-907e99f65ee5.jpg',
        price: 80000
    },

    {
        id: 4,
        name: 'Rice mixed with pork and mushroom',
        image: '../images/com-tron-hai-san.jpg',
        price: 150000
    },

    {
        id: 5,
        name: 'Oil-fried chicken thighs',
        image: '../images/dui-ga-kfc.png',
        price: 170000
    },

    {
        id: 6,
        name: 'Koreas mixed noodle',
        image: '../images/dui-ga-chien-cay.png',
        price: 200000
    },

];
const ListCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
           <img src="../images/${value.image}"/>
        `;
        list.appendChild(newDiv);
    });   
}
initApp();
