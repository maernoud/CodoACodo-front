

class carousel {
  constructor(){
    this.tagId = "";
    this.imagenes = [];
    this.imagenActual = 0;
    this.imgOscurecidas = "#FFFFFF";
    this.efectoParallax = false;
    this.imgPath = "./img/";
    this.intervalo = 2000;
    this.btnPrevProxAncho = "30%";
    this.btnPrevProxColor = "transparent";
    this.btnPrevProxColorHover = "rgba(0,0,0,0.3)";
  }

// Setter's
  setTagId(tagId){
    this.tagId = tagId;
    this.inicializar();
  }
  setImgOscurecidas(color){this.imgOscurecidas = color;}
  setEfectoParallax(){this.efectoParallax = true;}
  setImgPath(path){this.imgPath = path;}
  setIntervalo(milisegs){this.intervalo = milisegs;}
  setBtnPrevProx(ancho, bkgColor, bkgColorHover){
    this.btnPrevProxAncho = ancho;
    this.btnPrevProxColor = bkgColor;
    this.btnPrevProxColorHover = bkgColorHover;
  }

// Métodos
  inicializar(){

// Inicializo el contenedor
    let elem = document.querySelector(this.tagId);

// Inserto los elementos
    elem.innerHTML = 
      `<span id="${this.getImgId().slice(1)}">` +
      `<button id="${this.getPrevId().slice(1)}" onclick="retroceder()"><</button>` +  
      `<button id="${this.getProxId().slice(1)}" onclick="avanzar()">></button>` + 
      `</span>`;

// Inicializo el contenedor de la imagen
    let img = this.getElemImg();
    img.style.display = "flex";
    img.style.justifyContent = "space-between";
    img.style.alignItems = "center";
    img.style.backgroundSize = "cover";
    img.style.backgroundPosition = "center";
    img.style.backgroundRepeat = "no-repeat";
    img.style.backgroundAttachment = (this.efectoParallax) ? "fixed" : "scroll";
    if (this.imgOscurecidas != "#FFFFFF"){
      img.style.background = this.imgOscurecidas;
      img.style.backgroundBlendMode = "multiply";
    }
    img.style.width = "100%";
    img.style.height = "100%";

// Inicializo las flechas
    let prev = this.getElemPrev();
    this.inicializarPrevProx(prev);
    let prox = this.getElemProx();
    this.inicializarPrevProx(prox);
  }

  inicializarPrevProx(btn){
    btn.style.backgroundColor = this.btnPrevProxColor;
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.height = "90%";
    btn.style.width = this.btnPrevProxAncho;
    btn.onmouseover = ()=>{btn.style.backgroundColor = this.btnPrevProxColorHover;};
    btn.onmouseleave = ()=>{btn.style.backgroundColor = this.btnPrevProxColor;};
  }
  
  getPrevId(){return this.tagId + "__previo";}
  getImgId(){return this.tagId + "__imagen";}
  getProxId(){return this.tagId + "__proximo";}
  getElemPrev(){return document.querySelector(this.getPrevId());}
  getElemImg(){return document.querySelector(this.getImgId());}
  getElemProx(){return document.querySelector(this.getProxId());}

  agregarImagen(img){this.imagenes.push(img);}

  avanzar1(){this.imagenActual = ++this.imagenActual % this.imagenes.length;}
    
  retroceder1(){(this.imagenActual)?this.imagenActual--:this.imagenActual=this.imagenes.length-1}

  avanzar(){this.parar(); this.avanzar1(); this.mostrar(); this.arrancar();}
  retroceder(){this.parar(); this.retroceder1(); this.mostrar(); this.arrancar();}

  mostrar(){
    let elem = this.getElemImg();
  //  console.log("elem: ", elem);
    elem.style.backgroundImage = `url(${this.imgPath}${this.imagenes[this.imagenActual]})`;
  }

  arrancar(){
    this.hndlIntervalo = window.setInterval(avanzar, this.intervalo);
  }

  parar(){
    clearTimeout(this.hndlIntervalo)
  }
}

const car = new carousel();

function avanzar(){car.avanzar();}
function retroceder(){car.retroceder();}
