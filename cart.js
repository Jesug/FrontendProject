const openCart = document.getElementById("cart");
const dashboardOrder = document.querySelector(".dashboard-order");
const closed = document.getElementById("closed");
const dashboard = document.querySelector(".dashboard");
const body = document.querySelector("body");

openCart.addEventListener("click", ()=> {
    body.classList.add("active");
});

closed.addEventListener("click", ()=> {
    body.classList.remove("active");
});


const product = [
    {
        id: 0,
        image: 'images/chips2.jpg',
        title: 'Chicken and Chips',
        description: 'lorem ipsum dolor sit',
        price: 40,
        duration: '15-30 mins',
    },
    {
        id: 1,
        image: 'images/hamburger.jpg',
        title: 'Beef Burger',
        description: 'lorem ipsum dolor sit',
        price: 15,
        duration: '15-30 mins',
    },
    {
        id: 2,
        image: 'images/dessert5.jpeg',
        title: 'Chocolate Dessert',
        description: 'lorem ipsum dolor sit',
        price: 25,
        duration: '15-30 mins',
    },
    {
        id: 3,
        image: 'images/pancake2.jpg',
        title: 'Pancake',
        description: 'lorem ipsum dolor sit',
        price: 30,
        duration: '15-30 mins',
    },
    {
        id: 4,
        image: 'images/pasta2.jpg',
        title: 'Pasta',
        description: 'lorem ipsum dolor sit',
        price: 45,
        duration: '15-30 mins',
    },
    {
        id: 5,
        image: 'images/ChickenNuggets.jpg',
        title: 'Chicken Nugget',
        description: 'lorem ipsum dolor sit',
        price: 35,
        duration: '15-30 mins',
    },
    {
        id: 6,
        image: 'images/sandwich.jpg',
        title: 'Sandwich',
        description: 'lorem ipsum dolor sit',
        price: 30,
        duration: '15-30 mins',
    },
    {
        id: 7,
        image: 'images/pizza.jpg',
        title: 'Pizza',
        description: 'lorem ipsum dolor sit',
        price: 50,
        duration: '15-30 mins',
    },
    {
        id: 8,
        image: 'images/dessert8.jpg',
        title: 'Cake',
        description: 'lorem ipsum dolor sit',
        price: 60,
        duration: '15-30 mins',
    },
    {
        id: 9,
        image: 'images/cocktail5.jpg',
        title: 'Cocktail',
        description: 'lorem ipsum dolor sit',
        price: 30,
        duration: '15-30 mins',
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, description, price, duration} = item;
    return(
        `<div class='board'>
        <div class='box'>
            <img class='images' src=${image}></img>
        <div class='product-over'>
        `+
        "<button class='btn-small' onclick='addToCart("+(i++)+")'>Add to Cart</button>"+
        `
        </div>        
        <div class='card-detail'>
        <h2>${title} <span> $${price}.00 </span></p>
        <p>${description}</p>
        <h4><span class="fas fa-clock"></span> ${duration}</h4></div>
        </div>
        </div>`
    )
}).join('')

var cart =[];

function addToCart(a){
    cart.push({...categories[a]});
    displayCart();
}

function delElement(a) {
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowImg' src=${image}>
                    </div>
                    <h2 style='font-size:14px;'>${title}</h2>
                    <h3>$${price}.00</h3>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
            );
        }).join('');
    }
}

