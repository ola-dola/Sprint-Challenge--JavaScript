// 1. Copy and paste your prototype in here and refactor into class syntax.

class ClassCuboidMaker {       //class name slightly modified because of conflict with same name in prototypes.js
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.height * this.width;
  }

  surfaceArea() {
    return 2 * (
      (this.length * this.width) + (this.length * this.height) + (this.width * this.height)
    );
  }
}

const classCuboid = new ClassCuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(classCuboid.volume()); // 100
console.log(classCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.