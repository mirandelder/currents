$(function() {
    console.log( "ready!" );
});

//1
$("#shows").click(function(){
  $("#shows").toggleClass("filledShows");
  $(".show").fadeToggle();
});

//2
$("#movies").click(function(){
  $("#movies").toggleClass("filledMovies");
  $(".movie").fadeToggle();
});

//3
$("#musicals").click(function(){
  $("#musicals").toggleClass("filledMusicals");
  $(".musical").fadeToggle();
});

//4
$("#youtubers").click(function(){
  $("#youtubers").toggleClass("filledYoutubers");
  $(".youtuber").fadeToggle();
});

//5
$("#musicians").click(function(){
  $("#musicians").toggleClass("filledMusicians");
  $(".musician").fadeToggle();
});

//6
$("#artists").click(function(){
  $("#artists").toggleClass("filledArtists");
  $(".artist").fadeToggle();
});

//7
$("#toys").click(function(){
  $("#toys").toggleClass("filledToys");
  $(".toy").fadeToggle();
});

//8
$("#digitals").click(function(){
  $("#digitals").toggleClass("filledDigitals");
  $(".digital").fadeToggle();
});

//9
$("#people").click(function(){
  $("#people").toggleClass("filledPeople");
  $(".person").fadeToggle();
});

//10
$("#objects").click(function(){
  $("#objects").toggleClass("filledObjects");
  $(".object").fadeToggle();
});

//11
$("#books").click(function(){
  $("#books").toggleClass("filledBooks");
  $(".book").fadeToggle();
});

//12
$("#places").click(function(){
  $("#places").toggleClass("filledPlaces");
  $(".place").fadeToggle();
});

//12
$("#languages").click(function(){
  $("#languages").toggleClass("filledLanguages");
  $(".language").fadeToggle();
});


// Moods

  // Silly / Playful / Party / Energetic
  $(".silly").hover(
    function(){
      $(this).first().toggleClass("sillyStyle");
    },
    function(){
      $(this).first().toggleClass("sillyStyle");
    }
  );

  // Chill / Relax
  $(".chill").hover(
    function(){
      $(this).first().toggleClass("chillStyle");
    },
    function(){
      $(this).first().toggleClass("chillStyle");
    }
  );

  // Education / Serious / Explore
  $(".serious").hover(
    function(){
      $(this).first().toggleClass("seriousStyle");
    },
    function(){
      $(this).first().toggleClass("seriousStyle");
    }
  );

  var counter = 0;
  $(".silly, .chill, .serious").click(function(){
    counter++;
    if (counter == 3) {
      $("#bar").fadeToggle();
      $("content").css("margin-bottom", "5em");
    }
  });
