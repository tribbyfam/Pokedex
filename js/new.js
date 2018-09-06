axios.get('https://fizal.me/pokeapi.json')
  .then(function (response) {
    console.log(response)



      .catch(function (error) {
        console.log(error);
      });
  });