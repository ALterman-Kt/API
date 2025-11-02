//прогрузка страницы
document.addEventListener('DOMContentLoaded', function() {
    const screenButton = document.getElementById ('screenButton');
    //нажатие
    screenButton.addEventListener('click', showScreenInfo);

});

function showScreenInfo() {
    //измерить экарн
    const screenWidth = screen.width;
    const screenHeight = screen.height;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerWidth;

    const message =
    "Размер всего экрана:\n" +
    "Ширина" + screenWidth + "пикселей\n"+
    "Высота" + screenHeight + "пикселей\n\n" +

    //окно
    "Размер окна браузера:\n" +
    "Ширина" + windowWidth + "пикселей\n"+
    "Высота" + windowHeight + "пикселей\n\n" +

    "💭 Подсказка: попробуй изменить размер окна и нажать кнопку снова!"

    alert(message);
}
