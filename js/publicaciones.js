fetch('../datos/publicaciones.json')
    .then((response) => response.json())
    .then((json) => console.log(json));