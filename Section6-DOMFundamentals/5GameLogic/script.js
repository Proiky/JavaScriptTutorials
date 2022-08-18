"use strict";
//IMPLEMENTING THE GAME LOGIC!
//U proslom fajlu smo se bavili sta se desi kad neko klikne na button, sad cemo napraviti logiku igre i definisati kako ona funkcionise!

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
});
//ovo sve smo preuzeli iz fajlova prethodnog foldera, samo bez komentara
