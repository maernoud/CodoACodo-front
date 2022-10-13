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
p.innerHTML = getCards(publicaciones);
