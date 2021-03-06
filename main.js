function Pokemon(name,color,puntosAtaque){
  this.name = name;
  this.color = color;
  this.nivelDeAmistad = 0;

  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    return ("Hola, soy "+this.name+" y soy de color "+this.color);
  }

  this.aumentarAmistad = function(valor){
    this.nivelDeAmistad = this.nivelDeAmistad + valor;
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad +=80;
    }else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10;
    }

  }

  this.atacar = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
  }
}

var pokemons =[];

function crearPokemos(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");

  var pokemon = new Pokemon ( nombrePokemon.value,
                              colorPokemon.value,
                              puntosAtaque.value);

  pokemons.push(pokemon);
  mostrarPokemons(pokemon);

}

function mostrarPokemons(pokemon){

    var node = document.createElement("option");
    var textnode = document.getElementById(pokemon.name);
    node.appendChild(textnode);
    document.getElementById("seleccion").appendChild(node);
}
