let Omino = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
];
let Omino_x = [];

function createOmino() {
  moving.x += 4;
  Omino_x = Omino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Omino_x[0][0]].children[Omino_x[0][1]].className =
    "Omino moving";
  main.children[Omino_x[1][0]].children[Omino_x[1][1]].className =
    "Omino moving";
  main.children[Omino_x[2][0]].children[Omino_x[2][1]].className =
    "Omino moving";
  main.children[Omino_x[3][0]].children[Omino_x[3][1]].className =
    "Omino moving";

  return addOminoE();
}

function Odown() {
  if (moving.y == 18) {
    return FixedOmino();
  } else if (
    main.children[Omino_x[1][0] + 1].children[Omino_x[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedOmino();
  } else if (
    main.children[Omino_x[3][0] + 1].children[Omino_x[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedOmino();
  }
  moving.y += 1;
  Omino_Move();
}
function OminoRight(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 8) {
      return;
    } else if (
      main.children[Omino_x[3][0]].children[
        Omino_x[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Omino_x[2][0]].children[
        Omino_x[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }

    moving.x += 1;
    Omino_Move();
  }
}

function OminoLeft(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Omino_x[0][0]].children[
        Omino_x[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Omino_x[1][0]].children[
        Omino_x[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Omino_Move();
  }
}

function OminoDown(e) {
  if (e.key == "ArrowDown") {
    if (moving.y == 18) {
      return FixedOmino();
    } else if (
      main.children[Omino_x[1][0] + 1].children[
        Omino_x[1][1]
      ].classList.contains("fixed")
    ) {
      return FixedOmino();
    } else if (
      main.children[Omino_x[3][0] + 1].children[
        Omino_x[3][1]
      ].classList.contains("fixed")
    ) {
      return FixedOmino();
    }
    moving.y += 1;
    Omino_Move();
  }
}
let Omino_Move = () => {
  Omino_x = Omino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  main.children[Omino_x[0][0]].children[Omino_x[0][1]].className =
    "Omino moving";
  main.children[Omino_x[1][0]].children[Omino_x[1][1]].className =
    "Omino moving";
  main.children[Omino_x[2][0]].children[Omino_x[2][1]].className =
    "Omino moving";
  main.children[Omino_x[3][0]].children[Omino_x[3][1]].className =
    "Omino moving";
};

function FixedOmino() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });

  moving.y = 0;
  moving.x = 0;

  clearLine();
  removeOminoE();
  createBlock();
}

function addOminoE() {
  document.addEventListener("keydown", OminoRight);
  document.addEventListener("keydown", OminoLeft);
  document.addEventListener("keydown", OminoDown);
  document.addEventListener("keydown", Oblowdown);
}

function removeOminoE() {
  document.removeEventListener("keydown", OminoRight);
  document.removeEventListener("keydown", OminoLeft);
  document.removeEventListener("keydown", OminoDown);
  document.removeEventListener("keydown", Oblowdown);
}

function Oblowdown(e) {
  if (e.key == "Shift") {
    do {
      Odown();
    } while (moving.y !== 0);
  }
}
