export function filterPokemonType(pokemons, type){
    const filteredPokemons = []
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].type.includes(type)){
            filteredPokemons.push(pokemons[i]);
        }
    }
    return filteredPokemons;
}

export function filterPokemonName(pokemons, input){
    const filteredPokemons = []
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].name.includes(input)){
            filteredPokemons.push(pokemons[i]);
        }
    }
    return filteredPokemons;
}

export function filterPokemonGeneration(pokemons, generation){
    const filteredPokemons = []
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].generation.name.includes(generation)){
            filteredPokemons.push(pokemons[i]);
        }
        
    }
    console.log(filteredPokemons);
    return filteredPokemons;

}

export function pokemonSort(pokemons, order){
    const filteredPokemons = []
    for (let i = 0; i < pokemons.length; i++) {
        filteredPokemons.push(pokemons[i]);
    }
    if (order === "a-z"){
        filteredPokemons.sort((a, b)=> {
            if (a.name<b.name){
                return -1;
            }
        })
    } else if (order === "z-a"){
        filteredPokemons.sort((a, b)=> {
            if (a.name>b.name){
                return -1;
            }
        })
    }
    return filteredPokemons;

}
export const calculation = (filtered, pokemons)=>{
   return Math.round((filtered/pokemons)*100);
} 

