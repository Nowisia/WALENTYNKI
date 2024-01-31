function pokazWiadomosc(odpowiedz) {
  if (odpowiedz === "Nie") {
    const przyciskNie = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - przyciskNie.offsetWidth;
    const maxHeight = window.innerHeight - przyciskNie.offsetHeight;

    // Set button position to absolute
    przyciskNie.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    przyciskNie.style.left = randomX + "px";
    przyciskNie.style.top = randomY + "px";

    // Update text content and show hidden message
    document.getElementById("question").textContent =
      "Przycisk 'Nie' jest tylko dla podpuchy mendo";
    document.getElementById("name").style.display = "none";
    document.getElementById("no-message").style.display = "block";

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  if (odpowiedz === "Tak") {
    // Usunięcie wiadomości z imieniem, przycisku "Nie" i ukrytej wiadomości
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    document.getElementById("no-message").remove();

    // Zaktualizuj treść tekstu, pokaż wiadomość i zmień źródło obrazu na "dance.gif"
    const wiadomoscTak = document.getElementById("question");
    wiadomoscTak.textContent = "LETS GOOO widzimy się 14 lutego 😘😘";
    wiadomoscTak.style.display = "block";
    wiadomoscTak.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Usunięcie przycisku "Tak"
    document.getElementById("yesButton").remove();
  }
}
