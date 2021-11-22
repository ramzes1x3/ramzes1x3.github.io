var button1 = document.querySelector(".button-slider1");
var button2 = document.querySelector(".button-slider2");
var button3 = document.querySelector(".button-slider3");
var aboutIce = document.querySelector(".advertising-ice-cream");
var bodyMain = document.querySelector("body");

button1.addEventListener("click", function(evt){
    evt.preventDefault();

    aboutIce.innerHTML = "Пломбир с помадкой <br> и клубничный щербет";
    
    button1.style.backgroundColor = "#ffffff";
    button2.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    button3.style.backgroundColor = "rgba(255, 255, 255, 0.0)";

    button1.addEventListener('mouseenter', function(evt){
        evt.target.style.backgroundColor = '#ffffff';
    });
    button1.addEventListener('mouseleave', function(evt){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
        evt.target.style.backgroundColor = '#ffffff'; // Убираем выданный цвет
    });

    button2.addEventListener('mouseenter', function(evt){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'; // Выставляем цвет
      });
    button2.addEventListener('mouseleave', function(evt){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.0)'; // Убираем выданный цвет
    });
    button3.addEventListener('mouseenter', function(evt){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'; // Выставляем цвет
      });
    button3.addEventListener('mouseleave', function(evt){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.0)'; // Убираем выданный цвет
    });

    bodyMain.style.backgroundColor = "#9d8b84";
    bodyMain.style.backgroundImage = "url(/img/slider-1.png)";
});

button2.addEventListener("click", function(evt){
    evt.preventDefault();

    aboutIce.innerHTML = "Крем-брюле и пломбир <br> с малиновым джемом";

    button2.style.backgroundColor = "#ffffff";
    button1.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    button3.style.backgroundColor = "rgba(255, 255, 255, 0.0)";

    button2.addEventListener('mouseenter', function(evt){
        evt.target.style.backgroundColor = '#ffffff';
    });
    button2.addEventListener('mouseleave', function(evt){
        evt.target.style.backgroundColor = '#ffffff';
    });

    button1.addEventListener('mouseenter', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    });
    button1.addEventListener('mouseleave', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
    });
    button3.addEventListener('mouseenter', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      });
    button3.addEventListener('mouseleave', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
    });

    bodyMain.style.backgroundColor = "#849d8f";
    bodyMain.style.backgroundImage = "url(/img/slider-2.png)";
});

button3.addEventListener("click", function(evt){
    evt.preventDefault();

    aboutIce.innerHTML = "Шоколадный пломбир <br> и лимонный сорбет";

    button3.style.backgroundColor = "#ffffff";
    button1.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    button2.style.backgroundColor = "rgba(255, 255, 255, 0.0)";

    button3.addEventListener('mouseenter', function(evt){
        evt.target.style.backgroundColor = '#ffffff';
    });
    button3.addEventListener('mouseleave', function(evt){
        evt.target.style.backgroundColor = '#ffffff';
    });

    button1.addEventListener('mouseenter', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      });
    button1.addEventListener('mouseleave', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
    });
    button2.addEventListener('mouseenter', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      });
    button2.addEventListener('mouseleave', function(evt){
        evt.target.style.backgroundColor = 'rgba(255, 255, 255, 0.0)'; 
    });

    bodyMain.style.backgroundColor = "#8996a6";
    bodyMain.style.backgroundImage = "url(/img/slider-3.png)";
});