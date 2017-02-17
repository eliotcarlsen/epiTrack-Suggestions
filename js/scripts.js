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
    debugger;
    if (14 >= sumOfAll) {
      $(".java, .php, .csharp, .all").hide();
      $(".none").show();
      $(".name").empty().append(userInputName);
    } else if ((10 <= sumOfQ1Q5) && (sumOfQ1Q5 > sumOfQ2Q6) && (sumOfQ1Q5 > sumOfQ3Q4)) {
      $(".none, .php, .csharp, .all").hide();
      $(".java").show();
      $(".name").empty().append(userInputName);
      $(".email").empty().append(userInputEmail);
    } else if ((10 <= sumOfQ2Q6) && (sumOfQ2Q6 > sumOfQ1Q5) && (sumOfQ2Q6 > sumOfQ3Q4)) {
      $(".java, .none, .csharp, .all").hide();
      $(".php").show();
      $(".name").empty().append(userInputName);
      $(".email").empty().append(userInputEmail);
    } else if ((10 <= sumOfQ3Q4) && (sumOfQ3Q4 > sumOfQ1Q5) && (sumOfQ3Q4 > sumOfQ2Q6)) {
      $(".java, .php, .none, .all").hide();
      $(".csharp").show();
      $(".name").empty().append(userInputName);
      $(".email").empty().append(userInputEmail);
    } else if ((sumOfQ1Q5 === sumOfQ3Q4) && (sumOfQ1Q5 === sumOfQ2Q6) && (sumOfQ3Q4 === sumOfQ2Q6)) {
      $(".java, .php, .none, .csharp").hide();
      $(".all").show();
      $(".name").empty().append(userInputName);
      $(".email").empty().append(userInputEmail);
    }
  });
});
