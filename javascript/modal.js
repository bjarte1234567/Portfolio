// Function to open the modal and display the selected image
function openModal(image) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = image.src;
}

// Function to close the modal when the close button (x) is clicked
document.getElementsByClassName("close")[0].onclick = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

// Function to close the modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
