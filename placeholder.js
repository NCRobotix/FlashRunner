window.onload = function draw() {
        var canvas = document.getElementById("gameCanvas");
        var ca = canvas.getContext("2d");
        console.log(ca);
        ca.font = "50px Arial";
        ca.fillText("FLASH RUNNER", 10, 80);
      }
