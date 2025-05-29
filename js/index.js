// Get the modal
const modal = document.getElementById("reg-modal");

// Get the button that opens the modal
const modalLink = document.getElementById("quick-reg-link");

// Get the <span> element that closes the modal
// const span = document.getElementById("closeModalButton");

// When the user clicks the button, open the modal
modalLink.onclick = function () {
  modal.showModal(); // Use showModal() to open the dialog
};

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.close(); // Use close() to close the dialog
// };

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.close(); // Close if clicked outside
  }
};
