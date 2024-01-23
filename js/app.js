// Variables //
const examButton = document.querySelector("#examButton");
const examModal = new bootstrap.Modal('#examModal');


// Process //
examButton.addEventListener("click", () => {
  examModal.show();
})