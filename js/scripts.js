$(document).ready(function() {
 $("form#fortuneQuiz").submit(function(event) {
   event.preventDefault();

   $("#badResult").show();
   $("#goodResult").show();

 })

})
