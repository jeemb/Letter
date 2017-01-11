$(document).ready(function() {
$("#blanks form").submit(function() {
  var person = $("input#person").val();

  $(".person").append(person);

  $("#letter").show();

  event.preventDefault();
});
});
