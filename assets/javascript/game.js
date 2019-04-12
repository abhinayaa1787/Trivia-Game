$(document).ready(function () {
    $("#btn").on("click", function () {

        console.log("calling");
        var quesArr = [
            {
                question: "Who is NoT a spice girl?",
                opt1: "fredy spice",
                opt2: 1,
                opt3: 2,
                opt4: 0,
                ans: "fredy spice"
                // image: 'Egypt-008.jpg'
            },
            {
                question: "Who is NoT a spice boy?",
                opt1: 0,
                opt2: 1,
                opt3: 2,
                opt4: 3,
                ans: 0
            }
            // ,
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:},
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:},
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:}
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:}
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:}
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:}
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:}
            // {ques: "Who is NoT a spice girl?",
            // opt1:
            // opt2:
            // opt3:
            // opt4:
            // ans:}
        ];
        var correctAnswer = 0;
        var wrongAnswer = 0;
        var i = 0;

        function Timer() {
            var timer = 25;

            console.log("calling timer");
            var newDivTimer = $("<div />");
            newDivTimer.text("Time Remaining:" +" "+ timer +" "+ "seconds");
            $("#quiz").prepend(newDivTimer);
            intervalID = setInterval(function () {
                timer--;
                newDivTimer.text("Time Remaining:" + " "+timer + " " +"seconds");



                // console.log(timer);
                if (timer == 0) {
                    clearInterval(intervalID);
                    quiz(i+1);
                }

            }, 1 * 1000)
        }
        function quiz(i) {
            if(i<quesArr.length){
            $("#quiz").text(quesArr[i].question);
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
                clickMe();
            }
        
        else{
            $("#quiz").html("<h2>All Done</h2>");
            $("#quiz").append("Number of Correct Answers:"+ correctAnswer);
            $("#quiz").append("<br>");
            $("#quiz").append("Number of Wrong Answers:"+""+wrongAnswer);

        }
        };
        quiz(i);
        function clickMe() {
         $(".button").on("click", function () {

            console.log("clicked");
            console.log($(this).text());
            console.log(i);
            if (($(this).text()) == quesArr[i].ans) {
                // alert("correct");
                correctAnswer++;
                console.log("correctAnswer" + correctAnswer);
                $("#quiz").text("YAYY!!!Correct Answer");
            }
            else {
                wrongAnswer++;
                console.log("wrongAnswer" + wrongAnswer);
                console.log("index-wrong"+i);
                $("#quiz").text("NOPE!!!" + " "+quesArr[i].ans +" " + "is the Correct Answer");
            }
            i++;
            setTimeout(function () {
                quiz(i);
            }, 1000);
            console.log(i);
        });

        console.log("next ques call");
    };
});
});