const getCard = (pub) => {
  let sHTML=`<div class="column">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src=${pub.img} alt="Card image cap" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${pub.titulo}</h5>
                <p class="card-text">${pub.texto}</p>
                <a href=${pub.url} class="btn btn-primary" target="_blank">Leer más</a>
              </div>
            </div>
          </div>`;
  return sHTML;
}

const getCards = (arrPubs) => {
  let sHTML="";
  arrPubs.forEach(elem => {sHTML += getCard(elem);});
  return sHTML;
}

const p = document.getElementById("Publicaciones__cards");

let req = new XMLHttpRequest();
req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    p.innerHTML = getCards(JSON.parse(req.responseText).record);
  }
};
req.open("GET", "https://api.jsonbin.io/v3/b/634f0f492b3499323be30a4a", true);
req.setRequestHeader("X-Master-Key", "$2b$10$SykxUMjwq1qw3S.9ghPOMOHNNlarr/sFIHzEM9f7T/miq0zlXSj3u");
req.send();

//fetch("./datos/publicaciones.json")
//.then(arch => arch.json())
//.then(json => p.innerHTML = getCards(json))
//.catch(e => console.log("Error: NO pude leer el archivo de Publicaciones. [ERR:", e, "]"));
