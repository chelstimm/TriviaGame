$(document).ready(function () {


    //Variables//

    var correct = 0;
    var wrong = 0;
    var correctMatch = true;
    var wrongMatch = false;
    var start = $("#buttonStart");
    var submit = $("#buttonSubmit");
    var restart = $("#buttonRestart");
    var questions = $("#question")
    var results = $("#results")
    var quiz = $("#multipleChoice")


    start.on("click", function () {
        var number = 5;
        $("#show-number").text(number);

        setTimeout = setInterval(timer, 1000);
        $("#show-number").show();

        //Functions
        function timer() {
            // decrements the timer by 1
            number--;
            $("#show-number").text(number);
            if (number === 0) {
                alert("Times Up!")
                stop(); // calls the stop function
            }
        }
        function stop() {
            clearInterval(setTimeout);
            results.show();
            restart.show();
            quiz.hide();
            $("#show-number").hide();
            timer();
        }
    })

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

    //    if (radio.value = correct)
    //    correct++;
    //    else (//radio button clicked// = not correct)
    //    wrong++;

    //   for(var i = 0; i <= questions; i++) {
    //               var radios = document.getElementsById("#answer" + i);
    //               for(var j = 0; j < radios.length; j++) {
    //                 var radio = radios[j];
    //                 if(radio.value === "correct" && radio.checked) {
    //                   correct++;


    //$("form input[type='radio']:checked").val();

    //         }
    //       }
    //     }
    // }

    //    var answers = document.getElementById("answer").value;

    //    if (answer === 1)
    //    correct++;
    //    else (answer === 0)
    //    wrong++;


    //Answers
    var answersCorrect = $("#answersCorrect");
    var answersWrong = $("#answersWrong");


    // var selectedAnswer = $('input:radio[value=1]:checked').val();
    var selectedAnswer = $("input[id='answer']:checked").val();
    console.log(selectedAnswer)

    if (selectedAnswer != undefined)
        wrong++;
    else (selectedAnswer === "correct")
    correct++;

    answersCorrect.text(correct);
    answersWrong.text(wrong)

    // calls the start function
    function setup() {
        quiz.show();
        results.hide();
        restart.hide();
    }
    setup();
    //End of Global Scope           
})

    //  The page will reveal the number of questions that players answer correctly and incorrectly.