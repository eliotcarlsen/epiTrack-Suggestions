$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var question1 = parseInt($("input#question1").val());
    var question2 = parseInt($("input#question2").val());
    var question3 = parseInt($("input#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var question6 = parseInt($("#question6").val());
    var sumOfQ1Q5 = question1 + question5
    var sumOfQ2Q6 = question2 + question6
    var sumOfQ3Q4 = question3 + question4
    var sumOfAll = sumOfQ3Q4 + sumOfQ2Q6 + sumOfQ1Q5
    var userInputName = $("#userName").val();
    console.log(userInputName);
    console.log(sumOfAll);

    if (15 >= sumOfAll) {
      $(".none").show();
      $(".name").empty().append(userInputName);

    } else {
      $(".csharp").show();
      $(".name").empty().append(userInputName);

    }


  });
});
