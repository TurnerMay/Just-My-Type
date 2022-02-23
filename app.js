$(document).ready(function () {
  const sentArr = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let sentCounter = 0; // tracker for which sentence
  let letterCounter = 0; // tracker for current letter in sentence

  $("#keyboard-upper-container").hide();
  $("#sentence").append(sentArr[sentCounter]);
  $("#target-letter").append(sentArr[sentCounter][letterCounter]);

  $("body").keydown(function (key) {
    //if shift key is pushed
    if (key.which == 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    } else {
      //if they've hit the correct character
      if (key.key == sentArr[sentCounter][letterCounter]) {
        let correct = $('<span class="glyphicon glyphicon-ok"></span>');
        $("#feedback").append(correct);
      } else {
        let incorrect = $('<span class="glyphicon glyphicon-remove"></span');
        $("#feedback").append(incorrect);
      }

      $("#yellow-block").css("left", "+=17.5px");
      letterCounter++;

      if (letterCounter < sentArr[sentCounter].length) {
        $("#target-letter").text(sentArr[sentCounter][letterCounter]);
      } //if sentence is over
      else {
        sentCounter++;

        if (sentCounter === sentArr.length) {
          console.log("game won");
          //   let $btn = $("<button>Play Again?</button>")
          //   $('#prompt-container').append($btn)}

          setTimeout(function () {
            let tryAgain = confirm("Do you want to try again?");
            if (tryAgain == true) {
              window.location.reload();
              return;
            }
          }, 4000);
        } else {
          letterCounter = 0;
          $("#sentence").text(sentArr[sentCounter]);
          $("#target-letter").text(sentArr[sentCounter][letterCounter]);
          $("#feedback").empty();
          $("#yellow-block").css("left", "18px");
          // console.log(letterCounter);
          // console.log(sentCounter);
          // console.log(sentArr[sentCounter].length);
        }
      }

      // $("#yellow-block").css("left", "+=17.5px");
      // let $btn = $("<button>Play Again?</button>")
      // $("#target-letter").append($btn)
      // $("$btn").on("click", functtion(){'<button onClick= "window.location.reload();">Play Again?</button>'
      // })
    }

    //checking if sentence is over
  });

  $("body").keyup(function (key) {
    if (key.which == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();
    }
  });

  $(document).keypress(function (e) {
    let keyPress = e.key.charCodeAt();
    $("#" + keyPress).css("backgroundColor", "yellow");
  });
  $(document).keyup(function (e) {
    let keyPress = e.key.charCodeAt();
    $("#" + keyPress).css("backgroundColor", "");
  });
});
