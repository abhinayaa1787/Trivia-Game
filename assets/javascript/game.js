$(document).ready(function () {
    $("#btn").on("click", function () {

        // console.log("calling");
        var images=["images/fortune.cookie.jpg","images/pizzaiolo.jpg"]
        var quesArr = [
            {ques: "DAVID JUNG is considered by many to be the originator of what famous food",
            opt1:"Ramen Noodles",
            opt2:"Fortune Cookies",
            opt3:"Fried Rice",
            opt4:"Spring Rolls",
            ans:"Fortune Cookies"},
            {ques: "What is the proper title of a person who makes pizzas in a pizzeria?",
            opt1:"Guv'nor",
            opt2:"Pizzazzy",
            opt3:"Pizzaiolo",
            opt4:"Chef de Cuisine",
            ans:"Pizzaiolo"},
            {ques: "What is the scale that measures the heat of a chili pepper?",
            opt1:"Scoville Scale",
            opt2:"Richter Scale",
            opt3:"Saffir-Simpson Scale",
            opt4:"Beaufort Scale",
            ans:"Scoville Scale"}
 ];
        var correctAnswer = 0;
        var wrongAnswer = 0;
        var i = 0;
        function endPage() {
            $("#quiz").html("<h2>All Done</h2>");
            $("#quiz").append("Number of Correct Answers:" + correctAnswer);
            $("#quiz").append("<br>");
            $("#quiz").append("Number of Wrong Answers:" + "" + wrongAnswer);
        }

        function Timer() {
            var timer = 25;

            // console.log("calling timer");
            var newDivTimer = $("<div />");
            newDivTimer.text("Time Remaining:" + " " + timer + " " + "seconds");
            $("#quiz").prepend(newDivTimer);
            intervalID = setInterval(function () {
                timer--;
                newDivTimer.text("Time Remaining:" + " " + timer + " " + "seconds");

                // console.log(timer);
                if (timer == 0) {
                    i++;
                    clearInterval(intervalID);
                    if (i > quesArr.length - 1) {
                        // console.log('if');
                        endPage();
                    }
                    else {
                        // console.log('else');
                        quiz(i);
                    }

                }

            }, 1 * 1000)
        }
        function quiz(i) {
            if (i < quesArr.length) {
                $("#quiz").text(quesArr[i].ques);
                Timer();
                var btn1 = $("<button>").addClass("button");
                btn1.text(quesArr[i].opt1);
                $("#quiz").append(btn1);
                var btn2 = $("<button>").addClass("button");
                btn2.text(quesArr[i].opt2);
                $("#quiz").append(btn2);
                var btn3 = $("<button>").addClass("button");
                btn3.text(quesArr[i].opt3);
                $("#quiz").append(btn3);
                var btn4 = $("<button>").addClass("button");
                btn4.text(quesArr[i].opt4);
                $("#quiz").append(btn4);
                // $(".button").on("click", function () {
                buttonClick();
            }

            else {
                endPage();
            }
        };
        quiz(i);
        function buttonClick() {
            $(".button").on("click", function () {

                // console.log("clicked");
                // console.log($(this).text());
                // console.log(i);
                if (($(this).text()) == quesArr[i].ans) {
                    // alert("correct");
                    correctAnswer++;
                    // console.log("correctAnswer" + correctAnswer);
                    $("#quiz").text("YAYY!!!Correct Answer");
                }
                else {
                    wrongAnswer++;
                    // console.log("wrongAnswer" + wrongAnswer);
                    // console.log("index-wrong" + i);
                    $("#quiz").text("NOPE!!!" + " " + quesArr[i].ans + " " + "is the Correct Answer");
                }
                i++;
                setTimeout(function () {
                    quiz(i);
                }, 1000);
                // console.log(i);
            });

            // console.log("next ques call");
        };
    });
});