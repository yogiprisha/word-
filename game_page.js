p1_name=localStorage.getItem("player1name");

p2_name=localStorage.getItem("player2name");

p1_score=0;

p2_score=0;

document.getElementById("player1_name").innerHTML=p1_name+" - ";

document.getElementById("player2_name").innerHTML=p2_name+" - ";

document.getElementById("player1_score").innerHTML=p1_score;

document.getElementById("player2_score").innerHTML=p2_score;

document.getElementById("p_Q").innerHTML="question turn- "+p1_name;

document.getElementById("p_A").innerHTML="answer turn- "+p2_name;

function send()
 {
 w1= document.getElementById("word").value ;
 word=w1.toLowerCase();
 
 c1=word.charAt(1);

 len=Math.floor(word.length/2);
 
 c2=word.charAt(len);

 last=word.length-1;

 c3=word.charAt(last);

 r1=word.replace(c1,"_");

 r2=r1.replace(c2,"_");

 r3=r2.replace(c3,"_");

 question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";

 input_box = "<br>Answer : <input type='text' id='input_check_box'>";

 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

 row = question_word + input_box + check_button ;

 document.getElementById("output").innerHTML = row;

 document.getElementById("word").value = "";
 
}

q_turn="player1";
a_turn="player2";

function check() {

    a1=document.getElementById("input_check_box").value;

    ans=a1.toLowerCase();

    if (ans==word) {

 
        if (a_turn="player1") {
 
            p1_score=p1_score+1;

            document.getElementById("player1_score").innerHTML=p1_score;

        }

        else{

            p2_score=p2_score+1;

            document.getElementById("player2_score").innerHTML=p2_score;




        }
    }

if (q_turn=="player1") {

    q_turn="player2";

    document.getElementById("p_Q").innerHTML="question turn- "+p2_name;
    
}

else{  q_turn="player1";

document.getElementById("p_Q").innerHTML="question turn- "+p1_name;
}

if (a_turn=="player1") {

    a_turn="player2";

    document.getElementById("p_A").innerHTML="answer turn- "+p2_name;
    
}

else{  a_turn="player1";

document.getElementById("p_A").innerHTML="answer turn- "+p1_name;
}   

document.getElementById("output").innerHTML=""
    

}