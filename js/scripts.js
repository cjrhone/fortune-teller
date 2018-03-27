

$(document).ready(function() {
  $("form#fortuneQuiz").submit(function(event) {
    event.preventDefault();

    $(".result").fadeOut(200);

    var score=0;
    $("input:checkbox[name=bad-luck]:checked").each(function(){
      score--;
    });
    $("input:checkbox[name=good-luck]:checked").each(function(){
      score++;
    });


    if (score>=1){
      $("#goodResult").show();
    } else if(score===0) {
      $("#neutralResult").show();
    } else{
      $("#badResult").show();
    }


 });

});
