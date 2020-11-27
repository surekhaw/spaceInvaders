// Space Invaders Spaceship JavaScript/jQuery
// Students: As you observe the code below, notice how jQuery takes a lot of the pain
// out of actions that might seem tedious with Vanilla JavaScript.
// jQuery Ready Function (encloses all other functions)
// ==============================

// YOU SHOULD NOT NEED TO CHANGE THE HTML
// MUCH TO GET THE jQuery FUNCTIONALITY YOU NEED

// ************************ Read First **********************************
// To help give you hints there are a few selections partially filled out.
// jQuery Methods you may find useful:
//
// animate, on, css
// review the jQuery documents and your textbook for more ideas.
// **********************************************************************

$(document).ready(function () {

  // ===========
  // Audio Setup
  // ===========
  // Create an audio element with JavaScript
  var audioElement = document.createElement("audio");
  // Set it's source to the location of our Spaceship theme song file.
  audioElement.setAttribute("src", "sound/free_alien_sound_effect_extened_version_2_min.mp3");
  // Play Music 
  $(".theme-button").on("click", function () {
    // Add a method to audioElement to make it 'play'
    audioElement.play();
  });

  // Pause Music 
  // Write a jQuery function and add a jQuery method to the audioElement to make it 'pause'
  // *** Code Here ***
  $(".pause-button").on("click", function () {
    audioElement.pause();
  });


  // =====================
  // Change the Main Title
  // =====================
  // Changed Main Title
  // Write a jQuery function and add a jQuery method(s) to the '.main-title' selector to change the main title
  // *** Code Here ***
  $('.change-title-button').on("click", function() {
    $('.main-title').css({
      'color': 'blue',
      'font-size': '70px'
    });
  });

  // Normal Main Title
  // Write a jQuery function that returns the main title to its original state
  // *** Code Here ***
  $('.normal-title-button').on("click", function() {
    $('.main-title').css({
      'color': 'black',
      'font-size': '40px'
    }); 
  });


  // ============
  // Size Buttons 
  // ============
  // Normal Size Spaceship
  // A sample jQuery function that returns the spaceship to its normal size
  $(".normal-button").on("click", function () {
    $(".captain-planet").animate({
      height: "250px",
      width: "393.33px"
    });
  });

  // Grow Spaceship
  $(".grow-button").on("click", function () {
    // Add a jQuery selector and method to the selector to make the spaceship grow in size
    // *** Code Here ***
    $(".captain-planet").animate({
      height: "450px",
      width: "700px"
    })
  });

  // Shrink Spaceship
  // A sample jQuery function that makes the spaceship shrink in size
  $(".shrink-button").on("click", function () {
    $(".captain-planet").animate({
      height: "100px",
      width: "150"
    });
  });


  // ==================
  // Visibility Buttons
  // ==================
  // Make Spaceship Visible
  // Write a jQuery function to make the spaceship visible
  // *** Code Here ***
  $(".vis-button").on("click", function() {
    $(".captain-planet").animate({
      opacity: "1"
    });
  });

  // Make Spaceship Invisible
  // Write a jQuery function to make the spaceship invisible
  // *** Code Here ***
  $(".invis-button").on("click", function() {
    $(".captain-planet").animate({
      opacity: "0"
    });
  });


  // ==================
  // Stretch Buttons
  // ==================
  // Write a jQuery function to return the spaceship to its original width
  // *** Code Here ***
  $(".normal-width-button").on("click", function() {
    $(".captain-planet").animate({
      width: '393.33px'
    })

  });

  // Write a jQuery function to stretch the width of the spaceship
  // *** Code Here ***
  $(".stretch-button").on("click", function() {
    $(".captain-planet").animate({
      width: '2250px'
    })
  });


  // ==================
  // Rotate Buttons
  // ==================
  // Write a jQuery function to return the spaceship to its original level position
  // *** Code Here ***
  var rotate = 0;
  $(".level-ship-button").on("click", function() {
    $({deg: rotate}).animate({deg: '0'}, {
      duration: 2000,
      step: function(now) {
        $('.captain-planet').css({
          "transform": "rotate(" + now + "deg)"
        });
      }
    });
    rotate = 0;
  });

  // Write a jQuery function to rotate the spaceship 45 degrees clockwise
  // *** Code Here ***
  // initializing a variable allows for multiple rotations / clicks
  $(".rotate-clockwise-button").on("click", function() {
    $({deg: rotate}).animate({deg: '+=45'}, {
      duration: 2000,
      step: function(now) {
          $('.captain-planet').css({
            "transform": "rotate(" + now + "deg)"
          });
      }
    });
    rotate += 45;
  });

  // Write a jQuery function to rotate the spaceship 45 degrees counter-clockwise
  // *** Code Here ***
  $(".rotate-counter-clockwise-button").on("click", function() {
    $({deg: rotate}).animate({deg: '-=45'}, {
      duration: 2000,
      step: function(now) {
          $('.captain-planet').css({
            "transform": "rotate(" + now + "deg)"
          });
      }
    });
    rotate -= 45;
  });


  // ==================
  // Background Buttons
  // ==================
  // A sample jQuery function that returns the background to its original state
  $(".normal-background-button").on("click", function () {
    $(".main-column").css({
      "background": "white",
      "position": "relative",
      "z-index": "-1"
    });
  });

  // Write a jQuery function that changes the background to a color other than white
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(".blue-sky-background-button").on("click", function () {
    $(".main-column").css({
      "background": "#b1e8f3",
      "position": "relative",
      "z-index": "-1"
    });
  });

  // Write a jQuery function that changes the background to the Milky Way in the images folder
  // See the example above
  // Why does it work?
  // hint you will need to use the css method url() for the background   
  // *** Code Here ***
  $(".milky-way-galaxy-background-button").on("click", function () {
    $(".main-column").css({
      "background": "url(./images/Milky_Way.jpg)",
      "position": "relative",
      "z-index": "-1"
    });
  });


  // ====================
  // === Move Buttons ===
  // ====================
  // Move Spaceship Upward
  // Write a jQuery function that moves the spaceship upward
  $(".up-button").on("click", function () {
    $(".captain-planet").animate({  // add a jQuery method here that will 'animate' the space invader
      top: "-=100px"
    }); 
  });

  // Move Spaceship to Center
  // Write a jQuery function that moves the spaceship to the center of the of the column
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(".center-button").on("click", function () {
    $(".captain-planet").animate({
      left: "25%"
    });
  });

  // Move Spaceship Downward
  // Write a jQuery function that moves the spaceship downward
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(".down-button").on("click", function () {
    $(".captain-planet").animate({
      top: "+=100px"
    });
  });

  // Move Spaceship Leftward
  // Write a jQuery function that moves the spaceship to the left
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(".left-button").on("click", function () {
    $(".captain-planet").animate({
      left: "-=100px"
    });
  });

  // Move Spaceship to the Right
  // Write a jQuery function that moves the spaceship to the right
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(".right-button").on("click", function () {
    $(".captain-planet").animate({
      left: "+=100px"
    });
  });

  // Move Spaceship Back to Its Original Position
  // Write a jQuery function that moves the spaceship back to its original position
  // See the example above
  // Why does it work?   
  // *** Make it do something interesting before it moves.  See CSS3 animations for ideas ***
  // *** Code Here ***
  $(".back-button").on("click", function() {
    $(".captain-planet")
     .animate({
          left: '-50px',
          opacity: '0',
          height: '50px',
          width: '50px'
        })
      .delay(1000)
      .queue(function (next) { 
        $(this).css({
          top: "100px",
          left: "40px",
          opacity: '1',
          height: '250px',
          width: '393.33px'
        }); 
        next(); 
      })
  });


  // ================================  
  // Move Events for Keyboard Presses
  // ================================
  // Keyboard Up
  // Sample jQuery function that moves spaceship upward
  $(document).keyup(function (e) {
    switch (e.which) {
      case 38:
        $(".captain-planet").animate({
          top: "-=100px"
        });
    }
  });

  // Keyboard Center (The keycode for letter 'c' is 67 how can you look this up to verify it?)
  // Add a jQuery selector and method to the selector that moves the spaceship to the center of the column
  // when pressing the key 'c'
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(document).keyup(function (e) {
    switch (e.which) {
      case 67:
        $(".captain-planet").animate({
          left: "25%"
        });
    }
  });

  // Keyboard Down
  // Write a jQuery function that moves the spaceship downward
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(document).keyup(function (e) {
    switch (e.which) {
      case 40:
        $(".captain-planet").animate({
          top: "+=100px"
        });
    }
  });

  // Keyboard Left
  // Write a jQuery function that moves the spaceship to the left
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(document).keyup(function (e) {
    switch (e.which) {
      case 37:
        $(".captain-planet").animate({
          left: "-=100px"
        });
    }
  });

  // Keyboard Right
    // Write a jQuery function that moves the spaceship to the right
  // See the example above
  // Why does it work?   
  // *** Code Here ***
  $(document).keyup(function (e) {
    switch (e.which) {
      case 39:
        $(".captain-planet").animate({
          left: "+=100px"
        });
    }
  });
});

// Issues Remaining
// keyboard press movements at the same time