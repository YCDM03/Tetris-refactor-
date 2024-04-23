let Tmino = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, 2],
];
let Tminorotate90 = [
  [0, 1],
  [1, 1],
  [1, 2],
  [2, 1],
];
let Tminorotate180 = [
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 1],
];
let Tminorotate270 = [
  [0, 1],
  [1, 0],
  [1, 1],
  [2, 1],
];
let Tmino_m = [];

function createTmino() {
  if (moving.y == 0) {
    moving.y += 1;
  }
  moving.x += 3;
  Tmino_m = Tmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
    "Tmino1 moving";
  main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
    "Tmino1 moving";
  main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
    "Tmino1 moving";
  main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
    "Tmino1 moving";

  addTminoE();
}
function rightTmino(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Tmino_m[0][0]].children[
        Tmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[3][0]].children[
        Tmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Tmino_Move();
  }
}
function leftTmino(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Tmino_m[0][0]].children[
        Tmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[1][0]].children[
        Tmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Tmino_Move();
  }
}

function downTmino(e) {
  if (e.key == "ArrowDown") {
    Tdown();
  }
}

function TminoRotate(e) {
  if (e.key == "ArrowUp") {
    if (moving.y == 18) {
      return;
    } else if (
      main.children[Tmino_m[2][0] + 1].children[
        Tmino_m[2][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Tmino_m = Tminorotate90.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
      "Tmino2 moving";
    main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
      "Tmino2 moving";
    main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
      "Tmino2 moving";
    main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
      "Tmino2 moving";

    removeTminoE();
    addTmino90E();
  }
}

function Tmino_Move() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Tmino_m = Tmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
    "Tmino1 moving";
  main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
    "Tmino1 moving";
  main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
    "Tmino1 moving";
  main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
    "Tmino1 moving";
}

function FixedTmino() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeTminoE();
  createBlock();
}

function Tdown() {
  if (moving.y == 18) {
    return FixedTmino();
  } else if (
    main.children[Tmino_m[1][0] + 1].children[Tmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino();
  } else if (
    main.children[Tmino_m[2][0] + 1].children[Tmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino();
  } else if (
    main.children[Tmino_m[3][0] + 1].children[Tmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino();
  }
  moving.y += 1;
  Tmino_Move();
}

function Tblowdown(e) {
  if (e.key == "Shift") {
    do {
      Tdown();
    } while (moving.y !== 0);
  }
}
//여기부터 T2
function rightTmino90(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Tmino_m[0][0]].children[
        Tmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[2][0]].children[
        Tmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[3][0]].children[
        Tmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Tmino_Move90();
  }
}
function leftTmino90(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == -1) {
      return;
    } else if (
      main.children[Tmino_m[0][0]].children[
        Tmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[1][0]].children[
        Tmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[3][0]].children[
        Tmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Tmino_Move90();
  }
}

function downTmino90(e) {
  if (e.key == "ArrowDown") {
    Tdown90();
  }
}

function TminoRotate90(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == -1) {
      moving.x += 1;
    } else if (
      main.children[Tmino_m[2][0] + 1].children[
        Tmino_m[2][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Tmino_m = Tminorotate180.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
      "Tmino3 moving";
    main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
      "Tmino3 moving";
    main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
      "Tmino3 moving";
    main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
      "Tmino3 moving";

    removeTmino90E();
    addTmino180E();
  }
}

function Tmino_Move90() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Tmino_m = Tminorotate90.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
    "Tmino2 moving";
  main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
    "Tmino2 moving";
  main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
    "Tmino2 moving";
  main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
    "Tmino2 moving";
}

function FixedTmino90() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeTmino90E();
  createBlock();
}

function Tdown90() {
  if (moving.y == 17) {
    return FixedTmino90();
  } else if (
    main.children[Tmino_m[1][0] + 1].children[Tmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino90();
  } else if (
    main.children[Tmino_m[2][0] + 1].children[Tmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino90();
  } else if (
    main.children[Tmino_m[3][0] + 1].children[Tmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino90();
  }
  moving.y += 1;
  Tmino_Move90();
}

function Tblowdown90(e) {
  if (e.key == "Shift") {
    do {
      Tdown90();
    } while (moving.y !== 0);
  }
}
//여기부터 T3
function rightTmino180(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Tmino_m[2][0]].children[
        Tmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[3][0]].children[
        Tmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Tmino_Move180();
  }
}
function leftTmino180(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Tmino_m[0][0]].children[
        Tmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[3][0]].children[
        Tmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Tmino_Move180();
  }
}

function downTmino180(e) {
  if (e.key == "ArrowDown") {
    Tdown180();
  }
}

function TminoRotate180(e) {
  if (e.key == "ArrowUp") {
    if (
      main.children[Tmino_m[1][0] - 1].children[
        Tmino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Tmino_m = Tminorotate270.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
      "Tmino4 moving";
    main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
      "Tmino4 moving";
    main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
      "Tmino4 moving";
    main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
      "Tmino4 moving";

    removeTmino180E();
    addTmino270E();
  }
}

function Tmino_Move180() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Tmino_m = Tminorotate180.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
    "Tmino3 moving";
  main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
    "Tmino3 moving";
  main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
    "Tmino3 moving";
  main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
    "Tmino3 moving";
}

function FixedTmino180() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeTmino180E();
  createBlock();
}

function Tdown180() {
  if (moving.y == 17) {
    return FixedTmino180();
  } else if (
    main.children[Tmino_m[0][0] + 1].children[Tmino_m[0][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino180();
  } else if (
    main.children[Tmino_m[2][0] + 1].children[Tmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino180();
  } else if (
    main.children[Tmino_m[3][0] + 1].children[Tmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino180();
  }
  moving.y += 1;
  Tmino_Move180();
}

function Tblowdown180(e) {
  if (e.key == "Shift") {
    do {
      Tdown180();
    } while (moving.y !== 0);
  }
}
//여기부터 T4
function rightTmino270(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 8) {
      return;
    } else if (
      main.children[Tmino_m[0][0]].children[
        Tmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[2][0]].children[
        Tmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[3][0]].children[
        Tmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Tmino_Move270();
  }
}
function leftTmino270(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Tmino_m[0][0]].children[
        Tmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[1][0]].children[
        Tmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Tmino_m[3][0]].children[
        Tmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Tmino_Move270();
  }
}

function downTmino270(e) {
  if (e.key == "ArrowDown") {
    Tdown270();
  }
}

function TminoRotate270(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == 8) {
      moving.x -= 1;
    } else if (
      main.children[Tmino_m[2][0]].children[
        Tmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Tmino_m = Tmino.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
      "Tmino1 moving";
    main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
      "Tmino1 moving";
    main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
      "Tmino1 moving";
    main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
      "Tmino1 moving";

    removeTmino270E();
    addTminoE();
  }
}

function Tmino_Move270() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Tmino_m = Tminorotate270.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Tmino_m[0][0]].children[Tmino_m[0][1]].className =
    "Tmino4 moving";
  main.children[Tmino_m[1][0]].children[Tmino_m[1][1]].className =
    "Tmino4 moving";
  main.children[Tmino_m[2][0]].children[Tmino_m[2][1]].className =
    "Tmino4 moving";
  main.children[Tmino_m[3][0]].children[Tmino_m[3][1]].className =
    "Tmino4 moving";
}

function FixedTmino270() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeTmino270E();
  createBlock();
}

function Tdown270() {
  if (moving.y == 17) {
    return FixedTmino270();
  } else if (
    main.children[Tmino_m[1][0] + 1].children[Tmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino270();
  } else if (
    main.children[Tmino_m[3][0] + 1].children[Tmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedTmino270();
  }
  moving.y += 1;
  Tmino_Move270();
}

function Tblowdown270(e) {
  if (e.key == "Shift") {
    do {
      Tdown270();
    } while (moving.y !== 0);
  }
}

function addTminoE() {
  document.addEventListener("keydown", rightTmino);
  document.addEventListener("keydown", leftTmino);
  document.addEventListener("keydown", downTmino);
  document.addEventListener("keydown", TminoRotate);
  document.addEventListener("keydown", Tblowdown);
}
function removeTminoE() {
  document.removeEventListener("keydown", rightTmino);
  document.removeEventListener("keydown", leftTmino);
  document.removeEventListener("keydown", downTmino);
  document.removeEventListener("keydown", TminoRotate);
  document.removeEventListener("keydown", Tblowdown);
}

function addTmino90E() {
  document.addEventListener("keydown", rightTmino90);
  document.addEventListener("keydown", leftTmino90);
  document.addEventListener("keydown", downTmino90);
  document.addEventListener("keydown", TminoRotate90);
  document.addEventListener("keydown", Tblowdown90);
}
function removeTmino90E() {
  document.removeEventListener("keydown", rightTmino90);
  document.removeEventListener("keydown", leftTmino90);
  document.removeEventListener("keydown", downTmino90);
  document.removeEventListener("keydown", TminoRotate90);
  document.removeEventListener("keydown", Tblowdown90);
}

function addTmino180E() {
  document.addEventListener("keydown", rightTmino180);
  document.addEventListener("keydown", leftTmino180);
  document.addEventListener("keydown", downTmino180);
  document.addEventListener("keydown", TminoRotate180);
  document.addEventListener("keydown", Tblowdown180);
}
function removeTmino180E() {
  document.removeEventListener("keydown", rightTmino180);
  document.removeEventListener("keydown", leftTmino180);
  document.removeEventListener("keydown", downTmino180);
  document.removeEventListener("keydown", TminoRotate180);
  document.removeEventListener("keydown", Tblowdown180);
}

function addTmino270E() {
  document.addEventListener("keydown", rightTmino270);
  document.addEventListener("keydown", leftTmino270);
  document.addEventListener("keydown", downTmino270);
  document.addEventListener("keydown", TminoRotate270);
  document.addEventListener("keydown", Tblowdown270);
}
function removeTmino270E() {
  document.removeEventListener("keydown", rightTmino270);
  document.removeEventListener("keydown", leftTmino270);
  document.removeEventListener("keydown", downTmino270);
  document.removeEventListener("keydown", TminoRotate270);
  document.removeEventListener("keydown", Tblowdown270);
}
