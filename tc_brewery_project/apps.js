console.log($);
$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();

    const userInput = $('input[type="text"]').val();

  $.ajax(
    {
      url:'https://sandbox-api.brewerydb.com/v2/locations?key=b26731182c32ccfaa4c38d713ba3d33d&region=' + userInput,
    }
  ).then(
      (data)=>{
        console.log(data);
        // $('#brewery-name').html(data.brewery.name);
        // $('#website').html(data.website);
        // $('#phone').html(data.phone);
        // $('#streetAddress').html(data.streetAddress);
        // $('#locality').html(data.locality);
        // $('#region').html(data.region);
        // $('#openToPublic').html(data.openToPublic);

    },
    ()=>{
        console.log('bad request');
    })
  })
});
