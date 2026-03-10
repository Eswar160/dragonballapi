const container = document.getElementById("container");
let images = [];

const dragonball = async () => {
  const response = await fetch("https://dragonball-api.com/api/characters");
  const data = await response.json();
  images = data.items;
  console.log(data);
  return images;
};

const imagesFetch = async () => {
  let dragonballfun = await dragonball();
  console.log(dragonballfun);

  dragonballfun.map((eachitem) => {   // changed from images.map

    let childdiv = document.createElement("div");
    childdiv.classList.add("childdiv-styles");

    // image
    let imgEle = document.createElement("img");
    imgEle.src = eachitem.image;
    imgEle.classList.add("image-styles");

    // name
    let charnames = document.createElement("h1");
    charnames.textContent = eachitem.name;
    charnames.classList.add("namestyle");

    // max ki
    let Maxki = document.createElement("p");
    Maxki.textContent = eachitem.maxKi;
    Maxki.classList.add("paragraph-style");

    // gender
    let genderchar = document.createElement("p");
    genderchar.textContent = eachitem.gender;
    genderchar.classList.add("paragraph-style");

    // race
    let racechar = document.createElement("p");
    racechar.textContent = eachitem.race;
    racechar.classList.add("paragraph-style");

    childdiv.appendChild(imgEle);
    childdiv.appendChild(charnames);
    childdiv.appendChild(Maxki);
    childdiv.appendChild(genderchar);
    childdiv.appendChild(racechar);

    container.appendChild(childdiv);

  });
};

imagesFetch();