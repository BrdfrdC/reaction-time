/* eslint-disable */
<template>
  <div class="reaction-background">
    <div class="reaction-container">
      <h1 class="game-title">Mental Stack Reaction Time Test Extravaganza</h1>
      <h2 class="game-desc">Hover over a button to view the rules of the game</h2>
      <div class="test-picker-row">
        <div class="test-picker-item" id="two-items">2 items</div>
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

  const twoItemsButton = document.getElementById("two-items");

  twoItemsButton.addEventListener("mouseover", function (e) {
    document.querySelector(".game-desc").innerHTML = "When the blue screen turns green, press F. When it turns red, press J.";
  });

  twoItemsButton.addEventListener("click", function (e) {
    gameType = "twoItems";
    twoItems();
  });

  function twoItems() {
    startTime = 0;
    stopTime = 0;
    document.querySelector(".game-title").innerHTML = "Wait...";
    document.querySelector(".game-desc").style.display = "none";
    document.querySelector(".test-picker-row").style.display = "none";
    document.querySelector(".disclaimer-text").style.display = "none";

    document.removeEventListener("keydown", resultsScreen);
    document.removeEventListener("keydown", twoItems);
    
    randomize();
  }

  async function randomize() {
    const sleepTime = Math.random() * (7000 - 3000) + 3000;

    await new Promise(r => setTimeout(r, sleepTime));
    changeScreen();
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
    stopTime = Date.now().toString();
    const reactionTime = (stopTime - startTime);

    document.querySelector(".reaction-background").style.backgroundColor = "#419ad5";
    document.querySelector(".game-title").innerHTML = reactionTime.toString() + "ms";

    console.log(reactionTime);
    timesArray.push(reactionTime);
    attemptCount++;
    console.log(attemptCount);

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

    document.querySelector(".game-title").innerHTML = Math.round(average).toString() + "ms";
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
    document.querySelector(".test-picker-row").style.display = "flex";
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

.test-picker-row {
  display: flex;
  flex-direction: row;
}

.test-picker-item {
  width: 7vw;
  height: 5vh;
  max-width: 120px;
  max-height: 50px;
  background-color: yellow;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  pointer-events: visible;
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
