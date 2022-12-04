const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./14.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            pokeinfo(pokeinfo);
            console.log(pokeImg);
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeinfo = (abilities) => {
    const pokeinfo = document.getElementById("abilities");
    const abilities =abilities.map(item => item.ability.name);
    console.log('abilities full', abilities);
    console.log('abilities names' abilitiesname);
    pokeabnilities.innerHTML = abilitiesname;
}