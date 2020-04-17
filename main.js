function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.onload = function () {
  const mySidenav = document.getElementById("mySidenav");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.addEventListener('click', () => {
    mySidenav.style.width = "250px";
  });

  closeBtn.addEventListener('click', () => {
    mySidenav.style.width = "0";
  })
}