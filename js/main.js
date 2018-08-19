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

// api calls requesting data

let pokeFirstName = document.getElementById("poke-name");
let pokeHpStats = document.getElementById("poke-hp");
let pokeAttackStats = document.getElementById("poke-attack");
let pokeDefenceStats = document.getElementById("poke-defence");


axios.get('http://fizal.me/pokeapi/api/251.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
  // console.log(res);
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;


  pokeFirstName.innerHTML = `Name: ${myPokeName}`;
  pokeHpStats.innerHTML = `PH points:              ${myHp}`;
  pokeAttackStats.innerHTML = `Attack points:      ${myHp}`;
  pokeDefenceStats.innerHTML = `Defence points:    ${myHp}`;


})
.catch(function (error) {
  console.log(error);
});
