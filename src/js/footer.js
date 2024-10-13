document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([-5.753761, -35.242811], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  const marker = L.marker([-5.753761, -35.242811]).addTo(map);
});