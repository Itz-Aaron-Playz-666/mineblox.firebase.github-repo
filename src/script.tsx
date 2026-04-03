import * as three from "three";
import { useState } from "react";
const scene = new three.Scene();
const camera = new three.Camera();
const geometry = new three.BoxGeometry(1, 1, 1, 10, 10, 10);
const material = new three.MeshBasicMaterial({ color: "#00FF00" });
const mesh = new three.Mesh(geometry, material);
scene.add(mesh);
