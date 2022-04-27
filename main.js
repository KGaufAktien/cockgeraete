import './style.css'
import { GLTFLoader } from './GLTFLoader_1.js';

import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x575757);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setX(-2.5);
camera.position.setY(0.5);
camera.position.setZ(5);
camera.rotateY(-Math.PI / 6);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


const hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);


const loader = new GLTFLoader();
loader.load("car_new.glb", function(gltf){
  //car = gltf.scene.children[0];
  //car.scale.set(0.5, 0.5, 0.5);
  scene.add(gltf.scene)
});
//const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//const material = new THREE.MeshBasicMaterial( {color: 0xfc0a0a} );
//const mesh = new THREE.Mesh(geometry, material);
//scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();