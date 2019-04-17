
$(() => {
//-------- set up function for text input and submit button click on api query --------
  $('form').on('submit', (event) => {
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
//------- loop over data to pupulate divs -------
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
          }}
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
  const $submit = $('#submit');
  const $modal = $('.modal');
  const $closeBtn = $('#close');
  const $modalText = $('.modal-textbox')
  const $modalInfo = $('.modal-info')

  //------------------------ EVENT HANDLERS --------------------
  //------- opens the modal
  const openModal = () => {
    //need function to load data in to openModal
    $modal.show();
  }
  //---------- closes the modal and clears $modalInfo divs
  const closeModal = () => {
    $modal.css('display', 'none')
    $modalInfo.empty();
  }

  //--------------------- EVENT LISTENERS ------------------
  //--------- about the game button
  $submit.on('click', openModal);
  //--------- close button
  $closeBtn.on('click', closeModal);

}); /// end of window onload
