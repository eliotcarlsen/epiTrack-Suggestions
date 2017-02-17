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
    var userInputEmail = $("#userEmail").val();

    if (15 >= sumOfAll) {
      $(".java, .php, .csharp").hide();
      $(".none").show();
      $(".name").empty().append(userInputName);
    } else if (10 <= sumOfQ1Q5) {
      $(".none, .php, .csharp").hide();
      $(".java").show();
      $(".name").empty().append(userInputName);
      $(".email").empty().append(userInputEmail);
    } else if (10 <= sumOfQ2Q6) {
      $(".java, .none, .csharp").hide();
      $(".php").show();
      $(".name").empty().append(userInputName);
      $(".email").empty().append(userInputEmail);
    } else if (10 <= sumOfQ3Q4) {
      $(".java, .php, .none").hide();
      $(".csharp").show();
      $(".name").empty().append(userInputName);
      $(".email").empty().append(userInputEmail);
    }


  });
});
