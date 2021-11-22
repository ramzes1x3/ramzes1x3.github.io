ymaps.ready(init);
var myMap;
var placemark;

function init(){
    myMap = new ymaps.Map("yandex_map", {
        center: [59.93873589, 30.32411152],
        zoom: 17,
        controls: ["zoomControl","trafficControl"],
        behaviors: ["drag"]
    });

    placemark = new ymaps.Placemark([59.93882521, 30.32288495], {
        hintContent: "Магазин Gllacy",//здесь можно верстать стили
        balloonContent: "ул. Большая Конюшенная 19/8,<br> Санкт-Петербург"
    },
    {
        iconLayout: "default#image",
        iconImageHref: "img/map-ice.png",
        iconImageSize: [150, 80]
    });

    myMap.geoObjects.add(placemark);
}