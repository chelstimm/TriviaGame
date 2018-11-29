$(document).ready(function() {
  
       //Variables//
       var answersCorrect = $("#answersCorrect");
       var answersWrong = $("#answersWrong");
       var correct = 0;
       var wrong = 0;
       var start = $("#buttonStart");
       var submit = $("#buttonSubmit");
       var restart = $("#buttonRestart");
       var questions = $("#question")
       var results = $("#results")
       var quiz = $("#multipleChoice")

    start.on("click", function () {
    var number = 5;
    $("#show-number").text(number);
    console.log(number)

    //On Click Events//
    //  When the start button gets clicked, run the start function. 
    // start.on("click", setup);
    // //  When the submit button gets clicked, run the answer function.
    // submit.on("click", answers);
    //  When the restart button gets clicked, run the restart function.
    // restart.on("click", restartGame);

    //Functions

    setTimeout = setInterval(timer, 1000);
    $("#show-number").show();
       
    function timer() {
    // decrements the timer by 1
        number--;
        console.log(number)
        $("#show-number").text(number);
        if (number === 0) {
            alert("Times Up!")
            stop(); // calls the stop function
        }
    }
   function stop (){
    clearInterval(setTimeout);
        results.show();
        restart.show();
        quiz.hide();
        $("#show-number").hide();
        timer();
   }
})

   
//    if (radio.value = correct)
//    correct++;
//    else (//radio button clicked// = not correct)
//    wrong++;

        //       var radios = document.getElementsById("#question" + i);
        //       for(var j = 0; j < radios.length; j++) {
        //         var radio = radios[j];
        //         if(radio.value === "correct" && radio.checked) {
        //           amountCorrect++;


        //$("form input[type='radio']:checked").val();

        //         }
        //       }
        //     }
        // }
      

        // function setup(){
        //     $("#show-number").show();
        //      quiz.show();
        //      results.hide();
        //      restart.hide();
        //  } 
          
            // // ----------------------------------------------------------------
            // //calling functions
            // setup(); // calls the start function
          
     

         function setup(){
            quiz.show();
            results.hide();
             restart.hide();
         }
        //Restart Game//
        restart.on("click", function () {
            clearInterval(setTimeout);
            quiz.show();
            results.hide();
            restart.show();
            number = 5;
            $("#show-number").text(number);
            $("#show-number").show();
            setup();
            timer();
})
             submit.on("click", function () {
                alert("Let's see how you did!!")
                clearInterval(setTimeout);
                results.show();
                restart.show();
                quiz.hide();
                $("#show-number").hide();
})
       //Answers
         var answers = $("#").val().trim();
         for(var i = 0; i <= questions; i++) {
          var radios = document.getElementsById("#question" + i);
          for(var j = 0; j < radios.length; j++) {
          var radio = radios[j];
           if(radio.value === "correct" && radio.checked) {
              correct++;
      
              answersCorrect.text(correct);
              answersWrong.text(wrong)
            }}};
           
})
setup();
    //  The page will reveal the number of questions that players answer correctly and incorrectly.