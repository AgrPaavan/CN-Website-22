import * as THREE from 'three';
import { proxy } from 'valtio';

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map(
    (u) => `./assets/${u}.jpg`
  ),
});
