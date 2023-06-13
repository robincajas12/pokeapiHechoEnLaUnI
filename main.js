const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const input = document.getElementById("input");
const img = document.getElementById("img");
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    const searchPokemon = apiUrl + input.value.toLowerCase();
    console.log(searchPokemon)
    fetch(searchPokemon).then(res=> res.json()).then(res=>{
        console.log(res)
        imgUrl = res.forms[0].url;
        fetch(imgUrl)
            .then(res=>res.json())
            .then(res=>{
    
                img.src= res.sprites.front_shiny;
            })
    });
})