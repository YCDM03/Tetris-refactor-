let Smino = [
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
];

let Sminorotate = [
  [-1, 0],
  [0, 0],
  [0, 1],
  [1, 1],
];
let Smino_m = [];
// let timerI = setInterval(Idown, delay);
function createSmino() {
  moving.x += 3;
  Smino_m = Smino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Smino_m[0][0]].children[Smino_m[0][1]].className =
    "Smino moving";
  main.children[Smino_m[1][0]].children[Smino_m[1][1]].className =
    "Smino moving";
  main.children[Smino_m[2][0]].children[Smino_m[2][1]].className =
    "Smino moving";
  main.children[Smino_m[3][0]].children[Smino_m[3][1]].className =
    "Smino moving";
  if (moving.y == 0) {
    Sdown();
  }
  return addSminoE();
}
function rightSmino(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Smino_m[1][0]].children[
        Smino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[3][0]].children[
        Smino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Smino_Move();
  }
}
function leftSmino(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Smino_m[0][0]].children[
        Smino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[2][0]].children[
        Smino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Smino_Move();
  }
}
function downSmino(e) {
  if (e.key == "ArrowDown") {
    Sdown();
  }
}
function SminoRotate(e) {
  if (e.key == "ArrowUp") {
    if (moving.y == 0) {
      return;
    } else if (
      main.children[Smino_m[0][0] - 1].children[
        Smino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[0][0]].children[
        Smino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Smino_m = Sminorotate.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Smino_m[0][0]].children[Smino_m[0][1]].className =
      "SminoR moving";
    main.children[Smino_m[1][0]].children[Smino_m[1][1]].className =
      "SminoR moving";
    main.children[Smino_m[2][0]].children[Smino_m[2][1]].className =
      "SminoR moving";
    main.children[Smino_m[3][0]].children[Smino_m[3][1]].className =
      "SminoR moving";

    removeSminoE();
    addSminorotateE();
  }
}

function Smino_Move() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Smino_m = Smino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Smino_m[0][0]].children[Smino_m[0][1]].className =
    "Smino moving";
  main.children[Smino_m[1][0]].children[Smino_m[1][1]].className =
    "Smino moving";
  main.children[Smino_m[2][0]].children[Smino_m[2][1]].className =
    "Smino moving";
  main.children[Smino_m[3][0]].children[Smino_m[3][1]].className =
    "Smino moving";
}

function FixedSmino() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeSminoE();
  createBlock();
}

function rightSminoR(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 8) {
      return;
    } else if (
      main.children[Smino_m[0][0]].children[
        Smino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[2][0]].children[
        Smino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[3][0]].children[
        Smino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Smino_MoveR();
  }
}
function leftSminoR(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Smino_m[0][0]].children[
        Smino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[1][0]].children[
        Smino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[3][0]].children[
        Smino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Smino_MoveR();
  }
}
function downSminoR(e) {
  if (e.key == "ArrowDown") {
    SdownR();
  }
}

function SminoRotateR(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == 8) {
      moving.x -= 1;
    } else if (
      main.children[Smino_m[2][0]].children[
        Smino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Smino_m[1][0] + 1].children[
        Smino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Smino_m = Smino.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Smino_m[0][0]].children[Smino_m[0][1]].className =
      "Smino moving";
    main.children[Smino_m[1][0]].children[Smino_m[1][1]].className =
      "Smino moving";
    main.children[Smino_m[2][0]].children[Smino_m[2][1]].className =
      "Smino moving";
    main.children[Smino_m[3][0]].children[Smino_m[3][1]].className =
      "Smino moving";

    removeSminorotateE();
    addSminoE();
  }
}

function Smino_MoveR() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Smino_m = Sminorotate.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Smino_m[0][0]].children[Smino_m[0][1]].className =
    "SminoR moving";
  main.children[Smino_m[1][0]].children[Smino_m[1][1]].className =
    "SminoR moving";
  main.children[Smino_m[2][0]].children[Smino_m[2][1]].className =
    "SminoR moving";
  main.children[Smino_m[3][0]].children[Smino_m[3][1]].className =
    "SminoR moving";
}

function FixedSminoR() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeSminorotateE();
  createBlock();
}

function Sdown() {
  if (moving.y == 18) {
    return FixedSmino();
  } else if (
    main.children[Smino_m[2][0] + 1].children[Smino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedSmino();
  } else if (
    main.children[Smino_m[3][0] + 1].children[Smino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedSmino();
  } else if (
    main.children[Smino_m[1][0] + 1].children[Smino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedSmino();
  }
  moving.y += 1;
  Smino_Move();
}

function SdownR() {
  if (moving.y == 18) {
    return FixedSminoR();
  } else if (
    main.children[Smino_m[2][0] + 1].children[Smino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedSminoR();
  } else if (
    main.children[Smino_m[3][0] + 1].children[Smino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedSminoR();
  } else if (
    main.children[Smino_m[1][0] + 1].children[Smino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedSminoR();
  }
  moving.y += 1;
  Smino_MoveR();
}

function addSminoE() {
  document.addEventListener("keydown", rightSmino);
  document.addEventListener("keydown", leftSmino);
  document.addEventListener("keydown", downSmino);
  document.addEventListener("keydown", SminoRotate);
  document.addEventListener("keydown", Sblowdown);
}
function removeSminoE() {
  document.removeEventListener("keydown", rightSmino);
  document.removeEventListener("keydown", leftSmino);
  document.removeEventListener("keydown", downSmino);
  document.removeEventListener("keydown", SminoRotate);
  document.removeEventListener("keydown", Sblowdown);
}

function addSminorotateE() {
  document.addEventListener("keydown", rightSminoR);
  document.addEventListener("keydown", leftSminoR);
  document.addEventListener("keydown", downSminoR);
  document.addEventListener("keydown", SminoRotateR);
  document.addEventListener("keydown", SblowdownR);
}
function removeSminorotateE() {
  document.removeEventListener("keydown", rightSminoR);
  document.removeEventListener("keydown", leftSminoR);
  document.removeEventListener("keydown", downSminoR);
  document.removeEventListener("keydown", SminoRotateR);
  document.removeEventListener("keydown", SblowdownR);
}

function Sblowdown(e) {
  if (e.key == "Shift") {
    do {
      Sdown();
    } while (moving.y !== 0);
  }
}

function SblowdownR(e) {
  if (e.key == "Shift") {
    do {
      SdownR();
    } while (moving.y !== 0);
  }
}
