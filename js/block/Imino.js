let Imino = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
];
let Iminorotate = [
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
];
let Imino_m = [];

function createImino() {
  moving.x += 3;
  Imino_m = Imino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });

  main.children[Imino_m[0][0]].children[Imino_m[0][1]].className =
    "Imino moving";
  main.children[Imino_m[1][0]].children[Imino_m[1][1]].className =
    "Imino moving";
  main.children[Imino_m[2][0]].children[Imino_m[2][1]].className =
    "Imino moving";
  main.children[Imino_m[3][0]].children[Imino_m[3][1]].className =
    "Imino moving";

  addIminoE();
}

function IminoRight(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 6) {
      return;
    } else if (
      main.children[Imino_m[3][0]].children[
        Imino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Imino_Move();
  }
}
function IminoLeft(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Imino_m[0][0]].children[
        Imino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Imino_Move();
  }
}
function IminoDown(e) {
  if (e.key == "ArrowDown") {
    Idown();
  }
}

function IminoRotate(e) {
  if (e.key == "ArrowUp") {
    if (moving.y > 16) {
      return;
    } else if (
      main.children[Imino_m[1][0] + 1].children[
        Imino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[1][0] + 2].children[
        Imino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[1][0] + 3].children[
        Imino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Imino_m = Iminorotate.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Imino_m[0][0]].children[Imino_m[0][1]].className =
      "IminoR moving";
    main.children[Imino_m[1][0]].children[Imino_m[1][1]].className =
      "IminoR moving";
    main.children[Imino_m[2][0]].children[Imino_m[2][1]].className =
      "IminoR moving";
    main.children[Imino_m[3][0]].children[Imino_m[3][1]].className =
      "IminoR moving";

    removeIminoE();
    addIminorotateE();
  }
}

function Imino_Move() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Imino_m = Imino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Imino_m[0][0]].children[Imino_m[0][1]].className =
    "Imino moving";
  main.children[Imino_m[1][0]].children[Imino_m[1][1]].className =
    "Imino moving";
  main.children[Imino_m[2][0]].children[Imino_m[2][1]].className =
    "Imino moving";
  main.children[Imino_m[3][0]].children[Imino_m[3][1]].className =
    "Imino moving";
}

function FixedImino() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });

  moving.y = 0;
  moving.x = 0;

  clearLine();
  removeIminoE();
  createBlock();
}

function IminoRightR(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 8) {
      return;
    } else if (
      main.children[Imino_m[0][0]].children[
        Imino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[1][0]].children[
        Imino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[2][0]].children[
        Imino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[3][0]].children[
        Imino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Imino_MoveR();
  }
}

function IminoLeftR(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == -1) {
      return;
    } else if (
      main.children[Imino_m[0][0]].children[
        Imino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[1][0]].children[
        Imino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[2][0]].children[
        Imino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[3][0]].children[
        Imino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Imino_MoveR();
  }
}

function IminoDownR(e) {
  if (e.key == "ArrowDown") {
    IdownR();
  }
}

function IminoRotateR(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == 7) {
      moving.x -= 1;
    } else if (moving.x == 8) {
      moving.x -= 2;
    } else if (moving.x == -1) {
      moving.x += 1;
    } else if (
      main.children[Imino_m[0][0]].children[
        Imino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[0][0]].children[
        Imino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Imino_m[0][0] + 1].children[
        Imino_m[0][1] + 2
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Imino_m = Imino.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Imino_m[0][0]].children[Imino_m[0][1]].className =
      "Imino moving";
    main.children[Imino_m[1][0]].children[Imino_m[1][1]].className =
      "Imino moving";
    main.children[Imino_m[2][0]].children[Imino_m[2][1]].className =
      "Imino moving";
    main.children[Imino_m[3][0]].children[Imino_m[3][1]].className =
      "Imino moving";

    removeIminorotateE();
    addIminoE();
  }
}

function Imino_MoveR() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Imino_m = Iminorotate.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Imino_m[0][0]].children[Imino_m[0][1]].className =
    "IminoR moving";
  main.children[Imino_m[1][0]].children[Imino_m[1][1]].className =
    "IminoR moving";
  main.children[Imino_m[2][0]].children[Imino_m[2][1]].className =
    "IminoR moving";
  main.children[Imino_m[3][0]].children[Imino_m[3][1]].className =
    "IminoR moving";
}

function FixedIminoR() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });

  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeIminorotateE();
  createBlock();
}

function addIminoE() {
  document.addEventListener("keydown", IminoRight);
  document.addEventListener("keydown", IminoLeft);
  document.addEventListener("keydown", IminoDown);
  document.addEventListener("keydown", IminoRotate);
  document.addEventListener("keydown", Iblowdown);
}

function removeIminoE() {
  document.removeEventListener("keydown", IminoRight);
  document.removeEventListener("keydown", IminoLeft);
  document.removeEventListener("keydown", IminoDown);
  document.removeEventListener("keydown", IminoRotate);
  document.removeEventListener("keydown", Iblowdown);
}

function addIminorotateE() {
  document.addEventListener("keydown", IminoRightR);
  document.addEventListener("keydown", IminoLeftR);
  document.addEventListener("keydown", IminoDownR);
  document.addEventListener("keydown", IminoRotateR);
  document.addEventListener("keydown", IblowdownR);
}
function removeIminorotateE() {
  document.removeEventListener("keydown", IminoRightR);
  document.removeEventListener("keydown", IminoLeftR);
  document.removeEventListener("keydown", IminoDownR);
  document.removeEventListener("keydown", IminoRotateR);
  document.removeEventListener("keydown", IblowdownR);
}

function Idown() {
  if (moving.y == 19) {
    return FixedImino();
  } else if (
    main.children[Imino_m[0][0] + 1].children[Imino_m[0][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedImino();
  } else if (
    main.children[Imino_m[1][0] + 1].children[Imino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedImino();
  } else if (
    main.children[Imino_m[2][0] + 1].children[Imino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedImino();
  } else if (
    main.children[Imino_m[3][0] + 1].children[Imino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedImino();
  }
  moving.y += 1;
  Imino_Move();
}

function IdownR() {
  if (moving.y == 16) {
    return FixedIminoR();
  } else if (
    main.children[Imino_m[3][0] + 1].children[Imino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedIminoR();
  }
  moving.y += 1;
  Imino_MoveR();
}

// document.addEventListener("keydown", Iblowdown);
//Imino_m에 블럭좌표 다 들어있잖아 0[y,x]1[,]2[,]3[,]순으로?
function Iblowdown(e) {
  if (e.key == "Shift") {
    do {
      Idown();
    } while (moving.y !== 0);
  }
}

function IblowdownR(e) {
  if (e.key == "Shift") {
    do {
      IdownR();
    } while (moving.y !== 0);
  }
}
