// function addToCart(name, image, price) {
//     let cart = JSON.parse(sessionStorage.getItem("cart")) || []; 
//     let existingProduct = cart.find(item => item.name === name);

//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         cart.push({ name, image, price, quantity: 1 });
//     }

//     sessionStorage.setItem("cart", JSON.stringify(cart)); 
//     updateCartCount();
//     alert(""); 
// }

// function updateCartCount() {
//     let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
//     document.getElementById("cartCount").textContent = cart.length;
// }

// window.onload = updateCartCount;

// let cart =JSON.parse(sessionStorage.getItem("cart"));
// let tbody= document.getElementById("tbody");
// let totalPrice = 0;
// console.log(tbody)
// for(let item=0 ; item<cart.length ;item++ ){
//     tbody.innerHTML+=`<tr>
//                 <th scope="row">
//                     <div class="d-flex align-items-center">
//                         <img src="${cart[item].image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;">
//                     </div>
//                 </th>
//                 <td><p class="mb-0 mt-4">${cart[item].name}</p></td>
//                 <td><p class="mb-0 mt-4">$${cart[item].price}</p></td>
//                 <td>
//                     <div class="input-group quantity mt-4" style="width: 100px;">
                        
//                             <i class="fa fa-minus" id="loss" click="loss()"    ></i>

//                         </button>
//                         <input type="text" class="form-control form-control-sm text-center border-0" value="1" readonly id="input">
                   
//                             <i class="fa fa-plus" id="plus"></i>
//                         </button>
//                     </div>
//                 </td>
               
//                 <td>
                
//                         <i class="fa fa-times text-danger"></i>
//                     </button>
//                 </td>
//             </tr>`
// }

// let loss=document.querySelectorAll("#loss");
// let plus =document.querySelectorAll("#plus");
// let input=document.querySelectorAll("input");
// function loss () {
//     if (input.value > 0) {
//       input.value--;
//     }
// console.log("input")

    // for (let i = 0; i < input.length; i++) {
    //     loss[i].addEventListener("click", function () {
    //       if (input[i].value > 0) {
    //         input[i].value--;
    //       }
    //     });
    //     plus[i].addEventListener("click", function () {
    //         input[i].value++;
    //     });
// }




function displayCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let tableBody = document.querySelector("tbody");
    let totalPrice = 0;

    tableBody.innerHTML = ""; 

    if (cart.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='6' class='text-center'>The basket is empty</td></tr>";
        updateTotal(0);
        return;
    }

    cart.forEach((item, index) => {
        let totalItemPrice = (item.price * item.quantity).toFixed(2);
        totalPrice += parseFloat(totalItemPrice);

        let row = `
            <tr>
                <th scope="row">
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;">
                    </div>
                </th>
                <td><p class="mb-0 mt-4">${item.name}</p></td>
                <td><p class="mb-0 mt-4">$${item.price}</p></td>
                <td>
                    <div class="input-group quantity mt-4" style="width: 100px;">
                        <button class="btn btn-sm btn-minus rounded-circle bg-light border" onclick="updateQuantity(${index}, -1)">
                            <i class="fa fa-minus"></i>
                        </button>
                        <input type="text" class="form-control form-control-sm text-center border-0" value="${item.quantity}" readonly>
                        <button class="btn btn-sm btn-plus rounded-circle bg-light border" onclick="updateQuantity(${index}, 1)">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </td>
                <td><p class="mb-0 mt-4">$${totalItemPrice}</p></td>
                <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4" onclick="removeFromCart(${index})">
                        <i class="fa fa-times text-danger"></i>
                    </button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    updateTotal(totalPrice);
}


function updateQuantity(index, change) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart[index].quantity += change;

    if (cart[index].quantity < 1) {
        cart.splice(index, 1); 
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


function removeFromCart(index) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


function updateTotal(total) {
    document.getElementById("subtotal").textContent = `$${total.toFixed(2)}`;
    let shipping = total > 0 ? 3.00 : 0; 
    document.getElementById("shipping").textContent = `$${shipping.toFixed(2)}`;
    document.getElementById("total").textContent = `$${(total + shipping).toFixed(2)}`;
}

window.onload = displayCart;
