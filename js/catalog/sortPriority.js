var rad = document.sorting_form.priority;
var selectedSort = document.querySelector(".about_sort_check");
var selectedSortUl = document.querySelector(".selected_sorting ul");

function isCheck() {
    for(var elem in rad){
        if(rad[elem].checked){
            if(elem == 0) selectedSort.innerHTML = "по популярности";
            else if(elem == 1) selectedSort.innerHTML = "сначала недорогие";
            else if(elem == 2) selectedSort.innerHTML = "сначала дорогие";
            else selectedSort.innerHTML = "по жирности";
        }
    }
}

function onClickLi(){
    selectedSortUl.classList.toggle("selected_sorting_bl");
}