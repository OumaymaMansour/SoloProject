
var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}



//var moodInput = $("#mood-input");
//var mood = moodInput.val().toLowerCase().trim();


$("#mood-button").click(function () {

    var mood = $("#mood-input").val().toLowerCase().trim()
    reset_playlist();


    playlist_happy = [
        {
            title: "Pharell Williams - Happy",
            audio_url: "audio/pharell_williams_happy.mp3",
            image_url: "photos/pharell_williams_happy.jpg"
            
        },
        {
            title: "Meghan Trainor - Better When I'm Dancin",
            audio_url: "audio/meghan_trainor_better_when_im_dancin.mp3",
            image_url: "photos/meghan_trainor_better_when_im_dancin.jpeg"
        },
        {
            title: "Bruno Mars - Just the way you are",
            audio_url: "audio/bruno_mars_just_the_way_you_are.mp3",
            image_url: "photos/bruno_mars_just_the_way_you_are.jpeg"
        }
    ];

    playlist_sad = [
        {
            title: "Dean Lewis - How Do I Say Goodbye ",
            audio_url: "audio/Dean Lewis - How Do I Say Goodbye (Official Video).mp3",
            image_url: "photos/How Do I Say Goodbye_Dean Lewis.jpg"
            
        },
        {
            title: "Calum Scott - You Are The Reason",
            audio_url: "audio/Calum Scott - You Are The Reason (Official Video).mp3",
            image_url: "photos/Calum Scott - You Are The Reason.jpeg"
        },
        {
            title: "This Song Gave Me The Strength To Fight One More Day",
            audio_url: "audio/This Song Gave Me The Strength To Fight One More Day.mp3",
            image_url: "photos/I won't give up.jpeg"
        }
    ];

    playlist_angry = [
        {
            title: "Lola Blanc - Angry Too",
            audio_url: "audio/Lola Blanc - Angry Too (Official Video).mp3",
            image_url: "photos/Lola Blanc - Angry Too.jpeg"
            
        },
        {
            title: "Adele - Rolling in the Deep",
            audio_url: "audio/Adele - Rolling in the Deep (Official Music Video).mp3",
            image_url: "photos/Adele - Rolling in the Deep.jpg"
        },
        {
            title: "You call it revenge, I call it returning the favor",
            audio_url: "audio/You call it revenge, I call it returning the favor. ( A villain playlist).mp3",
            image_url: "photos/You call it revenge, I call it returning the favor.jpg"
        }
    ];



    playlists = {
        happy: playlist_happy,
        sad : playlist_sad,
        angry : playlist_angry
    };

    if (mood) {
        
        if(!playlists.hasOwnProperty(mood)){
            $('#songOutput').text("Please enter a valid mood.");
            return;
        }
        $('#playlist_title').text($("#mood-input").val())
        playlist_mood = playlists[mood];
        

    each(playlist_mood, function(element) {
        var listItem = '<li data-src="' + element.audio_url + '"><img class="preview_img" src="' + element.image_url + '"></img> <label><h4>' + element.title + '</label></h4></li>';
        $('#playlist').append(listItem);
    });

        $('#audio_player').show();
        var audioPlayer = document.getElementById('audio-player');
        var playlistItems = $('#playlist li');

        // Set the initial source of the audio player
        audioPlayer.src = playlistItems.eq(0).data('src');

        // Play the first audio when the page loads
        audioPlayer.play();

        // Play selected audio from the playlist
        playlistItems.click(function () {
            var audioSrc = $(this).data('src');
            audioPlayer.src = audioSrc;
            audioPlayer.play();
        });

        // Update the playlist and play the next audio when the current one ends
        audioPlayer.addEventListener('ended', function () {
            var nextIndex = playlistItems.filter('.active').index() + 1;
            if (nextIndex < playlistItems.length) {
                playlistItems.removeClass('active');
                playlistItems.eq(nextIndex).addClass('active');
                audioPlayer.src = playlistItems.eq(nextIndex).data('src');
                audioPlayer.play();
            }
        });

    } else {
        // Display an error message using jQuery html() method
        $('#songOutput').text("Please enter a valid mood.");
    }

});

function reset_playlist() {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.pause();

    $('#audio_player').hide();
    $('#playlist').empty();
     $('#songOutput').empty();


}


