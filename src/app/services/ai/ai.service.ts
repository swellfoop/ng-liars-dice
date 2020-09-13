import { Injectable } from '@angular/core';
import { Die } from 'src/app/classes/die/die';

@Injectable({
  providedIn: 'root',
})
export class AiService {

  noise: Die[];

  constructor() {}

  rollNoise() {
    const size = 5;
    this.noise = [];
    for (let i = 1; i <= size; i++) {
      this.noise.push(new Die());
    }
  }

  private factorise(n: number): number {
    let factor: number = 1;
    for (let i = 2; i <= n; i++) {
      factor = factor * i;
    }
    return factor;
  }

  private probability(n, k, j): number {
    // n = limit
    // k = quantity
    // j = max value possible

    const decimalFactor = 100;
    const prob =
      Math.round(
        (this.factorise(n) / (this.factorise(k) * this.factorise(n - k))) *
          Math.pow(1 / j, k) *
          Math.pow((j - 1) / j, n - k) *
          decimalFactor
      ) / decimalFactor;
    return !prob ? 0 : prob;
  }
}
