$(document).ready(function () {
    $("#start-button").click(function () {
        //Questions//
        var allQuestions = [{
            question: "Which movie appears on Television more times than any other holiday movie?",
            answers: ["It's a Wonderful Life", "A Christmas Story", "Miracle on 34th Street", "National Lampoon's Christmas Vacation"],
            correctAnswer: 0,
        }, {
            question: "The tradition of the Gingerbread House originated in what country?",
            answers: ["United States", "France", "England", "Germany"],
            correctAnswer: 3,
        }, {
            question: "Real Christmas Trees are grown in how many of the 50 United States?",
            answers: ["40", "36", "5", "All 50"],
            correctAnswer: 3,
        }, {
            question: "In what year did Christmas become a national holiday in America?",
            answers: ["1720", "1870", "1692", "1905"],
            correctAnswer: 1,
        }, {
            question: "This song is the most recorded Christmas Song, with over 500 versions in many languages.",
            answers: ["Deck the Halls", "Jingle Bells", "White Christmas", "Silver Bells"],
            correctAnswer: 2,
        }, {
            question: "How much does the Grinch's heart grow on Christmas?",
            answers: ["2 Sizes", "3 Sizes", "4 Sizes", "5 Sizes"],
            correctAnswer: 1,
        }, {
            question: "What Christmas beverage is also known as “milk punch?",
            answers: ["Hot Chocolate", "Cranberry Juice", "Eggnog", "Milk"],
            correctAnswer: 2,
        }, {
            question: "In what modern-day country was Saint Nicholas born?",
            answers: ["Turkey", "Germany", "England", "Russia"],
            correctAnswer: 0,
        }, {
            question: "What beverage company has been using Santa Claus in its advertising since 1931?",
            answers: ["Pepsi", "Dr. Pepper", "Nestle", "Coca-Cola"],
            correctAnswer: 3,
        }, {
            question: "In what country did the custom of putting up a Christmas tree originate?",
            answers: ["England", "Germany", "United States", "Austria"],
            correctAnswer: 1,
        }];

        //Game Setup//
        var score = 0;
        var number = 0;
        var questionList = $("#questions");
        
        var start = $("#buttonStart");
        var stop = $("#buttonStop");
        var restart = $("#buttonRestart");
        var currentQuestion = $("#current-question");
        var answers = new Array(allQuestions.length);
        var answers = [q1 = 0;
            q2 = 3;
            q3 = 3;
            q4 = 1;
            q5 = 2;
            q6 = 1;
            q7 = 2;
            q8 = 0;
            q9 = 3;
            q10 = 1;];

        //Timer Countdown//
        var number = 120;

        //On Click Events//
        //  When the start button gets clicked, run the start function. 
        $("#buttonStart").on("click", start);
        //  When the stop button gets clicked, run the stop function.
        $("#buttonStop").on("click", stop);
        //  When the restart button gets clicked, run the restart function.
        $("#buttonRestart").on("click", restart);

        console.log(allQuestions.answers);
        
        //Functions
        function start() {
            counter = setInterval(timer, 1000);

        }
        function timer() {
            number-- // decrements the timer by 1
            $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
                alert("Times Up!")
                stop(); // calls the stop function
            }
        }
        function stop() {
            clearInterval(counter); // stops the timer
            $("#results").show();
            $("#restart").show();
            $("#question").hide();
            $("#answers").hide();
            $("#submit").hide();
        }
        function stop() {
            number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
            clearInterval(counter); // stops the timer
            timer();
        }

        function restart() {
            number = 120;
            start();
        }

        function hideMe(e) {
            $(e).hide();
        }
        function showMe(e) {
            $(e).show();
        }

        // ----------------------------------------------------------------
        //calling functions
        start(); // calls the start function
    });




})