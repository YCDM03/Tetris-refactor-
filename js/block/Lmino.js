let Lmino = [
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
];
let Lminorotate90 = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 2],
];
let Lminorotate180 = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 1],
];
let Lminorotate270 = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
];
let Lmino_m = [];

function createLmino() {
  if (moving.y == 0) {
    moving.y += 1;
  }
  moving.x += 3;
  Lmino_m = Lmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
    "Lmino1 moving";
  main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
    "Lmino1 moving";
  main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
    "Lmino1 moving";
  main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
    "Lmino1 moving";

  addLminoE();
}
function rightLmino(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Lmino_m[0][0]].children[
        Lmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[3][0]].children[
        Lmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Lmino_Move();
  }
}
function leftLmino(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == 0) {
      return;
    } else if (
      main.children[Lmino_m[0][0]].children[
        Lmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[1][0]].children[
        Lmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Lmino_Move();
  }
}

function downLmino(e) {
  if (e.key == "ArrowDown") {
    Ldown();
  }
}

function LminoRotate(e) {
  if (e.key == "ArrowUp") {
    if (moving.y == 0) {
      return;
    } else if (
      main.children[Lmino_m[0][0]].children[
        Lmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[2][0] - 2].children[
        Lmino_m[2][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Lmino_m = Lminorotate90.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
      "Lmino2 moving";
    main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
      "Lmino2 moving";
    main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
      "Lmino2 moving";
    main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
      "Lmino2 moving";

    removeLminoE();
    addLmino90E();
  }
}

function Lmino_Move() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Lmino_m = Lmino.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
    "Lmino1 moving";
  main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
    "Lmino1 moving";
  main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
    "Lmino1 moving";
  main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
    "Lmino1 moving";
}

function FixedLmino() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeLminoE();
  createBlock();
}

function Ldown() {
  if (moving.y == 18) {
    return FixedLmino();
  } else if (
    main.children[Lmino_m[1][0] + 1].children[Lmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino();
  } else if (
    main.children[Lmino_m[2][0] + 1].children[Lmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino();
  } else if (
    main.children[Lmino_m[3][0] + 1].children[Lmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino();
  }
  moving.y += 1;
  Lmino_Move();
}

function Lblowdown(e) {
  if (e.key == "Shift") {
    do {
      Ldown();
    } while (moving.y !== 0);
  }
}
//여기부터 L2
function rightLmino90(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Lmino_m[0][0]].children[
        Lmino_m[0][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[1][0]].children[
        Lmino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[3][0]].children[
        Lmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Lmino_Move90();
  }
}
function leftLmino90(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == -1) {
      return;
    } else if (
      main.children[Lmino_m[0][0]].children[
        Lmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[1][0]].children[
        Lmino_m[1][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[2][0]].children[
        Lmino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Lmino_Move90();
  }
}

function downLmino90(e) {
  if (e.key == "ArrowDown") {
    Ldown90();
  }
}

function LminoRotate90(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == 7) {
      moving.x -= 1;
    } else if (
      main.children[Lmino_m[1][0]].children[
        Lmino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[1][0]].children[
        Lmino_m[1][1] + 2
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Lmino_m = Lminorotate180.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
      "Lmino3 moving";
    main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
      "Lmino3 moving";
    main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
      "Lmino3 moving";
    main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
      "Lmino3 moving";

    removeLmino90E();
    addLmino180E();
  }
}

function Lmino_Move90() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Lmino_m = Lminorotate90.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
    "Lmino2 moving";
  main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
    "Lmino2 moving";
  main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
    "Lmino2 moving";
  main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
    "Lmino2 moving";
}

function FixedLmino90() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeLmino90E();
  createBlock();
}

function Ldown90() {
  if (moving.y == 18) {
    return FixedLmino90();
  } else if (
    main.children[Lmino_m[2][0] + 1].children[Lmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino90();
  } else if (
    main.children[Lmino_m[3][0] + 1].children[Lmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino90();
  }
  moving.y += 1;
  Lmino_Move90();
}

function Lblowdown90(e) {
  if (e.key == "Shift") {
    do {
      Ldown90();
    } while (moving.y !== 0);
  }
}

//여기부터 J3

function rightLmino180(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 6) {
      return;
    } else if (
      main.children[Lmino_m[2][0]].children[
        Lmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[3][0]].children[
        Lmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Lmino_Move180();
  }
}
function leftLmino180(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == -1) {
      return;
    } else if (
      main.children[Lmino_m[0][0]].children[
        Lmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[3][0]].children[
        Lmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Lmino_Move180();
  }
}

function downLmino180(e) {
  if (e.key == "ArrowDown") {
    Ldown180();
  }
}

function LminoRotate180(e) {
  if (e.key == "ArrowUp") {
    if (moving.y == -1) {
      return;
    } else if (
      main.children[Lmino_m[1][0] + 1].children[
        Lmino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[1][0] + 2].children[
        Lmino_m[1][1]
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Lmino_m = Lminorotate270.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
      "Lmino4 moving";
    main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
      "Lmino4 moving";
    main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
      "Lmino4 moving";
    main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
      "Lmino4 moving";

    removeLmino180E();
    addLmino270E();
  }
}

function Lmino_Move180() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Lmino_m = Lminorotate180.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
    "Lmino3 moving";
  main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
    "Lmino3 moving";
  main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
    "Lmino3 moving";
  main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
    "Lmino3 moving";
}

function FixedLmino180() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeLmino180E();
  createBlock();
}

function Ldown180() {
  if (moving.y == 18) {
    return FixedLmino180();
  } else if (
    main.children[Lmino_m[1][0] + 1].children[Lmino_m[1][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino180();
  } else if (
    main.children[Lmino_m[2][0] + 1].children[Lmino_m[2][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino180();
  } else if (
    main.children[Lmino_m[3][0] + 1].children[Lmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino180();
  }
  moving.y += 1;
  Lmino_Move180();
}

function Lblowdown180(e) {
  if (e.key == "Shift") {
    do {
      Ldown180();
    } while (moving.y !== 0);
  }
}
//여기부터 L4
function rightLmino270(e) {
  if (e.key == "ArrowRight") {
    if (moving.x == 7) {
      return;
    } else if (
      main.children[Lmino_m[1][0]].children[
        Lmino_m[1][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[2][0]].children[
        Lmino_m[2][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[3][0]].children[
        Lmino_m[3][1] + 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x += 1;
    Lmino_Move270();
  }
}
function leftLmino270(e) {
  if (e.key == "ArrowLeft") {
    if (moving.x == -1) {
      return;
    } else if (
      main.children[Lmino_m[0][0]].children[
        Lmino_m[0][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[2][0]].children[
        Lmino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[3][0]].children[
        Lmino_m[3][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    }
    moving.x -= 1;
    Lmino_Move270();
  }
}

function downLmino270(e) {
  if (e.key == "ArrowDown") {
    Ldown270();
  }
}

function LminoRotate270(e) {
  if (e.key == "ArrowUp") {
    if (moving.x == -1) {
      moving.x += 1;
    } else if (
      main.children[Lmino_m[2][0]].children[
        Lmino_m[2][1] - 1
      ].classList.contains("fixed")
    ) {
      return;
    } else if (
      main.children[Lmino_m[2][0]].children[
        Lmino_m[2][1] - 2
      ].classList.contains("fixed")
    ) {
      return;
    }
    document.querySelectorAll(".moving").forEach((item) => {
      item.className = "block";
    });
    Lmino_m = Lmino.map((item) => {
      return [item[0] + moving.y, item[1] + moving.x];
    });
    main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
      "Lmino1 moving";
    main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
      "Lmino1 moving";
    main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
      "Lmino1 moving";
    main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
      "Lmino1 moving";

    removeLmino270E();
    addLminoE();
  }
}

function Lmino_Move270() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.className = "block";
  });
  Lmino_m = Lminorotate270.map((item) => {
    return [item[0] + moving.y, item[1] + moving.x];
  });
  main.children[Lmino_m[0][0]].children[Lmino_m[0][1]].className =
    "Lmino4 moving";
  main.children[Lmino_m[1][0]].children[Lmino_m[1][1]].className =
    "Lmino4 moving";
  main.children[Lmino_m[2][0]].children[Lmino_m[2][1]].className =
    "Lmino4 moving";
  main.children[Lmino_m[3][0]].children[Lmino_m[3][1]].className =
    "Lmino4 moving";
}

function FixedLmino270() {
  document.querySelectorAll(".moving").forEach((item) => {
    item.classList.replace("moving", "fixed");
  });
  moving.y = 0;
  moving.x = 0;
  clearLine();
  removeLmino270E();
  createBlock();
}

function Ldown270() {
  if (moving.y == 17) {
    return FixedLmino270();
  } else if (
    main.children[Lmino_m[0][0] + 1].children[Lmino_m[0][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino270();
  } else if (
    main.children[Lmino_m[3][0] + 1].children[Lmino_m[3][1]].classList.contains(
      "fixed"
    )
  ) {
    return FixedLmino270();
  }
  moving.y += 1;
  Lmino_Move270();
}

function Lblowdown270(e) {
  if (e.key == "Shift") {
    do {
      Ldown270();
    } while (moving.y !== 0);
  }
}

function addLminoE() {
  document.addEventListener("keydown", rightLmino);
  document.addEventListener("keydown", leftLmino);
  document.addEventListener("keydown", downLmino);
  document.addEventListener("keydown", LminoRotate);
  document.addEventListener("keydown", Lblowdown);
}
function removeLminoE() {
  document.removeEventListener("keydown", rightLmino);
  document.removeEventListener("keydown", leftLmino);
  document.removeEventListener("keydown", downLmino);
  document.removeEventListener("keydown", LminoRotate);
  document.removeEventListener("keydown", Lblowdown);
}

function addLmino90E() {
  document.addEventListener("keydown", rightLmino90);
  document.addEventListener("keydown", leftLmino90);
  document.addEventListener("keydown", downLmino90);
  document.addEventListener("keydown", LminoRotate90);
  document.addEventListener("keydown", Lblowdown90);
}
function removeLmino90E() {
  document.removeEventListener("keydown", rightLmino90);
  document.removeEventListener("keydown", leftLmino90);
  document.removeEventListener("keydown", downLmino90);
  document.removeEventListener("keydown", LminoRotate90);
  document.removeEventListener("keydown", Lblowdown90);
}

function addLmino180E() {
  document.addEventListener("keydown", rightLmino180);
  document.addEventListener("keydown", leftLmino180);
  document.addEventListener("keydown", downLmino180);
  document.addEventListener("keydown", LminoRotate180);
  document.addEventListener("keydown", Lblowdown180);
}
function removeLmino180E() {
  document.removeEventListener("keydown", rightLmino180);
  document.removeEventListener("keydown", leftLmino180);
  document.removeEventListener("keydown", downLmino180);
  document.removeEventListener("keydown", LminoRotate180);
  document.removeEventListener("keydown", Lblowdown180);
}

function addLmino270E() {
  document.addEventListener("keydown", rightLmino270);
  document.addEventListener("keydown", leftLmino270);
  document.addEventListener("keydown", downLmino270);
  document.addEventListener("keydown", LminoRotate270);
  document.addEventListener("keydown", Lblowdown270);
}
function removeLmino270E() {
  document.removeEventListener("keydown", rightLmino270);
  document.removeEventListener("keydown", leftLmino270);
  document.removeEventListener("keydown", downLmino270);
  document.removeEventListener("keydown", LminoRotate270);
  document.removeEventListener("keydown", Lblowdown270);
}
