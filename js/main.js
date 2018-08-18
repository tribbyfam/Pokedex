

axios.get('https://www.redbullshopus.com/products.json')
.then(function (response) {
  let final = response.data.products;

  


})
.catch(function (error) {
  console.log(error);
});
