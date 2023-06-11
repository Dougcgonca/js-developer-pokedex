
const pokemonMoreDetails = document.getElementById('pokemonList')
const url = '/newPage.html'

function pokemonDetails(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span> 

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
                     
            </div>
        </li>
    `
}

pokemonMoreDetails.addEventListener('click', () => {
    newWindow(url)
  })

 function newWindow(url){ 
    const win = window.open(url, '_blank')
    win.focus()  
    
 }