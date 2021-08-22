class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

   async start(){
      if(gameState === 0){
        player = new Contestant();
        var contestantcountref = await database.ref('Playercount').once("value");

        if(contestantcountref.exists()){
          player.getCount();
        }
        
        question = new Question();
        question.display();
      }

    }

    play(){
      
      question.hide();
      background("yellow");
      fill("black");
      textSize(30);
      text("Result of the Quiz",350 , 50);

      Contestant.getPlayerInfo();

      if(allplayer !== undefined){
        var display_ypos = 230;
        text("NOTE : CONTESTANT");
        for(var i in allplayer){
        
           var correctanswer = "3";

           if(correctanswer === allplayer[i].answer)
            fill("green");

           else
           fill("red");

           display_ypos += 30;
            text(allplayer[i].name + ": " + allplayer[i].answer, 250 , display_ypos)
        }
      }
      

     
  }

}