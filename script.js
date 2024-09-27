var num1;
var num2;
var history;
var counter = 0;
var hasBeenClicked = false;
var historyEl = document.getElementById("history");
var dropdownEl = document.getElementById("select");
var degree = 0;
var rolls = 0;

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("roll").addEventListener("click", roll);
document.getElementById("select").addEventListener("change", q2);

var timer = setInterval(rotate, 500);

function clearguess() {
  document.getElementById("guess").value = "";
  document.getElementById("guess2").value = "";
}

function q2() {
  var dropdown = dropdownEl.value;
  if (dropdown == 4) {
    document.getElementById("questions").innerHTML =
      "<p>How many rolls?: <input type='text' id='guess3'></p>";
  } else {
    document.getElementById("questions").innerHTML =
      "<p>Die #1: <input type='text' id='guess' /></p><p>Die #2: <input type='text' id='guess2' /></p>";
  }
}

function guess() {
  var dropdown = dropdownEl.value;
  var guess = document.getElementById("guess").value;
  var guess2 = document.getElementById("guess2").value;

  if (dropdown == 1) {
    if (guess == num1 && guess2 == num2) {
      document.getElementById("answer").innerHTML = "You got it!";
    } else if (guess == num1) {
      document.getElementById("answer").innerHTML =
        "You got the first one right.";
    } else if (guess2 == num2) {
      document.getElementById("answer").innerHTML =
        "You got the second one right.";
    } else {
      document.getElementById("answer").innerHTML =
        "You didn't get it right...";
    }
  } else if (dropdown == 2) {
    if (guess == num1 && guess2 == num2) {
      document.getElementById("answer").innerHTML = "You got it!";
    } else if (guess == num1) {
      document.getElementById("answer").innerHTML =
        "You got the first one right.";
    } else if (guess2 == num2) {
      document.getElementById("answer").innerHTML =
        "You got the second one right.";
    } else if (guess3 == rolls) {
    } else {
      document.getElementById("answer").innerHTML =
        "You didn't get it right...";
    }
  }
}

function rotate() {
  num1 = Math.round(Math.random() * 5 + 1);
  num2 = Math.round(Math.random() * 5 + 1);

  one.src = `images/${num1}.png`;
  two.src = `images/${num2}.png`;
  degree += 15;
  document.getElementById("one").style.rotate = `${degree}deg`;
  document.getElementById("two").style.rotate = `${degree}deg`;
}

function reset() {
  var dropdown = dropdownEl.value;
  historyEl.innerHTML = "";
  dropdown = 1;
  document.getElementById("one").src = "images/0.png";
  document.getElementById("two").src = "images/0.png";
  counter = 0;
  document.getElementById("one").style.rotate = "0deg";
  document.getElementById("two").style.rotate = "0deg";
  degree = 0;
  document.getElementById("answer").innerHTML = "";
  clearInterval(timer);
}

function roll() {
  var dropdown = dropdownEl.value;

  if (dropdown == 1) {
    clearInterval(timer);
    document.getElementById("one").style.rotate = "0deg";
    document.getElementById("two").style.rotate = "0deg";

    num1 = Math.round(Math.random() * 5 + 1);
    num2 = Math.round(Math.random() * 5 + 1);

    one.src = `images/${num1}.png`;
    two.src = `images/${num2}.png`;

    historyEl.innerHTML += `<span class="history">${num1},${num2}<span/>`;
    counter++;
    if (counter > 9) {
      historyEl.innerHTML += "<br><br>";
      counter = 0;
    }
    console.log(counter);
    guess();
    clearguess();
  } else if (dropdown == 2) {
    for (var i = 0; i < 5; i++) {
      num1 = Math.round(Math.random() * 5 + 1);
      num2 = Math.round(Math.random() * 5 + 1);

      history = `${num1}, ${num2}`;

      one.src = `images/${num1}.png`;
      two.src = `images/${num2}.png`;

      historyEl.innerHTML += `<span class="history">${num1},${num2}<span/>`;
      guess();
    }
    counter++;
    if (counter > 1) {
      historyEl.innerHTML += "<br><br>";
      counter = 0;
    }
    clearguess();
  } else if (dropdown == 3) {
    var quand = +prompt("How many rolls?");
    for (var i = 0; i < quand; i++) {
      num1 = Math.round(Math.random() * 5 + 1);
      num2 = Math.round(Math.random() * 5 + 1);
      history = `${num1}, ${num2}`;

      one.src = `images/${num1}.png`;
      two.src = `images/${num2}.png`;

      historyEl.innerHTML += `<span class="history">${num1},${num2}<span/>`;
      counter++;
      guess();
      if (counter > 9) {
        historyEl.innerHTML += "<br><br>";
        counter = 0;
      }
    }
    clearguess();
  } else if (dropdown == 4) {
    clearInterval(timer);
    document.getElementById("one").style.rotate = "0deg";
    document.getElementById("two").style.rotate = "0deg";
    degree = 0;
    while (num1 !== 1 && num2 !== 1) {
      num1 = Math.round(Math.random() * 5 + 1);
      num2 = Math.round(Math.random() * 5 + 1);

      history = `${num1}, ${num2}`;

      historyEl.innerHTML += `<span class="history">${num1},${num2}<span/>`;
      counter++;
      console.log(`counter: ${counter}`);
      if (counter > 9) {
        historyEl.innerHTML += "<br><br>";
        counter = 0;
      }
      rolls++;
      console.log(`rolls: ${rolls}`);
    }
    historyEl.innerHTML += `<span class="history">1,1<span/>`;
    counter++;
    if (counter > 9) {
      historyEl.innerHTML += "<br><br>";
      counter = 0;
    }
    one.src = "images/1.png";
    two.src = "images/1.png";
    num1 = 6;
    num2 = 6;
    guess();
  }
}
