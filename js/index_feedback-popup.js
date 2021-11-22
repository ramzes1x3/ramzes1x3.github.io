//index feedback
var openPopup = document.querySelector(".address-button");
var closePopup =  document.querySelector(".button-close-feedback");
var feedbackPopup =  document.querySelector(".wrapper-feedback");

var uLogin = document.querySelector("[name=user_name]");
var uEmail = document.querySelector("[name=email]");
var uAbout = document.querySelector("[name=about-user]");
var uSubmit = document.querySelector("[name=sub_feedback]");
var feedback_form = document.getElementById("feedbackForm");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

//нажатие на кнопку открытия попапа
openPopup.addEventListener("click", function(evt){
    evt.preventDefault();
    feedbackPopup.classList.remove("visually-hidden");
    feedbackPopup.classList.add("wrapper-feedback-show");

    try{
        storageName = localStorage.getItem("user_name");
        storageEmail = localStorage.getItem("email");
    } catch(err){
        isStorageSupport = false;
    }
    
    if(storageName && storageEmail){
        uLogin.value = storageName;
        uEmail.value = storageEmail;
        uAbout.focus();
    }
    else{
        uLogin.focus();
    }
});

//закрыть попап кликом по кнопке на сайте
closePopup.addEventListener("click", function(evt){
    evt.preventDefault();
    feedbackPopup.classList.add("visually-hidden");
    feedbackPopup.classList.remove("wrapper-feedback-error");
    feedbackPopup.classList.remove("wrapper-feedback-show");
});

//закрыть попап кликом по кнопке esc на клавиатуре
window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27){
        if(!feedbackPopup.classList.contains("visually-hidden")){
            evt.preventDefault();
            feedbackPopup.classList.add("visually-hidden");
            feedbackPopup.classList.remove("wrapper-feedback-error");
            feedbackPopup.classList.remove("wrapper-feedback-show");
        }
    }
});

//проверка на ввод и сохранение данных при повтором вводе
uSubmit.addEventListener("click", function(evt){
    if(!uLogin.value || !uEmail.value){
        evt.preventDefault();
        feedbackPopup.classList.remove("wrapper-feedback-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("wrapper-feedback-error");
    }
    else{
        if(isStorageSupport){
            localStorage.setItem("user_name", uLogin.value);
            localStorage.setItem("email", uEmail.value);
        }
    }

});
//index feedback