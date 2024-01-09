




//var moodInput = $("#mood-input");
//var mood = moodInput.val().toLowerCase().trim();


$("#mood-button").on( "click", function() {

    console.log($("#mood-input").val().toLowerCase().trim())

})



function Playsit(gategory,quote) {
    var inst = {};

    inst.quote = quote
    inst.category = category
    inst.songsToPlay = [];
    inst.playedSongsList = [];
    inst.nextSong = {};
    inst.currentSong = {};
    inst.lastPlayedSong = {};
    inst.addSong = addSong;
    inst.playCurrentSong = playCurrentSong;

    return inst;
  }

  function addSong (song,category) {
    if(this.category===category)
    this.songsToPlay.push(song);
  }

  function playCurrentSong () {
    var current = this.songsToPlay.shift();
    if (Object.keys(this.currentSong).length !== 0) {
      console.log(Object.keys(this.currentSong));
      this.lastPlayedSong = this.currentSong;
      this.playedSongsList.push(this.currentSong);
    }
    this.currentSong = current;
  }
  
  var ListHappiness = Playsit('Happy',"be happy bright be you");
  

  function makeSong (title,artist,youtube,category) {
return {title:title,
        artist:artist,
        youtube:youtube,
        category:category}
  }

  var songH1 = makeSong("HAPPY","Pharrell Williams","https://www.youtube.com/watch?v=JRMOMjCoR58", "HAPPY")
  var songH2 = makeSong("Just The Way You Are","Bruno Mars","https://www.youtube.com/watch?v=u7XjPmN-tHw","HAPPY")
  var songH3 = makeSong("Better When I'm Dancin'","Meghan Trainor ","https://www.youtube.com/watch?v=pkCyfBibIbI","HAPPY")
  
  var songsH =[songH1,songH2,songH3]

  var ListSadness = Playsit('SAD',"It's okay not to be okay.");

  var songS1 = makeSong("How Do I Say Goodbye"," Dean Lewis","https://www.youtube.com/watch?v=QCtEe-zsCtQ", "SAD")
  var songS2 = makeSong("You Are The Reason","Calum Scott","https://www.youtube.com/watch?v=ShZ978fBl6Y","SAD")
  var songS3 = makeSong("The Strength To Fight","One More Day","https://www.youtube.com/watch?v=ooOak5FVkpM","SAD")
 
  
  var songsH =[songS1,songS2,songS3]

  var ListAnger = Playsit('ANGRY',"You are the first victim of your own anger. ...");

  var songA1 = makeSong("Angry Too","Lola Blanc","https://www.youtube.com/watch?v=mwzHGbFNW1I", "ANGRY")
  var songA2 = makeSong("You call it revenge, I call it returning the favor","A villain playlist","https://www.youtube.com/watch?v=EuwOAKLvGmc","ANGRY")
  var songA3 = makeSong("Rolling in the Deep","Adele","https://www.youtube.com/watch?v=rYEDA3JcQqw&list=PL7v1FHGMOadBhCjuh_ljEEhqrQKCBsoIn","ANGRY")

  var songsA =[songA1,songA2,songA3]
  
