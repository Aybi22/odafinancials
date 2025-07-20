fetch(" ./header.html")
  .then((response) => response.text())
  .then((html) => {
    let headnav = document.getElementById("headnav");
    headnav.innerHTML = html;
  });

fetch(" ./footer.html")
  .then((response) => response.text())
  .then((html) => {
    let footer = document.getElementById("footer");
    footer.innerHTML = html;
  });
