document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([-5.75403, -35.26791], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  const marker = L.marker([-5.75403, -35.26791]).addTo(map);

  // document.addEventListener('click', () => {
  //   enviarMensagem();
  // });

  // const enviarMensagem = () => {
  //   const phone = '65981278291';
  //   const message = 'Oi! Deixe sua mensagem que respondo assim que puder.';
  //   window.open(
  //     `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
  //     '_blank'
  //   );
  // };

  const enviarMensagem = () => {
    const phone = '65981278291';
    const message = 'Oi! Deixe sua mensagem que respondo assim que puder.';
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  document.getElementById('whatsapp-link').addEventListener('click', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    enviarMensagem();
  });

});