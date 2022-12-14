import { MathUtils } from "three";

class MathCircle {
  #angle = 0;
  #radius = 1;

  constructor(radius = 1) {
    this.#radius = radius;
  }

  get angle() {
    return this.#angle;
  }

  set angle(degrees) {
    this.#angle = MathUtils.degToRad(degrees);
  }

  getCoordinates(degrees) {
    this.angle = degrees;
    const x = Math.cos(this.angle) * this.#radius;
    const y = Math.sin(this.angle) * this.#radius;

    return { x, y };
  }
}

export default MathCircle;
