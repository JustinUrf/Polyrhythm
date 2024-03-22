import './style.css'

const paper = document.getElementById("paper"),
      pen = paper.getContext("2d");
      

let startTime = new Date().getTime();

const draw = () => {

    const currentTime = new Date().getTime(),
          elapsedTime = (currentTime - startTime) / 1000;

    paper.width = paper.clientWidth;
    paper.height = paper.clientHeight;

    const start = {
      x: paper.wdith * 0.1,
      y: paper.height * 0.9
    }

    const end = {
      x: paper.width * 0.9,
      y: paper.height * 0.9
    }

    pen.strokeStyle = "white"
    pen.lineWidth = 6;

    pen.beginPath()
    pen.moveTo(start.x, start.y);
    pen.lineTo(end.x, end.y);
    pen.stroke()

    const center = {
      x: paper.width * 0.5,
      y: paper.height * 0.9
    }

    //Draws arc of the circle
    pen.beginPath();
    pen.arc(center.x, center.y, length * 0.05, Math.PI, 2 * Math.PI);
    pen.stroke();

    const velocity = length * 0.05,
          maxAngle = 2 * Math.PI,
          distance = Math.PI +(elapsedTime * velocity),
          modDistance = distance % maxAngle,
          adjustedDistance = modDistance >= Math.PI ? modDistance : maxAngle - modDistance;

    const x = center.x + arcRadius * Math.cos(adjustedDistance),
          y = center.y +arcRadius * Math.sin(adjustedDistance);

    //Draw the circle
    pen.fillStyl = "white";
    pen.beginPath();
    pen.arc(center.x, center.y, length * 0.0065, 0, 2 * Math.PI);
    pen.fill();

    requestAnimationFrame(draw);

 }


 draw();