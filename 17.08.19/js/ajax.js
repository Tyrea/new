$(document).ready(function() {
  $("#main-form-ajax").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#main-form-ajax").trigger("reset");
    });
    return false;
  });
});