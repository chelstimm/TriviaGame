$(document).ready(function() {
  

       //Variables//
       var correct = 0;
       var wrong = 0;
       var start = $("#buttonStart");
       var submit = $("#buttonSubmit");
       var restart = $("#buttonRestart");
       var questions = $("#question")
       var results = $("#results")
       var quiz = $("#multipleChoice")
       console.log(questions)

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
    
    
   
   
    // start.on("click", setup);
   
    function timer() {
    // decrements the timer by 1
        number--;
        console.log("hello")
        $("#show-number").text(number);
        if (number === 0) {
            alert("Times Up!")
            stop(); // calls the stop function
        }
        // else (number == 0) {
        //     alert("Let's see how you did!")
        //     stop();
        // }
    }
   function stop (){
    clearInterval(setTimeout);
        results.show();
        restart.show();
        quiz.hide();
        $("#show-number").hide();
        timer();
   }

        //     for(var i = 1; i <= 10; i++) {
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
        // //Restart Game//
        //     function restartGame() {
        //         number = 5;
        //         setup();
        //     }

        // function setup(){
        //     $("#show-number").show();
        //      quiz.show();
        //      results.hide();
        //      restart.hide();
        //  } 
          
            // // ----------------------------------------------------------------
            // //calling functions
            // setup(); // calls the start function
   
   
           }
         )
         function setup(){
            quiz.show();
            results.hide();
             restart.hide();
         }
             submit.on("click", function () {
                alert("Let's see how you did!!")
                clearInterval(setTimeout);
                results.show();
                restart.show();
                quiz.hide();
                $("#show-number").hide();
        })
    });
    // * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.