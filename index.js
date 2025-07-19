fetch(" ./header.html")
  .then((response) => response.text())
  .then((html) => {
    let headnav = document.getElementById("headnav");
    headnav.innerHTML = html;
  });
