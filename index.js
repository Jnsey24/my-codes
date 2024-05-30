let randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
let randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber1=Math.floor(randomnumber1)+1;
randomnumber2=Math.floor(randomnumber2)+1;
console.log(randomnumber1);
let result='';
if(randomnumber1>randomnumber2){
result="player1 wins";
}
else if(randomnumber1<randomnumber2){
    result="player2 wins";
    }
    else {
        result="Draw";
    }
document.querySelector(".container-js").innerHTML=`
      <h1>${result}</h1>

      <div class="dice">
        <p>Player 1</p>
        <img class="img1" src="../images/dice${randomnumber1}.png" />
      </div>

      <div class="dice">
        <p>Player 2</p>
        <img class="img2" src="../images/dice${randomnumber2}.png" />
      </div>
`;
