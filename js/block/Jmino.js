let Jmino = [
  [0, 0],
  [1, 0],
  [1, 1],
  [1, 2],
];
let Jminorotate90 = [
  [0, 0],
  [0, 1],
  [1, 0],
  [2, 0],
];
let Jminorotate180 = [
  [0, -1],
  [0, 0],
  [0, 1],
  [1, 1],
];
let Jminorotate270 = [
  [-1, 1],
  [0, 1],
  [1, 0],
  [1, 1],
];
let Jmino_m = [];

function createJmino() {
  if (moving.y == 0) {
    moving.y += 1;
  }
  moving.x += 4;
  Jmino_m = Jmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
    "Jmino1 moving";
  main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
    "Jmino1 moving";
  main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
    "Jmino1 moving";
  main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
    "Jmino1 moving";

  addJminoE();
}
function rightJmino(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Jmino_m[3][0] - 1].children[
        Jmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[3][0]].children[
        Jmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Jmino_Move();
  }
}
function leftJmino(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Jmino_m[0][0]].children[
        Jmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[1][0]].children[
        Jmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Jmino_Move();
  }
}

function downJmino(e) {
  if (e.key == "ArrowDown") {
    Jdown();
  }
}

function JminoRotate(e) {
  if (e.key == "ArrowUp") {
    if (moving.y == 0) {
      return;
    } else if (
      main.children[Jmino_m[0][0]].children[
        Jmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[1][0] + 1].children[
        Jmino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Jmino_m = Jminorotate90.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
      "Jmino2 moving";
    main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
      "Jmino2 moving";
    main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
      "Jmino2 moving";
    main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
      "Jmino2 moving";

    removeJminoE();
    addJmino90E();
  }
}

function Jmino_Move() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Jmino_m = Jmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
    "Jmino1 moving";
  main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
    "Jmino1 moving";
  main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
    "Jmino1 moving";
  main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
    "Jmino1 moving";
}

function FixedJmino() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeJminoE();
  createBlock();
}

function Jdown() {
  if (moving.y == 18) {
    return FixedJmino();
  } else if (
    main.children[Jmino_m[1][0] + 1].children[Jmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino();
  } else if (
    main.children[Jmino_m[2][0] + 1].children[Jmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino();
  } else if (
    main.children[Jmino_m[3][0] + 1].children[Jmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino();
  }
  moving.y += 1;
  Jmino_Move();
}

function Jblowdown(e) {
  if (e.key == "Shift") {
    do {
      Jdown();
    } while (moving.y !== 0);
  }
}
//여기부터 J1
function rightJmino90(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 8) {
      return;
    } else if (
      main.children[Jmino_m[1][0]].children[
        Jmino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[2][0]].children[
        Jmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[3][0]].children[
        Jmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Jmino_Move90();
  }
}
function leftJmino90(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Jmino_m[0][0]].children[
        Jmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[2][0]].children[
        Jmino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[3][0]].children[
        Jmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Jmino_Move90();
  }
}

function downJmino90(e) {
  if (e.key == "ArrowDown") {
    Jdown90();
  }
}

function JminoRotate90(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == 0) {
      moving.x += 1;
    } else if (
      main.children[Jmino_m[0][0]].children[
        Jmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[1][0] + 1].children[
        Jmino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    if (moving.x == 7) {
      moving.x -= 1;
    }
    Jmino_m = Jminorotate180.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
      "Jmino3 moving";
    main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
      "Jmino3 moving";
    main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
      "Jmino3 moving";
    main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
      "Jmino3 moving";

    removeJmino90E();
    addJmino180E();
  }
}

function Jmino_Move90() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Jmino_m = Jminorotate90.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
    "Jmino2 moving";
  main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
    "Jmino2 moving";
  main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
    "Jmino2 moving";
  main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
    "Jmino2 moving";
}

function FixedJmino90() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeJmino90E();
  createBlock();
}

function Jdown90() {
  if (moving.y == 17) {
    return FixedJmino90();
  } else if (
    main.children[Jmino_m[1][0] + 1].children[Jmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino90();
  } else if (
    main.children[Jmino_m[3][0] + 1].children[Jmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino90();
  }
  moving.y += 1;
  Jmino_Move90();
}

function Jblowdown90(e) {
  if (e.key == "Shift") {
    do {
      Jdown90();
    } while (moving.y !== 0);
  }
}

//여기부터 J3

function rightJmino180(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 8) {
      return;
    } else if (
      main.children[Jmino_m[2][0]].children[
        Jmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[3][0]].children[
        Jmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Jmino_Move180();
  }
}
function leftJmino180(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 1) {
      return;
    } else if (
      main.children[Jmino_m[0][0]].children[
        Jmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[3][0]].children[
        Jmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Jmino_Move180();
  }
}

function downJmino180(e) {
  if (e.key == "ArrowDown") {
    Jdown180();
  }
}

function JminoRotate180(e) {
  if (e.key == "ArrowUp") {
    if (moving.y == 0) {
      return;
    } else if (
      main.children[Jmino_m[2][0] - 1].children[
        Jmino_m[2][1]
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[1][0] + 1].children[
        Jmino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Jmino_m = Jminorotate270.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
      "Jmino4 moving";
    main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
      "Jmino4 moving";
    main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
      "Jmino4 moving";
    main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
      "Jmino4 moving";

    removeJmino180E();
    addJmino270E();
  }
}

function Jmino_Move180() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Jmino_m = Jminorotate180.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
    "Jmino3 moving";
  main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
    "Jmino3 moving";
  main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
    "Jmino3 moving";
  main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
    "Jmino3 moving";
}

function FixedJmino180() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeJmino180E();
  createBlock();
}

function Jdown180() {
  if (moving.y == 18) {
    return FixedJmino180();
  } else if (
    main.children[Jmino_m[0][0] + 1].children[Jmino_m[0][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino180();
  } else if (
    main.children[Jmino_m[1][0] + 1].children[Jmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino180();
  } else if (
    main.children[Jmino_m[3][0] + 1].children[Jmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino180();
  }
  moving.y += 1;
  Jmino_Move180();
}

function Jblowdown180(e) {
  if (e.key == "Shift") {
    do {
      Jdown180();
    } while (moving.y !== 0);
  }
}
//여기부터 J4
function rightJmino270(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 8) {
      return;
    } else if (
      main.children[Jmino_m[0][0]].children[
        Jmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[1][0]].children[
        Jmino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[3][0]].children[
        Jmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Jmino_Move270();
  }
}
function leftJmino270(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Jmino_m[0][0]].children[
        Jmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[1][0]].children[
        Jmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[2][0]].children[
        Jmino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Jmino_Move270();
  }
}

function downJmino270(e) {
  if (e.key == "ArrowDown") {
    Jdown270();
  }
}

function JminoRotate270(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == 8) {
      moving.x -= 1;
    } else if (
      main.children[Jmino_m[1][0]].children[
        Jmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Jmino_m[3][0]].children[
        Jmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });

    Jmino_m = Jmino.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
      "Jmino1 moving";
    main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
      "Jmino1 moving";
    main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
      "Jmino1 moving";
    main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
      "Jmino1 moving";

    removeJmino270E();
    addJminoE();
  }
}

function Jmino_Move270() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Jmino_m = Jminorotate270.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Jmino_m[0][0]].children[Jmino_m[0][1]].className =
    "Jmino4 moving";
  main.children[Jmino_m[1][0]].children[Jmino_m[1][1]].className =
    "Jmino4 moving";
  main.children[Jmino_m[2][0]].children[Jmino_m[2][1]].className =
    "Jmino4 moving";
  main.children[Jmino_m[3][0]].children[Jmino_m[3][1]].className =
    "Jmino4 moving";
}

function FixedJmino270() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeJmino270E();
  createBlock();
}

function Jdown270() {
  if (moving.y == 18) {
    return FixedJmino270();
  } else if (
    main.children[Jmino_m[2][0] + 1].children[Jmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino270();
  } else if (
    main.children[Jmino_m[3][0] + 1].children[Jmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedJmino270();
  }
  moving.y += 1;
  Jmino_Move270();
}

function Jblowdown270(e) {
  if (e.key == "Shift") {
    do {
      Jdown270();
    } while (moving.y !== 0);
  }
}

function addJminoE() {
  document.addEventListener("keydown", rightJmino);
  document.addEventListener("keydown", leftJmino);
  document.addEventListener("keydown", downJmino);
  document.addEventListener("keydown", JminoRotate);
  document.addEventListener("keydown", Jblowdown);
}
function removeJminoE() {
  document.removeEventListener("keydown", rightJmino);
  document.removeEventListener("keydown", leftJmino);
  document.removeEventListener("keydown", downJmino);
  document.removeEventListener("keydown", JminoRotate);
  document.removeEventListener("keydown", Jblowdown);
}

function addJmino90E() {
  document.addEventListener("keydown", rightJmino90);
  document.addEventListener("keydown", leftJmino90);
  document.addEventListener("keydown", downJmino90);
  document.addEventListener("keydown", JminoRotate90);
  document.addEventListener("keydown", Jblowdown90);
}
function removeJmino90E() {
  document.removeEventListener("keydown", rightJmino90);
  document.removeEventListener("keydown", leftJmino90);
  document.removeEventListener("keydown", downJmino90);
  document.removeEventListener("keydown", JminoRotate90);
  document.removeEventListener("keydown", Jblowdown90);
}

function addJmino180E() {
  document.addEventListener("keydown", rightJmino180);
  document.addEventListener("keydown", leftJmino180);
  document.addEventListener("keydown", downJmino180);
  document.addEventListener("keydown", JminoRotate180);
  document.addEventListener("keydown", Jblowdown180);
}
function removeJmino180E() {
  document.removeEventListener("keydown", rightJmino180);
  document.removeEventListener("keydown", leftJmino180);
  document.removeEventListener("keydown", downJmino180);
  document.removeEventListener("keydown", JminoRotate180);
  document.removeEventListener("keydown", Jblowdown180);
}

function addJmino270E() {
  document.addEventListener("keydown", rightJmino270);
  document.addEventListener("keydown", leftJmino270);
  document.addEventListener("keydown", downJmino270);
  document.addEventListener("keydown", JminoRotate270);
  document.addEventListener("keydown", Jblowdown270);
}
function removeJmino270E() {
  document.removeEventListener("keydown", rightJmino270);
  document.removeEventListener("keydown", leftJmino270);
  document.removeEventListener("keydown", downJmino270);
  document.removeEventListener("keydown", JminoRotate270);
  document.removeEventListener("keydown", Jblowdown270);
}
