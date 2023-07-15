//  window.onload = function() {
//   const audio = document.getElementById("myAudio");
//   audio.play();
//  }

 function playAudio() {
    const audio = document.getElementById("fonMusic");
    if (!audio.paused) {
        audio.pause();
        return
    }
    audio.play();
 }