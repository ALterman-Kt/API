// Создаем класс для управления волшебной кнопкой
class MagicButton {
    constructor() {
        // Находим нашу кнопку в HTML по id "icon-button"
        this.buttonElement = document.getElementById('icon-button');
        // Находим элемент <i> с иконкой внутри кнопки
        this.iconElement = this.buttonElement.querySelector('i');
        // Создаем флаг-переключатель: false = обычная иконка, true = заполненная
        this.isFilledIcon = false;
        
        // Вызываем метод для включения отслеживания кликов
        this.initializeClickHandler();
    }
    
    // Метод для настройки обработчика кликов
    initializeClickHandler() {
        // Добавляем "слушателя" который ждет клика по кнопке
        this.buttonElement.addEventListener('click', () => {
            // Когда кнопку кликнули - вызываем метод смены иконки
            this.switchIcon();
        });
    }
    
    // Метод для переключения между иконками
    switchIcon() {
        // Проверяем какая иконка сейчас показана
        if (this.isFilledIcon) {
            // Если была заполненная - меняем на обычную
            this.iconElement.className = 'bi bi-arrow-down-left-circle';
        } else {
            // Если была обычная - меняем на заполненную
            this.iconElement.className = 'bi bi-arrow-down-left-circle-fill';
        }
        
        // Меняем флаг на противоположный (true становится false, false становится true)
        this.isFilledIcon = !this.isFilledIcon;
    }
}

// Ждем когда вся страница полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
    // Создаем экземпляр нашего класса - запускаем волшебную кнопку!
    new MagicButton();
});