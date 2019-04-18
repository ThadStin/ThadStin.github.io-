
$(() => {
//-------- set up function for text input and submit button click on api query --------
  $('form').on('submit', (event) => {
    // prevents modal from disappearing until closed
    event.preventDefault();
//------- define input for text form
    const userInput = $('input[type="text"]').val();
//============= api query==============
  $.ajax(
    { ///-- query for 20 results (max) for micro type and by user input city--
      url:'https://api.openbrewerydb.org/breweries?per_page=20&by_type=micro&by_city=' + userInput,
    }
  ).then(
      (data)=>{

        const popData = () => {
//------- loop over data to populate and create divs -------
          for (let i = 0; i < data.length; i++) {
            const $infoContainer = $('<div>').addClass('info-container')
            const $nameDiv = $('<div>').addClass('name').text(data[i].name)
            const $webDiv = $('<div>').addClass('web').text(data[i].website_url)
            const $phoneDiv = $('<div>').addClass('phone').text(data[i].phone)
            const $streetDiv = $('<div>').addClass('street').text(data[i].street)
            const $cityDiv = $('<div>').addClass('city').text(data[i].city + ', ' + data[i].state)
            const $brewery_typeDiv = $('<div>').addClass('brewery_type').text(data[i].brewery_type)
//-------- appending divs to info container--------
              $infoContainer.append($nameDiv)
              $infoContainer.append($webDiv)
              $infoContainer.append($phoneDiv)
              $infoContainer.append($streetDiv)
              $infoContainer.append($cityDiv)
              $infoContainer.append($brewery_typeDiv)
//--------- appending info container to modal --------
              $('.modal-info').append($infoContainer)
              }
            }
//------------- calling function to populate divs in modal ---------------
          popData();
        },
    ()=>{
        console.log('bad request');
    })

   // }
 })//================ end of api call and population ===================
//================== beginning of modal pop-up ====================

  //------------  DEFINING VARIABLES and ELEMENTS FOR EVENTS ---------------
  //--activate submit button
  const $submit = $('#submit');
  //--activate modal
  const $modal = $('.modal');
  //--activate close button on modal
  const $closeBtn = $('#close');
  //--empties modal info on close to re-populate with fresh data
  const $modalInfo = $('.modal-info')

  //------------------------ EVENT HANDLERS --------------------
  //------- shows the modal on click of submit button
  const openModal = () => {
    $modal.show();
  }
  //---------- closes the modal and clears $modalInfo divs
  const closeModal = () => {
    $modal.css('display', 'none')
    $modalInfo.empty();
  }

  //--------------------- EVENT LISTENERS ------------------
  //--------- on click of submit button, shows modal with info
  $submit.on('click', openModal);
  //--------- on click of $closeBtn, empties and disappears modal
  $closeBtn.on('click', closeModal);

}); /// end of window onload
