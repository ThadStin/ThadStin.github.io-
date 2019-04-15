
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

        const popData = () => {

          for (let i = 0; i < data.length; i++) {
            const $infoContainer = $('<div>').addClass('info-container')
            const $nameDiv = $('<div>').addClass('name').text(data[i].name)
            const $webDiv = $('<div>').addClass('web').text(data[i].website_url)
            const $phoneDiv = $('<div>').addClass('phone').text(data[i].phone)
            const $streetDiv = $('<div>').addClass('street').text(data[i].street)
            const $cityDiv = $('<div>').addClass('city').text(data[i].city)
            const $stateDiv = $('<div>').addClass('state').text(data[i].state)
            const $brewery_typeDiv = $('<div>').addClass('brewery_type').text(data[i].brewery_type)

              $infoContainer.append($nameDiv)
              $infoContainer.append($webDiv)
              $infoContainer.append($phoneDiv)
              $infoContainer.append($streetDiv)
              $infoContainer.append($cityDiv)
              $infoContainer.append($stateDiv)
              $infoContainer.append($brewery_typeDiv)

              $('.modal-info').append($infoContainer)
          }}

          popData();
    },
    ()=>{
        console.log('bad request');
    })

   // }
  })//------end of api call
//--------beginning of modal pop-up
  // ===================
  // GRABBING ELEMENTS
  // ===================
  const $submit = $('#submit');
  const $modal = $('.modal');
  const $closeBtn = $('#close');
  const $modalText = $('.modal-textbox')
  const $modalInfo = $('.modal-info')
  const $infoContainer = $('.info-container') //had to define agian due to scope

  // ===================
  // EVENT HANDLER
  // ===================
  // opens the modal
  const openModal = () => {
    //need function to load data in to openModal
    $modal.show();
  }
  // closes the modal and clears $modalInfo divs
  const closeModal = () => {
    $modal.css('display', 'none')
    $modalInfo.empty();
  }

  // ===================
  // EVENT LISTENERS
  // ===================
  // about the game button
  $submit.on('click', openModal);
  // close button
  $closeBtn.on('click', closeModal);

});
