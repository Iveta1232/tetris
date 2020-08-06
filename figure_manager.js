let figureManager = {
  createFigureOne: function(x, y, r) {
    let color = "yellow";
    this.changeCubeColor(x, y, color);
    this.changeCubeColor(x, --y, color);
    this.changeCubeColor(++x, y, color);
    this.changeCubeColor(x, ++y, color);
  },

  createFigureTwo: function(x, y, r) {
    let color = "skyblue";

    this.changeCubeColor(x, y, color);
    switch (r) {
      case 1:
      case 3:
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(x, --y, color);
        break;
      case 2:
      case 4:
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, y, color);
        break;
    }
  },

  createFigureThree: function (x, y, r) {
    let color = "purple";
    switch (r) {
      case 1:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(--x, --y, color);
        break;
      case 2:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(--x, --y, color);
        break;
      case 3:
        this.changeCubeColor(x+2, --y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(x, ++y, color);
        this.changeCubeColor(--x, --y, color);
        break;
      case 4:
        this.changeCubeColor(x+2, y-2, color);
        this.changeCubeColor(x+2, --y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, ++y, color);
      }
    },

  createFigureFour: function(x, y, r) {
    let color = "blue";
    switch (r) {
      case 1:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(++x, ++y, color);
        this.changeCubeColor(++x, y, color);
        break;
      case 2:
        this.changeCubeColor(x, y-2, color);
        this.changeCubeColor(++x, y-2, color);
        this.changeCubeColor(--x, --y, color);
        this.changeCubeColor(x, ++y, color);
        break;
      case 3:
        this.changeCubeColor(x+2, --y, color);
        this.changeCubeColor(x+2, ++y, color);
        this.changeCubeColor(++x, --y, color);
        this.changeCubeColor(--x, y, color);
        break;
      case 4:
        this.changeCubeColor(x+2, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, --y, color);
        this.changeCubeColor(x, --y, color);
        break;
    }
  },

  createFigureFive: function(x, y, r) {
    let color = "orange";

    switch (r) {
      case 1:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(x, --y, color);
        break;
      case 2:
        this.changeCubeColor(x, y-2, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(x, ++y, color);
        this.changeCubeColor(++x, y, color);
        break;
      case 3:
        this.changeCubeColor(x+2, --y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(--x, y, color);
        this.changeCubeColor(x, ++y, color);
        break;
      case 4:
        this.changeCubeColor(x+2, y, color);
        this.changeCubeColor(x+2, --y, color);
        this.changeCubeColor(x+2, --y, color);
        this.changeCubeColor(++x, y, color);
        break;
    }
  },

  createFigureSix: function(x, y, r) {
    let color = "green";

    this.changeCubeColor(x, y, color);
    switch (r) {
      case 1:
      case 3:
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(++x, y, color);
        break;
      case 2:
      case 4:
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(--x, y, color);
        this.changeCubeColor(x, --y, color);
        break;
      }
    },

  createFigureSeven: function(x, y, r) {
    let color = "red";

    this.changeCubeColor(x, y, color);
    switch (r) {
      case 1:
      case 3:
        this.changeCubeColor(--x, y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(--x, y, color);
        break;
      case 2:
      case 4:
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(x, --y, color);
        break;
      }
    },

  changeCubeColor: function(x, y, color) {
    let whole_line = y-1;
    let nth = whole_line * 10 + x;

    let cube = game_field.querySelector('div:nth-child(' + nth + ')');
    cube.style.background = color;
  }
}
