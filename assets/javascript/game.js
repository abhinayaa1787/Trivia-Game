$(document).ready(function(){
$("#btn").on("click",function(){
    console.log("calling");
var quesArr=[
    {question: "Who is NoT a spice girl?",
    opt1:0,
    opt2:1,
    opt3:2,
    opt4:0,
    ans:0
    // image: 'Egypt-008.jpg'
},  
  {question: "Who is NoT a spice girl?",
    opt1:0,
    opt2:1,
    opt3:2,
    opt4:3,
    ans:0}
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
var timer=25;
var correctAnswer=0;
var wrongAnswer=0;
function wrongAns(){
    alert("Wrong  Answer " + quesArr[0].ans);
}
function quiz(quesArr){
    var i = quesArr.length-1;
console.log("quiz calling");
console.log(i);



    // var newDivTimer=$("<div>");
    // newDivTimer.text("Time Remaining");
console.log(quesArr[i].question);
    $("#quiz").text(quesArr[i].question);
    var btn1=$("<button>").addClass("button");
    btn1.text(quesArr[i].opt1);
    $("#quiz").append(btn1);
    var btn2=$("<button>").addClass("button");
    btn2.text(quesArr[i].opt2);
    $("#quiz").append(btn2);
      var btn3=$("<button>").addClass("button");
    btn3.text(quesArr[i].opt3);
    $("#quiz").append(btn3);
    var btn4=$("<button>").addClass("button");
    btn4.text(quesArr[i].opt4);
    $("#quiz").append(btn4);
    $(".button").on("click",function(){
        console.log("clicked");
console.log($(this).text());
        if(($(this).text()) == quesArr[i].ans)
        {
            alert("correct");
            correctAnswer++;
            console.log("correctAnswer"+ correctAnswer);
            $("#quiz").text("Yay!!!Correct Answer");
        }
        else{
            wrongAns();
            wrongAnswer++;
            // var img=$("<img>");
            // img.val(quesArr[i].image);
            // $("#quiz").append(img);
            console.log("wrongAnswer"+ wrongAnswer);
            $("#quiz").text("OOPS!!!Wrong Answer"+ quesArr[i].ans+"is the Correct Answer");




        }
        i--;
    });
    

};

quiz(quesArr);

});


});
// });
