document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('play-tips').addEventListener('click', () => {
        /**
         * -- Вызов интро для каталога -- 
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
                        element: document.querySelector('.jets-catalog'),
                        intro: "Здесь вы видите все доступные самолеты",
                        position: 'bottom'
                    },
                    {
                        element: document.querySelector('.jet'),
                        intro: "Можете выбрать один для перехода к его описанию и возможности приобретения",
                        position: 'bottom'
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
