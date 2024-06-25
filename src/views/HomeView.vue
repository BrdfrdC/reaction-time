/* eslint-disable */
<template>
  <div class="reaction-background">
    <div class="reaction-container">
      <h1 class="game-title">Mental Stack Reaction Time Test Extravaganza</h1>
      <h2 class="game-desc">Hover over a button to view the rules of the game</h2>
      <div class="options-picker-row">
        <div class="test-picker-row">
          <div class="test-picker-item" id="two-items">2 items</div>
        </div>
        <div class="unit-picker-row">
          <div class="disclaimer-text">Miliseconds</div>
          <label class="unit-switch">
            <input class="unit-checkbox" type="checkbox">
            <span class="slider round"></span>
          </label>
          <div class="disclaimer-text">Frames</div>
        </div>
      </div>
      <div class="next-button test-picker-item">Return Home</div>
      <div class="disclaimer-text">(This site does not work on mobile)</div>
    </div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue';

onMounted(() => {
  var attemptCount = 0;
  var timesArray = [];
  var correctKey = "";
  var startTime = 0;
  var stopTime = 0;
  var gameType = "";
  var timeUnits = "milisecs";

  const twoItemsButton = document.getElementById("two-items");

  twoItemsButton.addEventListener("mouseover", function (e) {
    document.querySelector(".game-desc").innerHTML = "When the blue screen turns green, press F. When it turns red, press J.";
  });

  twoItemsButton.addEventListener("click", function (e) {
    gameType = "twoItems";
    gameStart(gameType);
  });

  function gameStart(gameType) {
    if(document.querySelector('.unit-checkbox').checked) {
      timeUnits = "frames"
    }

    switch (gameType) {
      case "twoItems":
        twoItems();
        break;
    }
  }

  function twoItems() {
    startTime = 0;
    stopTime = 0;

    document.querySelector(".game-title").innerHTML = "Wait...";
    document.querySelector(".game-desc").style.display = "none";
    document.querySelector(".options-picker-row").style.display = "none";
    document.querySelector(".disclaimer-text").style.display = "none";

    document.removeEventListener("keydown", resultsScreen);
    document.removeEventListener("keydown", twoItems);
    
    randomize();
  }

  async function randomize() {
    const sleepTime = Math.random() * (4000 - 3000) + 3000;
    const gameTimeout = setTimeout(changeScreen, sleepTime);

    document.addEventListener("keydown", function(e) {
      early(gameTimeout);
    });
  }

  function early(timeout) {
    clearTimeout(timeout);
    document.removeEventListener("keydown", early);

    document.querySelector(".game-title").innerHTML = "Too Early!";
    document.querySelector(".game-desc").style.display = "flex";
    document.querySelector(".game-desc").innerHTML = "Wait until the screen changes before pressing a button. Press any button to restart.";
    document.addEventListener("keydown", twoItems);
  }

  function changeScreen() {
    switch (gameType) {
      case "twoItems":
        const itemPicked = (Math.floor(Math.random() * 2) == 0);

        if (itemPicked) {
          document.querySelector(".reaction-background").style.backgroundColor = "green";
          document.querySelector(".game-title").innerHTML = "Press F!";
          correctKey = "f";
        } else { 
          document.querySelector(".reaction-background").style.backgroundColor = "red";
          document.querySelector(".game-title").innerHTML = "Press J!";
          correctKey = "j";
        }

        startTimer();
        document.addEventListener("keypress", checkKeyPress);
        break;
    }
  }

  function checkKeyPress(e) {
    if(e.key == correctKey) {
      stopTimer();
    } else {
      fail();
    }
  }

  function startTimer() {
    startTime = Date.now().toString();
  }

  function stopTimer() {
    document.removeEventListener("keypress", checkKeyPress);
    document.removeEventListener("keydown", twoItems);

    stopTime = Date.now().toString();
    const reactionTime = (stopTime - startTime);

    document.querySelector(".reaction-background").style.backgroundColor = "#419ad5";
    document.querySelector(".game-title").innerHTML = reactionTime.toString() + "ms";

    timesArray.push(reactionTime);
    attemptCount++;

    resetGame();
  }
  
  function fail() {
    document.removeEventListener("keypress", checkKeyPress);

    document.querySelector(".game-desc").style.display = "grid";

    document.querySelector(".game-title").innerHTML = "Wrong button!";
    document.querySelector(".game-desc").innerHTML = "Press any button to retry.";
    document.querySelector(".reaction-background").style.backgroundColor = "#419ad5";

    document.addEventListener("keydown", twoItems);
  }

  function resetGame() {
    document.querySelector(".game-desc").style.display = "grid";
    if (attemptCount >= 5) {
      document.querySelector(".game-desc").innerHTML = "Press any button to see results.";
      document.addEventListener("keydown", resultsScreen);
    } else {
      document.querySelector(".game-desc").innerHTML = "Press any button to continue.";
      document.addEventListener("keydown", twoItems);
    }
  }

  function resultsScreen() {
    document.removeEventListener("keydown", resultsScreen);

    const sum = timesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );

    const average = sum / 5;

    if (timeUnits == "milisecs") {
      document.querySelector(".game-title").innerHTML = Math.round(average).toString() + "ms";
    } else if (timeUnits == "frames") {
      document.querySelector(".game-title").innerHTML = Math.round(average / (1000/ 60)).toString() + "frames";
    }

    
    document.querySelector(".game-desc").innerHTML = "Congrats! Share it with your friends!";
    document.querySelector(".next-button").style.display = "flex";

    document.querySelector(".next-button").addEventListener("click", resetSite);
  }

  function resetSite() {
    attemptCount = 0;
    timesArray = [];
    document.querySelector(".game-title").innerHTML = "Mental Stack Reaction Time Test Extravaganza";
    document.querySelector(".game-desc").style.display = "flex";
    document.querySelector(".game-desc").innerHTML = "Hover over a button to view the rules of the game";
    document.querySelector(".options-picker-row").style.display = "flex";
    document.querySelector(".disclaimer-text").style.display = "flex";
    document.querySelector(".next-button").style.display = "none";
  }

})

</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  margin: 0 0 0 0;
}

.reaction-background {
  width: 100vw;
  height: 100vh;
  background-color: #419ad5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reaction-container {
  width: 80vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.game-title {
  font-weight: bold;
  color: #fff;
  font-size: 6vw;
  line-height: 7vw;
  text-align: center;
}

.game-desc {
  color: #fff;
  line-height: 5vh;
  text-align: center;
  font-size: 2vw;
}

.options-picker-row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test-picker-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

.unit-picker-row {
  position: relative;
  left: -1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 15vw;
  justify-content: space-around;
  margin-bottom: 20px;
}

.test-picker-item {
  width: 7vw;
  height: 5vh;
  max-width: 120px;
  max-height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  pointer-events: visible;
  background-color: rgb(247, 224, 19);
}

.unit-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.unit-switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 34px;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: rgb(247, 224, 19);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(247, 224, 19);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.next-button {
  display: none;
  font-size: 15px;
}

.disclaimer-text {
  color: #fff;
  font-size: 20px;
}

</style>
