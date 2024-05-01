function updateHeader () {
  let header_front = document.getElementsByClassName('header-front')[0];
  let header_back = document.getElementsByClassName('header-back')[0];
  header_back.src = document.getElementsByClassName("shuffle0")[0].childNodes[0].src;
  header_front.classList.toggle("header-front");
  header_front.classList.toggle("header-back");
  header_back.classList.toggle("header-front");
  header_back.classList.toggle("header-back");
}

function shuffle (left) {
  let elementsList = Array.from(document.getElementsByClassName("shuffle"));
  let elements = [];
  for (let i = 0;i<elementsList.length;i++) {
    elements[i] = document.getElementsByClassName("shuffle" + i)[0];
  }
  let x = (left) ? -1 : 1;
  for (let i = 0;i<elementsList.length;i++) {
    elements[i].classList.toggle("shuffle" + i);
    elements[i].classList.toggle("shuffle" + (((i + x)%elementsList.length < 0) ? 7 : ((i + x)%elementsList.length)));
  }
  updateHeader();
}

var id = setInterval(shuffle, 5000);

function moveRight () {
  clearInterval(id);
  shuffle(false);
  id = setInterval(shuffle, 5000);
}

function moveLeft () {
  clearInterval(id);
  shuffle(true);
  id = setInterval(shuffle, 5000);
}
