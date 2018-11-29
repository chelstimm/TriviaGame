$(document).ready(function () {
    var number = 5;
    $("#show-number").text(number);
    console.log(number)


    //Variables//
    var amountCorrect = 0;
    var start = $("#buttonStart");
    var submit = $("#buttonSubmit");
    var restart = $("#buttonRestart");
    var questions = $("#question")
    var results = $("#results")
    var quiz = $("#multipleChoice")

    console.log(questions)

    //On Click Events//
    //  When the start button gets clicked, run the start function. 
    // start.on("click", setup);
    // //  When the submit button gets clicked, run the answer function.
    // submit.on("click", answers);
    //  When the restart button gets clicked, run the restart function.
    // restart.on("click", restartGame);

    //Functions
    setTimeout = setInterval(setup, 1000);
    // start.on("click", function () {

    //     console.log("hello")
    // }
    // )
    function setup() {
        start.on("click", setup);
        // quiz.show();
        // results.hide();
        // restart.hide();
        number--;
        console.log("hello11111")
        $("#show-number").text(number);
        // decrements the timer by 1
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
        setup();
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

            // function setup() {
            //     results.hide();
            //         quiz.show();
            //         $("#show-number").show();
            // }
          
            // // ----------------------------------------------------------------
            // //calling functions
            // setup(); // calls the start function
    }
    )
