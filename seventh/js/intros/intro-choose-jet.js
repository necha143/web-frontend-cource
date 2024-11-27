document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('play-tips').addEventListener('click', () => {
        /**
         * -- Вызов интро для подбора джета -- 
         * Атрибуты:
         * steps - шаги подсказок:
         *   element - html элемент, к котрому привязывается подсказка
         *   intro - текст подсказки
         *   position - расположение относительно элемента
         * tooltipClass, highlightClass - указание классов для кастомной стилизации
         * nextLabel, prevLavbel, doneLabel - название кнопок переключения
         */
        introJs()
            .setOptions({
                steps: [
                    {
                        element: document.querySelector('.contact-me-form'),
                        intro: "Заполните форму, чтобы подобрать подходящий бизнес-джет.",
                        position: 'top'
                    },
                    {
                        element: document.querySelector('#consultantions-table'),
                        intro: "Здесь отображается текущее расписание консультаций. Можно удалять записи при необходимости.",
                        position: 'top'
                    }
                ],
                tooltipClass: 'customTooltip',
                highlightClass: 'customHighlight',
                nextLabel: 'Далее',
                prevLabel: 'Назад',
                doneLabel: 'Закончить'
            })
            .start();
    });
});
