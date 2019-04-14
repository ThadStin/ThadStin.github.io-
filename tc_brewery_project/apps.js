console.log($);

$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();

    const userInput = $('input[type="text"]').val();

  $.ajax(
    {
      url:'https://api.openbrewerydb.org/breweries?per_page=3&by_type=micro&by_city=' + userInput,
    }
  ).then(
      (data)=>{
          // console.log(data);
        $('#name').html(data[0].name + data[1].name + data[2].name);
        $('#website_url').html(data[0].website_urldata + [1].website_urldata + [2].website_url);
        $('#phone').html(data[0].phone + data[1].phone + data[2].phone);
        $('#street').html(data[0].street + data[1].street + data[2].street);
        $('#city').html(data[0].city + data[1].city + data[2].city);
        $('#state').html(data[0].state + data[1].state + data[2].state);
        $('#brewery_type').html(data[0].brewery_type + data[1].brewery_type + data[2].brewery_type);
          // console.log(data[0, 1]);
    },
    ()=>{
        console.log('bad request');
    })
  })
});
