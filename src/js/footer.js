document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map', {
    center: [-5.753761, -35.242811], // Coordenadas de São Paulo
    zoom: 13,
    dragging: false  // Desabilitando a movimentação por padrão
  });

  // Adicionando as tiles do mapa
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Adicionando um marcador
  L.marker([-5.753761, -35.242811]).addTo(map);

  // Habilitando a movimentação ao clicar
  map.on('mousedown', function () {
    map.dragging.enable();  // Habilita o drag
  });

  // Desabilitando a movimentação ao soltar o clique
  map.on('mouseup', function () {
    map.dragging.disable();  // Desabilita o drag
  });

  // Também desativa o movimento ao sair do mapa
  map.on('mouseout', function () {
    map.dragging.disable();
  });
});