var map = L.map('map').setView([41.61144305, -93.60607274400328], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.61144305, -93.60607274400328]).addTo(map)
    .bindPopup('Test')
    .openPopup();
fetch('csvjson.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur de récupération du fichier JSON');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.positions.forEach(element => {
            L.circle([element.Latitude, element.Longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: element.Centrality * 10000000
            }).addTo(map).bindPopup(element.Node + "<Br />" + "Centrality :" + element.Centrality);
        });
    })
    .catch(error => {
        console.error('Erreur :', error);
    });
