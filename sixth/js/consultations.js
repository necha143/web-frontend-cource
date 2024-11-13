document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-me-form');
    const scheduleTable = document.getElementById('consultantions-table').querySelector('tbody');

    function loadSchedule() {
        const schedule = JSON.parse(localStorage.getItem('consultationSchedule')) || [];
        schedule.sort((a, b) => new Date(`1970-01-01T${a.time}`) - new Date(`1970-01-01T${b.time}`));
        schedule.forEach((entry, index) => addEntryToTable(entry, index));
    }

    function addEntryToTable({ consultantName, phone, date, time }, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${consultantName}</td>
            <td>${phone}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td><button class="delete-btn" data-index="${index}">Удалить</button></td>
        `;
        scheduleTable.appendChild(row);

        row.querySelector('.delete-btn').addEventListener('click', () => deleteEntry(index));
    }

    function saveEntry(entry) {
        const schedule = JSON.parse(localStorage.getItem('consultationSchedule')) || [];
        schedule.push(entry);
        localStorage.setItem('consultationSchedule', JSON.stringify(schedule));
    }

    function deleteEntry(index) {
        let schedule = JSON.parse(localStorage.getItem('consultationSchedule')) || [];
        schedule.splice(index, 1); 
        localStorage.setItem('consultationSchedule', JSON.stringify(schedule));

        renderSchedule();
    }

    function renderSchedule() {
        scheduleTable.innerHTML = '';
        loadSchedule();
    }


    form.addEventListener('submit', event => {
        event.preventDefault();

        const consultantName = form.consultantName.value;
        const phone = form.phone.value;
        const date= form.date.value;
        const time = form.time.value;

        const entry = { consultantName, phone, date, time };

        saveEntry(entry);
        renderSchedule();

        form.reset();
    });

    renderSchedule();
});
