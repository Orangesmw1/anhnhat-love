const textConfig = {
    text1: "Hế lô bebyyyy :))",
    text2: "Có cái này muốn nói nè, ấn vào nút bên dưới đê !!",
    text3: "Bây giờ Liên có muốn làm người yêu tớ không?",
    text5: "Mơ à!!!",
    text6: "Tới's luôn :))))",
   
  };
  


  $(document).ready(function () {
    // process bar
    setTimeout(function () {
      firstQuestion();
      $(".spinner").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
      $("body").delay(350).css({
        overflow: "visible",
      });
    }, 600);
  
    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);
  
    function firstQuestion() {
      $(".content").hide();
      Swal.fire({
        title: textConfig.text1,
        text: textConfig.text2,
        imageUrl: "image/bg.jpg",
        imageWidth: 300,
        imageHeight: 300,
        background: 'transparent',
        imageAlt: "Custom image",
      }).then(function () {
        $(".content").show(200);
      });
    }
  
    // switch button position
    function switchButton() {
      var audio = new Audio("sound/duck.mp3");
      audio.play();
      var leftNo = $("#no").css("left");
      var topNO = $("#no").css("top");
      var leftY = $("#yes").css("left");
      var topY = $("#yes").css("top");
      $("#no").css("left", leftY);
      $("#no").css("top", topY);
      $("#yes").css("left", leftNo);
      $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
      var audio = new Audio("sound/Swish1.mp3");
      audio.play();
      if (screen.width <= 600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
      } else {
        var x = Math.random() * 500;
        var y = Math.random() * 500;
      }
      var left = x + "px";
      var top = y + "px";
      $("#no").css("left", left);
      $("#no").css("top", top);
    }
  
    var n = 0;
    $("#no").mousemove(function () {
      if (n < 1) switchButton();
      if (n > 1) moveButton();
      n++;
    });
    $("#no").click(() => {
      if (screen.width >= 900) switchButton();
    });
  
    // generate text in input
    function textGenerate() {
      var n = "";
      var text = " " + textConfig.text9;
      var a = Array.from(text);
      var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
      var count = textVal.length;
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          n = n + a[i];
          if (i == text.length + 1) {
            $("#txtReason").val("");
            n = "";
            break;
          }
        }
      }
      $("#txtReason").val(n);
    }
  
    // show popup
    $("#yes").click(function () {
      window.location = "https://orangesmw1.github.io/anhnhat/"
    });
  });
  