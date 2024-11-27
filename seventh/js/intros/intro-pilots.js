document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('play-tips').addEventListener('click', () => {
        /**
         * -- Вызов интро для пилотов -- 
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
                        element: document.querySelector('.pilots'),
                        intro: "Под каждым самолетом отображаются действующие пилоты, закрепленные за ним.",
                        position: 'top'
                    },
                    {
                        element: document.querySelector('.jet'),
                        intro: "Нажмите, чтобы забронировать самолет с пилотом.",
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
