$(document).ready(function () {


    //Variables//

    var correct = 0;
    var wrong = 0;
    var start = $("#buttonStart");
    var submit = $("#buttonSubmit");
    var restart = $("#buttonRestart");
    var results = $("#results")
    var quiz = $("#multipleChoice")


    start.on("click", function () {
        var number = 90;
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
        number = 90;
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
    var answersCorrect = $("#answersCorrect");
    var answersWrong = $("#answersWrong");
    //Checking to see if correct radio button was clicked and incrementing right answers

    $(":radio[name=q]").change(function () {
        console.log(this.value);
        // var correctAnswers = 
        if (this.value === "correct") {
            correct++;
        }
        if (this.value === "wrong") {
            wrong++;
        }
        answersCorrect.text(correct);
        answersWrong.text(wrong);
    });


    //grab wrong answers and increment

    // calls the start function
    function setup() {
        quiz.show();
        results.hide();
        restart.hide();
    }

    setup();
    //End of Global Scope           
})
