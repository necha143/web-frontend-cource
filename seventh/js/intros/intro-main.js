document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('play-tips').addEventListener('click', () => {
        /**
         * -- Вызов интро для главной страницы -- 
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
                        element: document.querySelector('header'),
                        intro: "Добро пожаловать! Это хедер, откуда можно перейти на разные страницы сайта.",
                        position: 'top'
                    },
                    {
                        element: document.querySelector('.description'),
                        intro: "Здесь указана некоторая информация о нашей компании. Больше вы можете узнать на странице 'О нас'",
                        position: 'top'
                    },
                    {
                        element: document.querySelector('.jets'),
                        intro: "Здесь показаны доступные самолеты. Выберите один, чтобы узнать больше.",
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