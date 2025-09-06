var products = [
    { name: "Car", headline: "1200cc Normal Car ", price: "106k", image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mercedze", headline: "1900cc Normal Car ", price: "150k", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Porche", headline: "1800cc Normal Car ", price: "140k", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mastang", headline: "1600cc Normal Car ", price: "180k", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Lambo", headline: "1400cc Normal Car ", price: "190k", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Hundai", headline: "800cc Normal Car ", price: "80k", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

var populars = [{ name: "Car", headline: "1200cc Normal Car ", price: "106k", image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Mercedze", headline: "1900cc Normal Car ", price: "150k", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Porche", headline: "1800cc Normal Car ", price: "140k", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Mastang", headline: "1600cc Normal Car ", price: "180k", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Lambo", headline: "1400cc Normal Car ", price: "190k", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Hundai", headline: "800cc Normal Car ", price: "80k", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

var cart = [];


function addProducts() {
    var clutter = "";
    products.forEach(function (obj, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover"src ="${obj.image}" alt ="product image"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                            <h4 class="font-semibold mt-2">$ ${obj.price}</h4>
                        </div>
                        <button data-index=${index} class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index=${index} class=" add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;


}

function addPopulars() {
    var clutter = "";
    populars.forEach(function (obj) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                        <div
                            class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                            <img class="w-full h-full object-cover" src="${obj.image}" alt="">
                        </div>
                        <div class="data py-2 w-full">
                            <h1 class="leading-none font-semibold">${obj.name}</h1>
                            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
                            <h4 class="mt-3 font-semibold text-zinc-500">$${obj.price}</h4>
                        </div>
                    </div>
                </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;


}

function addToCart() {
    document.querySelector(".products")
        .addEventListener("click", function (obj) {

            if (obj.target.classList.contains("add")) {
                cart.push(products[obj.target.dataset.index]);
            }
        })

}




addProducts();
addPopulars();
addToCart();
