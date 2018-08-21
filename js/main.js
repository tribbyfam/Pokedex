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




class Trainer{
  constructor(){
    this.all=[];
  }

  add(pokemon){
    this.all.push(pokemon)
  }
  get(name){
    return this.all.find((element) =>{
      return element.myPokeName == name
    })
  }
}

class Pokemon {
  constructor(name, ph, attack, deffend, abilities){
    this.name = name;
    this.ph = ph;
    this.attack = attack;
    this.deffend = deffend;
    this.abilities = abilities;
  }
}
  
let trainer = new Trainer();


// api calls requesting data for Celebi

let pokeName251 = document.getElementById("poke-name");
let pokeHpStats251 = document.getElementById("poke-hp");
let pokeAttackStats251 = document.getElementById("poke-attack");
let pokeDefenceStats251 = document.getElementById("poke-defence");
let pokeAbilities251 = document.getElementById("poke-abilities");
let pokeImages = document.getElementById("poke-cards");
let pic730 = document.getElementById("730");

// pokeImages.addEventListener("click", function(){
//   pokeImages.src = function change(){

//   }

// })


  axios.get('http://fizal.me/pokeapi/api/251.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
  console.log(res);
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
  let myPic = res.sprites.front_default;
  pokeImages.setAttribute("src", myPic)
  console.log(myPic)

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


  let pokemon251 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities)

  trainer.add(pokemon251);
  console.log(trainer);

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
  let myPic = res.sprites.front_default;
  pokeImages.setAttribute("src", myPic)
  console.log(myPic)

  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;
 
  // pokeName730.innerHTML = `Name: ${myPokeName}`;
  // pokeHpStats730.innerHTML = `${myHp}`;
  // pokeAttackStats730.innerHTML = `${myAttack}`;
  // pokeDefenceStats730.innerHTML = `${myDefence}`;
  // pokeAbilities730.innerHTML = `${myAbilities}`;

  let pokemon730 = new Pokemon(myPokeName,myHp,myAttack,myDefence,myAbilities)

  trainer.add(pokemon730);
 

})
.catch(function (error) {
  console.log(error);
});




// // // api calls for Infernape


axios.get('http://fizal.me/pokeapi/api/392.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
  let myPic = res.sprites.front_default;
  // pokeImages.setAttribute("src", myPic)
  // console.log(myPic)

  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;
 
 
  // pokeName392.innerHTML = `Name: ${myPokeName}`;
  // pokeHpStats392.innerHTML = `${myHp}`;
  // pokeAttackStats392.innerHTML = `${myAttack}`;
  // pokeDefenceStats392.innerHTML = `${myDefence}`;
  // pokeAbilities392.innerHTML = `${myAbilities}`;


  let pokemon392 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities)

  trainer.add(pokemon392);
})

.catch(function (error) {
  console.log(error);
});