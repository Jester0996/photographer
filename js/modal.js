// Модальное окно

const callFromBdt = document.getElementById("call-form");
const modalCallForm = document.getElementById("modal-call-form");

// Открытие модального окна

callFromBdt.addEventListener("click", function () {
  modalCallForm.classList.add("modal-parent--open")
})

// Закрытие модального окна

modalCallForm.querySelector(".modal").addEventListener("click", function(event) {
  event._isClick = true
})

modalCallForm.addEventListener("click", function(event) {
  if(event._isClick === true) return
  modalCallForm.classList.remove("modal-parent--open")
})

// Закрытие при нажатие ESC
window.addEventListener("keydown", function(event) {
  if(event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open")
  }
})