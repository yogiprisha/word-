function adduser() {
    player1=document.getElementById("player1").value ;

    player2=document.getElementById("player2").value ;

    localStorage.setItem("player1name",player1);

    localStorage.setItem("player2name",player2);

    window.location="game_page.html";


}