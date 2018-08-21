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
  constructor(firstName="Blue", lastName="Catchum"){
    this.firstName=firstName;
    this.lastName= lastName;
    this.data =[];
  }

  add(pokemon){
    this.data.push(pokemon)
  }
  get(name){
    return this.data.find((element) =>{
      return element.myPokeName == name
    })
  }
}

class Pokemon {
  constructor(name, hp, attack, deffend, abilities){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.deffend = deffend;
    this.abilities = abilities;
  }
  grab (params) {
    let pokeName = document.getElementById("poke-name");
  let pokeHpStats = document.getElementById("poke-hp");
  let pokeAttackStats = document.getElementById("poke-attack");
  let pokeDefenceStats = document.getElementById("poke-defence");
  let pokeAbilities = document.getElementById("poke-abilities");
  let pokeImages = document.getElementById("poke-cards");
  let pic730 = document.getElementById("730");
  pokeImages.setAttribute("src", myPic)

  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;
  trainer.add(pokemon251);
 

  this.name = `${name}`;
  this.hp = `${hp}`;
  this.attack = `${attack}`;
  this.defence = `${defence}`;
  this.abilities = `${abilities}`;
  console.log(myPic)

  trainer.add(pokemon251);
  console.log(trainer);
  }
  
  

}
  
let trainer = new Trainer();


// api calls requesting data for Celebi


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
  
 let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;
  let pokemon251 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities)

 

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

  let pokemon730 = new Pokemon(myPokeName,myHp,myAttack,myDefence,myAbilities)

  trainer.add(pokemon730);
 

  console.log(response,myPokeName,myAbilities);
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
 
  let pokemon392 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities)

  trainer.add(pokemon392);

})

.catch(function (error) {
  console.log(error);
});

// let tableValues = document.getElementsByClassName("change");
// let tableValues = tableValues[0];
//     tableValues.oncklick = function (){
//       if(this.name === 'celebi'){

//       }
//     }