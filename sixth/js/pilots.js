document.addEventListener('DOMContentLoaded', () => {
    const preloaderElements = document.querySelectorAll('.preloader');

    preloaderElements.forEach(preloader => {
        preloader.style.display = 'block';
    });

    function loadPilots() {
        // const jets = document.querySelectorAll('.jets')               // в нормальном мире
        // jets.forEach((jet) => {
        //     const id = jet.id
        //     fetch(`uri?jetID=${id}`).then'...'
        // })

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
            })
            .then(data => {
                const pilots1 = data.slice(0, 2);
                const pilots2 = data.slice(2, 4);
                const pilots3 = data.slice(4, 6);
                preloaderElements.forEach(preloader => preloader.style.display = 'none');

                displayPilots('pilots-jet-1', pilots1);
                displayPilots('pilots-jet-2', pilots2);
                displayPilots('pilots-jet-3', pilots3);
            })
            .catch(error => {
                preloaderElements.forEach(preloader => {
                    preloader.style.display = 'none';
                    const errorMessage = document.createElement('div');
                    errorMessage.classList.add('error-message');
                    errorMessage.textContent = 'Не удалось получить информацию о пилотах.';
                    preloader.parentElement.appendChild(errorMessage);
                });
            });
    }

    function displayPilots(containerId, pilots) {
        const container = document.getElementById(containerId);
        pilots.forEach(pilot => {
            const pilotInfo = document.createElement('div');
            pilotInfo.classList.add('pilot-info');
            pilotInfo.innerHTML = `
                <p><strong>Имя:</strong> ${pilot.name}</p>
                <p><strong>Позывной:</strong> ${pilot.username}</p>
                <p><strong>Город:</strong> ${pilot.address.city}</p>
                <p><strong>Компания:</strong> ${pilot.company.name}</p>
            `;
            container.appendChild(pilotInfo);
        });
    }

    loadPilots();
});
