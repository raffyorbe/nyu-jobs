document.addEventListener("DOMContentLoaded", function () {
    const closePopup = document.getElementById("closePopup");
    const popupModal = new bootstrap.Modal(document.getElementById("popupModal"),{
    backdrop: 'static'});

    popupModal.show();

    closePopup.addEventListener("click", function(){
        popupModal.hide()
    });
  });