// получаем координаты элемента в контексте документа
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
  
    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function rangeToogle(rangeCS, betweenCS, btn1CS, btn2CS, minVal, maxVal){
    var slider = document.querySelector(rangeCS);
    var between = document.querySelector(betweenCS);
    var btn1 = document.querySelector(btn1CS);
    var btn2 = document.querySelector(btn2CS);
    var minV = document.querySelector(minVal);
    var maxV = document.querySelector(maxVal);
    var minPrice = document.getElementById("min_price");
    var maxPrice = document.getElementById("max_price");

    var min = minV.textContent;
    var max = maxV.textContent;

    btn1.style.marginLeft = '0px';
    btn2.style.marginLeft = (slider.offsetWidth-btn1.offsetWidth) + 'px';
    between.style.width = (slider.offsetWidth-btn1.offsetWidth) + 'px';

    btn1.addEventListener("click", function(evt){
        evt.preventDefault();
    });

    btn2.addEventListener("click", function(evt){
        evt.preventDefault();
    });

    btn1.onmousedown = function(evt) {
        var sliderCoords = getCoords(slider);
        var btn1Coords = getCoords(btn1);
        var btn2Coords = getCoords(btn2);
        var shiftX2 = evt.pageX - btn2Coords.left;
        var shiftX1 = evt.pageX - btn1Coords.left;

        document.onmousemove = function(evt) {
            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
            var right1 = slider.offsetWidth - btn1.offsetWidth;
            if(left1 < 0) left1 = 0;
            if(left1 > right1) left1 = right1;
            btn1.style.marginLeft = left1 + 'px';

            shiftX2 = evt.pageX - btn2Coords.left;
            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
            var right2 = slider.offsetWidth - btn2.offsetWidth;
            if(left2 < 0) left2 = 0;
            if(left2 > right2) left2 = right2;

                var per_min = 0;
                var per_max = 0;
            if(left1 > left2)
                {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';

                    per_min = left2*100/(slider.offsetWidth-btn1.offsetWidth);
                    per_max = left1*100/(slider.offsetWidth-btn1.offsetWidth);
                    maxV.innerHTML = (parseInt(min)+Math.round((max-min)*per_max/100));
                }
            else
                {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';

                    per_min = left1*100/(slider.offsetWidth-btn1.offsetWidth);
                    per_max = left2*100/(slider.offsetWidth-btn1.offsetWidth);
                    minV.innerHTML = (parseInt(min)+Math.round((max-min)*per_min/100));
                }
                maxPrice.value = maxV.textContent;
                minPrice.value = minV.textContent;
            };
            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null;
            };
            return false;
        };

        btn2.onmousedown = function(evt) {     
            var sliderCoords = getCoords(slider);
            var btn1Coords = getCoords(btn1);
            var btn2Coords = getCoords(btn2);
            var shiftX2 = evt.pageX - btn2Coords.left; 
            var shiftX1 = evt.pageX - btn1Coords.left;
          
            document.onmousemove = function(evt) {
                var left2 = evt.pageX - shiftX2 - sliderCoords.left;
                var right2 = slider.offsetWidth - btn2.offsetWidth;
                if (left2 < 0) left2 = 0;
                if (left2 > right2) left2 = right2;
                btn2.style.marginLeft = left2 + 'px';                      
              
              
                shiftX1 = evt.pageX - btn1Coords.left; 
                var left1 = evt.pageX - shiftX1 - sliderCoords.left;
                var right1 = slider.offsetWidth - btn1.offsetWidth;  
                if (left1 < 0) left1 = 0;
                if (left1 > right1) left1 = right1;                      
                 
                    var per_min = 0;
                    var per_max = 0;
                    
                if (left1 > left2)
                  {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';
                    per_min = left2*100/(slider.offsetWidth-btn1.offsetWidth);
                    per_max = left1*100/(slider.offsetWidth-btn1.offsetWidth);
                    minV.innerHTML = (parseInt(min)+Math.round((max-min)*per_min/100));
                  }
                else
                  {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';
                    per_min = left1*100/(slider.offsetWidth-btn1.offsetWidth);
                    per_max = left2*100/(slider.offsetWidth-btn1.offsetWidth);
                    maxV.innerHTML = (parseInt(min)+Math.round((max-min)*per_max/100));
                  }
                  maxPrice.value = maxV.textContent;
                  minPrice.value = minV.textContent;      
            };
            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null;
            };
            return false;
        };

        btn1.ondragstart = function() {
            return false;
        };
        btn2.ondragstart = function() {
            return false;
        };
}

rangeToogle(".range_price", ".range_between", ".range_btn_1", ".range_btn_2", 
    ".min_value_price", ".max_value_price");