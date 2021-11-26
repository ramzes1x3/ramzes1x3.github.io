var btnAddBox = document.getElementsByClassName("button_add_box");
var iceItem = document.querySelectorAll(".assortiment-list > li");
var basket = document.querySelector(".basket_list");
var btnBasket = document.querySelectorAll(".button-basket");
var sumOfProduct = document.querySelector(".sum_of_product");
var userBasket = document.querySelector('.out_basket');
var basketWithIce = document.querySelector('.user-navigation-button-basket');
var numSumOfProduct = 0;
var counterInBox = 0;

function sumOfBasket(){
    var iceInBasket = document.querySelectorAll('.price_of_ice');
    if(counterInBox === 0){
        if(document.querySelector('.text-full-basket')){
            document.querySelector('.text-full-basket').remove();
        }
        sumOfProduct.innerHTML = 0;
        basket.insertAdjacentHTML('afterbegin', '<div class = "no_product_in_basket"><div class = "inner">Товара в корзине нет</div></div>');
        userBasket.insertAdjacentHTML('afterend', '<span class = "text-void-basket">Пусто</span>');
        document.querySelector('.ice_in_basket_icon').remove();
        basketWithIce.style.background = "rgba(255,255,255,0.2)";
        basketWithIce.style.color = "#ffffff";
    }
    else{
        if(!document.querySelector('.text-full-basket')){
            userBasket.insertAdjacentHTML('afterbegin', '<span class = "text-full-basket"><span class = "quantity"></span></span>');
            basketWithIce.insertAdjacentHTML('afterbegin', '<div class="ice_in_basket_icon"></div>');
            basketWithIce.style.background = "#f8f7f4";
            basketWithIce.style.color = "#000000";
            document.querySelector('.quantity').textContent = counterInBox + ' товар';
            if(document.querySelector('.text-void-basket')){
                document.querySelector('.text-void-basket').remove();
            }
        }
        else{
            if(counterInBox < 5) document.querySelector('.quantity').textContent = counterInBox + ' товара';
            else if(counterInBox >= 5) document.querySelector('.quantity').textContent = counterInBox + ' товаров';
        }

        if(document.querySelector('.no_product_in_basket')){
            document.querySelector('.no_product_in_basket').remove();
        }
        numSumOfProduct = 0;
        for(var i = 0; i < iceInBasket.length; i++){
            numSumOfProduct += parseInt(iceInBasket[i].textContent);
        }

        sumOfProduct.innerHTML = numSumOfProduct;
    }
}

function delItems(iceClass) {
    for(var j = 0; j < iceItem.length; j++){
        if(iceClass.value == iceItem[j].classList[0]){
            var delIce = document.querySelector('.' + iceClass.value);
            delIce.remove();
            counterInBox--;
        }
    }
    sumOfBasket();
}

window.onload = function() {
    document.querySelector('.catalog-navigation-item').style.background = "#d07058";
    document.querySelector('.catalog-navigation-item').style.color = "#ffffff";

    function addItem() {
        for(var i = 0; i < iceItem.length; i++){
            if(iceItem[i].className == this.value){
                if(i === 0){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item orange-ice"></li>');
                    var item0 = document.querySelector(".orange-ice");
                    item0.insertAdjacentHTML('afterbegin', '<div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">310</span> руб.</div>');
                    item0.insertAdjacentHTML('afterbegin', '<div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text"> 200 руб.</span></p></div>');
                    item0.insertAdjacentHTML('afterbegin', '<div class = "basket-item-row basket-item-row-text">Пломбир с апельсиновым джемом</div>');
                    item0.insertAdjacentHTML('afterbegin', '<div class = "basket-item-row basket_img basket-img1"></div>');
                    item0.insertAdjacentHTML('afterbegin', '<button class = "button button-basket" value = "orange-ice" type = "button" onclick="delItems(this)"></button>');
                }
                else if (i === 1){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item chocolate-ice"><button class = "button button-basket" value = "chocolate-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img2"></div><div class = "basket-item-row basket-item-row-text">Сливочно-кофейное с кусочками <br>шоколада</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">380</span> руб.</div></li>');
                }
                else if (i === 2){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item strawberry-ice"><button class = "button button-basket" value = "strawberry-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img3"></div><div class = "basket-item-row basket-item-row-text">Клубничный пломбир с присыпкой<br> из белого шоколада</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">355</span> руб.</div></li>');
                }
                else if (i === 3){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item creme-brulee-ice"><button class = "button button-basket" value = "creme-brulee-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img4"></div><div class = "basket-item-row basket-item-row-text">Сливочное крем-брюле с <br>карамельной подливкой</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">415</span> руб.</div></li>');
                }
                else if (i === 4){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item lingonberry-ice"><button class = "button button-basket" value = "lingonberry-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img5"></div><div class = "basket-item-row basket-item-row-text">Сливочное с брусничным<br> джемом</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">325</span> руб.</div></li>');
                }
                else if (i === 5){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item blueberries-ice"><button class = "button button-basket" value = "blueberries-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img6"></div><div class = "basket-item-row basket-item-row-text">Сливочно-черничное с цельными<br> ягодами черники</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">410</span> руб.</div></li>');
                }
                else if (i === 6){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item lemon-ice"><button class = "button button-basket" value = "lemon-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img7"></div><div class = "basket-item-row basket-item-row-text">Сливочно-лимонное с <br>карамельной присыпкой</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">375</span> руб.</div></li>');
                }
                else if (i === 7){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item chocolate-chips-ice"><button class = "button button-basket" value = "chocolate-chips-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img8"></div><div class = "basket-item-row basket-item-row-text">Сливочное с шоколадной <br>стружкой</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">320</span> руб.</div></li>');
                }
                else if (i === 8){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item vanilla-ice"><button class = "button button-basket" value = "vanilla-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img9"></div><div class = "basket-item-row basket-item-row-text">Сливочно-ванильное с <br>кусочками шоколада</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">440</span> руб.</div></li>');
                }
                else if (i === 9){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item menthol-ice"><button class = "button button-basket" value = "menthol-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img10"></div><div class = "basket-item-row basket-item-row-text">Сливочноe с ментоловым <br>сиропом</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">435</span> руб.</div></li>');
                }
                else if (i === 10){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item dark-chocolate-ice"><button class = "button button-basket" value = "dark-chocolate-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img11"></div><div class = "basket-item-row basket-item-row-text">Сливочное с кусочками черного<br> шоколада</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">355</span> руб.</div></li>');
                }
                else if (i === 11){
                    basket.insertAdjacentHTML('afterbegin', '<li class = "basket-item mint-ice"><button class = "button button-basket" value = "mint-ice" type = "button" onclick="delItems(this)"></button><div class = "basket-item-row basket_img basket-img12"></div><div class = "basket-item-row basket-item-row-text">Сливочное с мятным сиропом</div><div class = "basket-item-row basket-item-row-price"><p>1,5 кг x <span class = "basket-item-text">300 руб.</span></p></div><div class = "basket-item-row basket-item-row-sum"><span class = "price_of_ice">420</span> руб.</div></li>');
                }
                counterInBox++;
                btnBasket = document.querySelectorAll(".button-basket");
            }
        }
        sumOfBasket();
    }

    for(var i = 0; i < btnAddBox.length; i++){
        btnAddBox[i].onclick = addItem;
    }
}