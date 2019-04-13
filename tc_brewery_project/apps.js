console.log($);
$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();

    const userInput = $('input[type="text"]').val();

  $.ajax(
    {
      url:'https://sandbox-api.brewerydb.com/v2/?locations=locality=dallas/?key=b26731182c32ccfaa4c38d713ba3d33d/'
    }
  ).then(
      (data)=>{
        console.log(data);
    },
    ()=>{
        console.log('bad request');
    })
  })
});
