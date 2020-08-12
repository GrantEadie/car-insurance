$(document).ready(function() {
  $("#nameOne").submit(function(event) {
    const person1Input = $("input#person1").val();

    $(".person1").append(person1Input);

    $("#signature").show();

    event.preventDefault();
  });
});