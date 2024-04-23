let Zmino = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 2],
];

let Zminorotate = [
  [-1, 2],
  [0, 1],
  [0, 2],
  [1, 1],
];
let Zmino_m = [];
// let timerI = setInterval(Idown, delay);
function createZmino() {
  moving.x += 4;
  Zmino_m = Zmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Zmino_m[0][0]].children[Zmino_m[0][1]].className =
    "Zmino moving";
  main.children[Zmino_m[1][0]].children[Zmino_m[1][1]].className =
    "Zmino moving";
  main.children[Zmino_m[2][0]].children[Zmino_m[2][1]].className =
    "Zmino moving";
  main.children[Zmino_m[3][0]].children[Zmino_m[3][1]].className =
    "Zmino moving";
  if (moving.y == 0) {
    Zdown();
  }
  return addZminoE();
}
function rightZmino(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Zmino_m[1][0]].children[
        Zmino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[3][0]].children[
        Zmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Zmino_Move();
  }
}
function leftZmino(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Zmino_m[0][0]].children[
        Zmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[2][0]].children[
        Zmino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Zmino_Move();
  }
}
function downZmino(e) {
  if (e.key == "ArrowDown") {
    Zdown();
  }
}
function ZminoRotate(e) {
  if (e.key == "ArrowUp") {
    if (moving.y == 0) {
      return;
    } else if (
      main.children[Zmino_m[3][0] - 1].children[
        Zmino_m[3][1]
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[3][0] - 2].children[
        Zmino_m[3][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    Zmino_MoveR();
    removeZminoE();
    addZminorotateE();
  }
}

function Zmino_Move() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Zmino_m = Zmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Zmino_m[0][0]].children[Zmino_m[0][1]].className =
    "Zmino moving";
  main.children[Zmino_m[1][0]].children[Zmino_m[1][1]].className =
    "Zmino moving";
  main.children[Zmino_m[2][0]].children[Zmino_m[2][1]].className =
    "Zmino moving";
  main.children[Zmino_m[3][0]].children[Zmino_m[3][1]].className =
    "Zmino moving";
}

function FixedZmino() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeZminoE();
  createBlock();
}

function rightZminoR(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Zmino_m[0][0]].children[
        Zmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[2][0]].children[
        Zmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[3][0]].children[
        Zmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Zmino_MoveR();
  }
}
function leftZminoR(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == -1) {
      return;
    } else if (
      main.children[Zmino_m[0][0]].children[
        Zmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[1][0]].children[
        Zmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[3][0]].children[
        Zmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Zmino_MoveR();
  }
}
function downZminoR(e) {
  if (e.key == "ArrowDown") {
    ZdownR();
  }
}

function ZminoRotateR(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == -1) {
      moving.x += 1;
    } else if (
      main.children[Zmino_m[1][0]].children[
        Zmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Zmino_m[3][0]].children[
        Zmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    Zmino_Move();
    removeZminorotateE();
    addZminoE();
  }
}

function Zmino_MoveR() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Zmino_m = Zminorotate.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Zmino_m[0][0]].children[Zmino_m[0][1]].className =
    "ZminoR moving";
  main.children[Zmino_m[1][0]].children[Zmino_m[1][1]].className =
    "ZminoR moving";
  main.children[Zmino_m[2][0]].children[Zmino_m[2][1]].className =
    "ZminoR moving";
  main.children[Zmino_m[3][0]].children[Zmino_m[3][1]].className =
    "ZminoR moving";
}

function FixedZminoR() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeZminorotateE();
  createBlock();
}

function Zdown() {
  if (moving.y == 18) {
    return FixedZmino();
  } else if (
    main.children[Zmino_m[0][0] + 1].children[Zmino_m[0][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedZmino();
  } else if (
    main.children[Zmino_m[2][0] + 1].children[Zmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedZmino();
  } else if (
    main.children[Zmino_m[3][0] + 1].children[Zmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedZmino();
  }
  moving.y += 1;
  Zmino_Move();
}

function ZdownR() {
  if (moving.y == 18) {
    return FixedZminoR();
  } else if (
    main.children[Zmino_m[2][0] + 1].children[Zmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedZminoR();
  } else if (
    main.children[Zmino_m[3][0] + 1].children[Zmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedZminoR();
  }
  moving.y += 1;
  Zmino_MoveR();
}

function addZminoE() {
  document.addEventListener("keydown", rightZmino);
  document.addEventListener("keydown", leftZmino);
  document.addEventListener("keydown", downZmino);
  document.addEventListener("keydown", ZminoRotate);
  document.addEventListener("keydown", Zblowdown);
}
function removeZminoE() {
  document.removeEventListener("keydown", rightZmino);
  document.removeEventListener("keydown", leftZmino);
  document.removeEventListener("keydown", downZmino);
  document.removeEventListener("keydown", ZminoRotate);
  document.removeEventListener("keydown", Zblowdown);
}

function addZminorotateE() {
  document.addEventListener("keydown", rightZminoR);
  document.addEventListener("keydown", leftZminoR);
  document.addEventListener("keydown", downZminoR);
  document.addEventListener("keydown", ZminoRotateR);
  document.addEventListener("keydown", ZblowdownR);
}
function removeZminorotateE() {
  document.removeEventListener("keydown", rightZminoR);
  document.removeEventListener("keydown", leftZminoR);
  document.removeEventListener("keydown", downZminoR);
  document.removeEventListener("keydown", ZminoRotateR);
  document.removeEventListener("keydown", ZblowdownR);
}

function Zblowdown(e) {
  if (e.key == "Shift") {
    do {
      Zdown();
    } while (moving.y !== 0);
  }
}

function ZblowdownR(e) {
  if (e.key == "Shift") {
    do {
      ZdownR();
    } while (moving.y !== 0);
  }
}
