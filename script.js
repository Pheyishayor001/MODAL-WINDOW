'use strict';

// storing each class into a variable for easy access
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// this function expression is to set the remove the hidden classes.
const openModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
// to set the classes back to hidden.
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
// this querySelectorAll gives a NODE List. its like an Array, but not an array. i.e it can be looped through.
// it can also be selected individually using btnsOpenModal[i];

for (let i = 0; i < btnsOpenModal.length; i++) {
  // making use of this loop to add event to each individual button

  // NOTE: The closeModal function doesnt need the (). if it is inserted, the function will be called immediately. by not inserting it, it will only be called when the said button is clicked upon.
  btnsOpenModal[i].addEventListener('click', openModal);

  /*btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });*/
}

//adding an event listener to the close button
btnCloseModal.addEventListener('click', closeModal);

//adding an event listener to the overlay
overLay.addEventListener('click', closeModal);

//KEYBOARD EVENT
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if the pressed key is Escape. AND IF modal does NOT(!) CONTAIN the ".hidden" class already...

    closeModal(); //then use this function to close modal i.e add the hidden class
  }
});
