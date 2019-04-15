
$(() => {
//need to mess with thi to submit info
  $('form').on('submit', (event) => {
    event.preventDefault();

    const userInput = $('input[type="text"]').val();

  $.ajax(
    {
      url:'https://api.openbrewerydb.org/breweries?per_page=20&by_type=micro&by_city=' + userInput,
    }
  ).then(
      (data)=>{
          // console.log(data);
          // const brewInfo = (name, website, phone, street, city, state, type) => {
          //   for (let i = 0; i < 6; i++) {
          //    ----what goes here?????
          //   }
          // }------loop atempt instead of hardcoding
        // -------------$('#name').html(data[0].name + data[1].name + data[2].name),
        // $('#website_url').html(data[0].website_url + data[1].website_url + data[2].website_url),
        // $('#phone').html(data[0].phone + data[1].phone + data[2].phone),
        // $('#street').html(data[0].street + data[1].street + data[2].street),
        // $('#city').html(data[0].city + data[1].city + data[2].city),
        // $('#state').html(data[0].state + data[1].state + data[2].state),
        // $('#brewery_type').html(data[0].brewery_type + data[1].brewery_type + data[2].brewery_type)];----------- this is good
          // console.log(data);-------this is attempt
          // $('#name').html(data.name),
          // $('#website_url').html(data.website_url),
          // $('#phone').html(data.phone),
          // $('#street').html(data.street),
          // $('#city').html(data.city),
          // $('#state').html(data.state),
          // $('#brewery_type').html(data.brewery_type)--------------
        const popData = () => {  ///don't necessarily need this const
          for (let i = 0; i < data.length; i++) {
            const $infoContainer = $('<div>').addClass('info-container')
            const $nameDiv = $('<div>').addClass('name').text(data[i].name)
            const $webDiv = $('<div>').addClass('web').text(data[i].website_url)
              $infoContainer.append($nameDiv)
              $infoContainer.append($webDiv)
              $('.modal-textbox').append($infoContainer)
          }}
          popData(); ///if take out const be sure to remove this function call and } above
    },
    ()=>{
        console.log('bad request');
    })

   // }
  })//------end of api call
//--------beginning of modal po-up
  // ===================
  // GRABBING ELEMENTS
  // ===================
  const $submit = $('#submit');
  const $modal = $('.modal');
  const $closeBtn = $('#close');
  const $modalText = $('.modal-textbox')
  const $modalInfo = $('.modal-info')

  // ===================
  // EVENT HANDLER
  // ===================
  // opens the modal
  const openModal = () => {
    //need function to load data in to openModal
    $modal.show();
  }
  // closes the modal
  const closeModal = () => {
    $modal.css('display', 'none')
    $modalInfo.empty();  ///removes the header too :(
    //$modalText.remove(); ////need to clear modal info .empty() or .remove() not sure this is working
  }

  // ===================
  // EVENT LISTENERS
  // ===================
  // about the game button
  $submit.on('click', openModal);
  // close button
  $closeBtn.on('click', closeModal);

});
