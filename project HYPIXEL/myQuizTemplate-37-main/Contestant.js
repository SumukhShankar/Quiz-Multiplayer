class Contestant {
    constructor() {

        this.index = null;
        this.name = null;
        this.answer = 0;
        

    }

    getCount() {
        var getcountref = database.ref('Playercount');

        getcountref.on("value", (data) => {
            Playercount = data.val();
        })

    }


    updateCount(count) {
        database.ref('/').update({
            Playercount: count
        });
    }

    update() {
        var PlayerIndex = "Players/player" + this.index;
        database.ref(PlayerIndex).set({
            name: this.name,
            answer : this.answer,
        });
    }

    static getPlayerInfo(){
        var ContestantInfoRef = database.ref('Players');
        ContestantInfoRef.on("value",(data)=>{
          allplayer = data.val();
        })
      }





}




