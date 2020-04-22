function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getPhotoTemplate(name, image, contents) {
  return `
  <div class="col-lg-3 col-sm-6 col-12 mt-5">
    <div class="container h-100 border rounded">
      <div class="row">
        <div class="col-sm-12 col-6 d-flex flex-column justify-content-center">
          <h3 class="mb-3 text-center pt-3">${name}</h3>
          <img src="${image}" alt="">
        </div>
        <div class="col-sm-12 col-6">
          <p class="p-2">${contents}</p>
        </div>
      </div>
    </div>
  </div>
  `
}

window.onload = function () {
  const mySidenav = document.getElementById("mySidenav");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const photoes = document.getElementById("photoes");

  openBtn.addEventListener('click', () => {
    mySidenav.style.width = "250px";
  });

  closeBtn.addEventListener('click', () => {
    mySidenav.style.width = "0";
  });

  photoes.innerHTML = data.reduce((acc, item) => {
    const { name, image, contents } = item;
    acc += getPhotoTemplate(name, image, contents);
    return acc;
  }, '');
}