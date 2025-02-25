
// ------------- Funcation Of Navbar -------------
window.addEventListener("scroll", function()
{
    let navbar = document.querySelector(".fixed-top");
    let scroll = window.scrollY;
    if(scroll > 55)
    {
        navbar.classList.add("shadow");
    }else{
        navbar.classList.remove("shadow");
        navbar.style.top = "0";
    }

});
// --------------------------------------------------------------
/* -----------------------  Slider Funcation ----------------------- */
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides[currentSlide].style.display = 'block';

    setInterval(function() {
        changeSlide('next');  
    }, 4000);  


    document.getElementById('nextBtn').addEventListener('click', function() {
        changeSlide('next'); 
    });

   
    document.getElementById('prevBtn').addEventListener('click', function() {
        changeSlide('prev');  
    });

    
    function changeSlide(direction) {
        slides[currentSlide].style.display = 'none';  

        if (direction === 'next') {
            currentSlide = (currentSlide + 1) % totalSlides;  
        } else if (direction === 'prev') {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  
        }

        slides[currentSlide].style.display = 'block'; 
    }
});
// --------------------------------------------------------------
// --------------------------------------------------------------
// function addToCart(name, image, price) {
//     let quantity=1;
//     let cart = JSON.parse(sessionStorage.getItem("cart")) || []; 
//     cart.push({ name, image, price ,quantity}); 
//     sessionStorage.setItem("cart", JSON.stringify(cart)); 

//     alert("");
//     count++
// }

// function changeCartNumber()
// {
//     const cartCountElement = document.getElementById("cart-count");
//     cartCountElement = count;
//     if(cartCountElement>0){
//         cartCountElement.textContent = cartCountElement;
//         cartCountElement.style.display = "flex";       
//     }else{
//         cartCountElement.style.display = "none";
//     }
// }
// --------------------------------------------------------------
// ------------- Funcation To Add Proudact To Cart -------------
var count = 0;
function addToCart(name, image, price) {
    let quantity = 1;
    let cart = JSON.parse(sessionStorage.getItem("cart")) || []; 
    
    let existingProduct = cart.find(item => item.name === name);
    
    if (existingProduct) {
        existingProduct.quantity += 1; 
    } else {
        cart.push({ name, image, price, quantity });
        count++; 
    }
    
    sessionStorage.setItem("cart", JSON.stringify(cart)); 
    alert("The product has been added to the cart ✅");

    changeCartNumber(); 
}
// --------------------------------------------------------------
// ------------- Funcation To Change Cart Number -------------

function changeCartNumber() {
    const cartCountElement = document.getElementById("cart-count");
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
    
    if (totalItems > 0) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = "flex";       
    } else {
        cartCountElement.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", changeCartNumber);
