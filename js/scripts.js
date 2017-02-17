$(document).ready(function(){
  $(".form").submit(function(event){
    var userInputName = $("#userName").val();
    $(".name").empty().append(userInputName);
    event.preventDefault();
  });
});
