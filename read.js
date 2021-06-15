// $(document).ready(function () {
  
//     $("p").mouseenter(
//     function () {
//       $(this).find("span").each(function (i,e){
//             $("p span").removeClass("hover");
//             $(e).addClass("hover");
//             var msg = new SpeechSynthesisUtterance();
//             msg.text = $(e).text();
//             speechSynthesis.speak(msg);

//       });
      
//     }
    
//   );
// });













$(document).ready(function () {
  
    $("span").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );
  // $("p").click(
  //   function () {
  //     var msg = new SpeechSynthesisUtterance();
  //     msg.text = $(this).text();
  //     speechSynthesis.speak(msg);
  //   }
  // );

  $(".number").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );
  $("textPath").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );

  $(".statement-container").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );

    $(".chapter-name").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );

      $(".chapter-number").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );

        $("button").hover(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );

  // _______Nummer_____________________________________________________

  $(".zz0").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Null";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz1").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Eins";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz2").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Zwei";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz3").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Drei";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz4").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Vier";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz5").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Fünf";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz6").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Sechs";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz7").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Sieben";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz8").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Acht";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz9").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Neun";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz10").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Zehn";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz11").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Elf";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz12").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Zwölf";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz13").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Dreizehn";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz14").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Vierzehn";
      speechSynthesis.speak(msg);
    }
  );

      $(".zz15").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Fünfzehn";
      speechSynthesis.speak(msg);
    }
  );

    


});