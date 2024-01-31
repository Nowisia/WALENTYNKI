function pokazWiadomosc(odpowiedz) {
  if (odpowiedz === "Nie") {
    const przyciskNie = document.getElementById("no-button");
    const kontener = document.querySelector(".container");
    const maksSzerokosc = window.innerWidth - przyciskNie.offsetWidth;
    const maksWysokosc = window.innerHeight - przyciskNie.offsetHeight;

    // Ustawienie pozycji przycisku na absolutną
    przyciskNie.style.position = "absolute";

    // Zmiana źródła obrazu na "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generowanie losowych współrzędnych w obrębie widocznego kontenera
    const losowaX = Math.max(0, Math.floor(Math.random() * maksSzerokosc));
    const losowaY = Math.max(0, Math.floor(Math.random() * maksWysokosc));

    // Zastosowanie nowych współrzędnych do przycisku
    przyciskNie.style.left = losowaX + "px";
    przyciskNie.style.top = losowaY + "px";

    // Zaktualizuj treść tekstu i ukryj wiadomość z imieniem
    document.getElementById("question").textContent =
      "Przycisk 'Nie' jest tylko dla efektu wizualnego";
    document.getElementById("name").style.display = "none";

    // Opcjonalnie: Możesz także dodać timeout do zresetowania pozycji po kilku sekundach
  }

  if (odpowiedz === "Tak") {
    // Usunięcie wiadomości z imieniem i przycisku "Nie"
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Zaktualizuj treść tekstu, pokaż wiadomość i zmień źródło obrazu na "dance.gif"
    const wiadomoscTak = document.getElementById("question");
    wiadomoscTak.textContent = "LETS GOOO zobaczymy się 14 lutego 😘😘";
    wiadomoscTak.style.display = "block";
    wiadomoscTak.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Usunięcie przycisku "Tak"
    document.getElementById("yesButton").remove();
  }
}
