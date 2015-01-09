      // ensure the web page (DOM) has loaded
      document.addEventListener("DOMContentLoaded", function () {

         // Create a popcorn instance by calling Popcorn("#id-of-my-video")
         var pop = Popcorn("#ourvideo");

         // add a footnote at 2 seconds, and remove it at 6 seconds
         pop.footnote({
           start: 2,
           end: 6,
           text: "Pop!",
           target: "footnotediv"
         });

         // play the video right away
         pop.play();

      }, false);