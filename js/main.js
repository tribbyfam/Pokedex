// all initializers for materialize
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, 'isFixed');
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 'responsiveThreshold', 100);
});







// axios.get('https://www.redbullshopus.com/products.json')
// .then(function (response) {
//   let final = response.data.products;

  


// })
// .catch(function (error) {
//   console.log(error);
// });
