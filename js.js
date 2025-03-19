const botchoiceview = document.getElementById("bot_choice");
const playerchoiceview = document.getElementById("Player_choice");
const Result = document.getElementById("result");


const possiblechoice = document.querySelectorAll("button");

possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener
    ('click', (e) => {
        userchoice = e.target.id;
        playerchoiceview.innerHTML = userchoice;
        botchoicegenerator();
        result();
    }))

function botchoicegenerator(){
    const Randomnumber = Math.floor(Math.random()*3)+1;
    if(Randomnumber === 1)
    {
        botchoice = "Rock";
    }
    if(Randomnumber === 2)
    {
        botchoice = "Paper";
    }
    if(Randomnumber === 3)
    {
        botchoice = "Sissor";
    }
    botchoiceview.innerHTML = botchoice
    console.log(Randomnumber);
   
}


function result(){
    if(botchoice === userchoice)
    {
        result = "Draw , Try again";
    }
    if (botchoice === "Paper" && userchoice === "Sissor")
    {
        result = "Win";
    }
    if(botchoice === "Sissor" && userchoice === "Paper")
    {
        result = "Win";
    }
    if(botchoice === "Rock" && userchoice === "Paper")
    {
        result = "Win";
    }
    
    
    if(botchoice === "Paper" && userchoice === "Rock")
    {
        result = "Bot Win";
    }
    if(botchoice === "Sissor" && userchoice === "Paper")
    {
        result = "Bot Win";
    }
    if(botchoice === "Rock" && userchoice === "Sissor")
    {
        result = "Bot Win";
    }    

    Result.innerHTML = result;
}