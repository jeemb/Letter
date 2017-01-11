$(document).ready(function() {
$("#blanks form").submit(function() {
  var personInput = $("input#person").val()
  var capitalized = personInput.toUpperCase();

  $(".person").text(capitalized);

  $("#uppercase").show();

  event.preventDefault();
});
});
