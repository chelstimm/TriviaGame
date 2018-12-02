$(document).ready(function () {

    //Variables//
    var correct = 0;
    var wrong = 0;
    var start = $("#buttonStart");
    var submit = $("#buttonSubmit");
    var restart = $("#buttonRestart");
    var results = $("#results")
    var quiz = $("#multipleChoice")

    //On click function to start timer
    start.on("click", function () {
        var number = 90;
        $("#show-number").text(number);
        //Setting timer and displaying on screen
        setTimeout = setInterval(timer, 1000);
        $("#show-number").show();

        //Timer Function
        function timer() {
            // decrements the timer by 1
            number--;
            $("#show-number").text(number);
            if (number === 0) {
                alert("Times Up!")
                stop(); // calls the stop function
            }
        }
        //Stop Function
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
    //Submitting checked Answers
    submit.on("click", function () {
        alert("Let's see how you did!!")
        clearInterval(setTimeout);
        results.show();
        restart.show();
        quiz.hide();
        $("#show-number").hide();
    })
    //Answers
    //Variables for choices
    var answersCorrect = $("#answersCorrect");
    var answersWrong = $("#answersWrong");

    //Display whether chosen radio button is wrong or correct. Increment each choice.
    $(":radio[name=q]").change(function () {
        console.log(this.value);
        // var correctAnswers = 
        if (this.value === "correct") {
            correct++;
        }
        if (this.value === "wrong") {
            wrong++;
        }
        //Display how many questions were answered correct and wrong.
        answersCorrect.text(correct);
        answersWrong.text(wrong);
    });

    //Setup Function for quiz
    function setup() {
        quiz.show();
        results.hide();
        restart.hide();
    }
    setup();
})
