// all initializers for materialize
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, 'isFixed');
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 'responsiveThreshold', 100);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, 'outDuration');
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, 'duration', 1500);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, 'accordion');
});




// class blueKetchum {

// }

// api calls requesting data for Celebi

let pokeName251 = document.getElementById("poke-name");
let pokeHpStats251 = document.getElementById("poke-hp");
let pokeAttackStats251 = document.getElementById("poke-attack");
let pokeDefenceStats251 = document.getElementById("poke-defence");
let pokeAbilities251 = document.getElementById("poke-abilities");


class Trainer{
  constructor(){
    this.all=[];
  }

  add(pokemon){
    this.all.push(pokemon)
  }
  get(pokeName) {
    return this.all.find((element) => {
      return element.pokeName == pokeName;
    })
  }
}

class Pokemon {
  constructor(pokeName, ph, attack, deffend, abilities){
    this.pokeName = pokeName;
    this.ph = ph;
    this.attack = attack;
    this.deffend = deffend;
    this.abilities = abilities;
  }
}
let trainer = new Trainer();

axios.get('http://fizal.me/pokeapi/api/251.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
  // console.log(res);
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
 

  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;
 
 
  pokeName251.innerHTML = `Name: ${myPokeName}`;
  pokeHpStats251.innerHTML = `${myHp}`;
  pokeAttackStats251.innerHTML = `${myAttack}`;
  pokeDefenceStats251.innerHTML = `${myDefence}`;
  pokeAbilities251.innerHTML = `${myAbilities}`;

  let pokemon = new Pokemon(
    res['pokeName'], 
    res['pokeHpStats'], 
    res['pokeAttack'], 
    res['pokeDefence'], 
    res['pokeAbilities']
  );

  pokemon.add(myPokeName);
  console.log(pokemon);

})

.catch(function (error) {
  console.log(error);
});


// api calls for Primarina

axios.get('http://fizal.me/pokeapi/api/730.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
 
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
  let myAbilities730 = newArray;
  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }


  console.log(myAbilities730);
 
  pokeName730.innerHTML = `Name: ${myPokeName}`;
  pokeHpStats730.innerHTML = `${myHp}`;
  pokeAttackStats730.innerHTML = `${myAttack}`;
  pokeDefenceStats730.innerHTML = `${myDefence}`;
  pokeAbilities730.innerHTML = `${myAbilities730}`;

  let pokemon = new Pokemon(
    data['pokeName730'], 
    data['pokeHpStats730'], 
    data['pokeAttackStats730'], 
    data['pokeDefenceStats730'], 
    data['pokeAbilities730']
  );

  pokemon.add(myPokeName);
  console.log(pokemon);

})
.catch(function (error) {
  console.log(error);
});

// changing stats in display template
// document.getElementById('730').document.addEventListener('cklick', function(){
  
// });


// // api calls for Infernape


axios.get('http://fizal.me/pokeapi/api/392.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
  console.log(res);
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
  let myAbilities392 = newArray;
  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }

  pokeName392.innerHTML = `Name: ${myPokeName}`;
  pokeHpStats392.innerHTML = `${myHp}`;
  pokeAttackStats392.innerHTML = `${myAttack}`;
  pokeDefenceStats392.innerHTML = `${myDefence}`;
  pokeAbilities730.innerHTML = `${myAbilities392}`;

  let pokemon = new Pokemon(
    data['pokeName392'], 
    data['pokeHpStats392'], 
    data['pokeAttackStats392'], 
    data['pokeDefenceStats392'], 
    data['pokeAbilities392']
  );

  pokemon.add(myPokeName);
  console.log(pokemon);

})
.catch(function (error) {
  console.log(error);
});