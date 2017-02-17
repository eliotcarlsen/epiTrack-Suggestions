$(document).ready(function(){
  $(".form").submit(function(event){
    var question1 = parseInt($("input#question1").val());
    var question2 = parseInt($("input#question2").val());
    var question3 = parseInt($("input#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var question6 = parseInt($("#question6").val());











    var userInputName = $("#userName").val();
    $(".name").empty().append(userInputName);
    event.preventDefault();
  });
});
