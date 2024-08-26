import * as THREE from '../node_modules/three/build/three.module';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;
controls.enableDamping = true;

const helper = new THREE.AxesHelper(3);
// scene.add(helper);

camera.position.z = 6;
controls.update();

const tex = new THREE.TextureLoader().load('texture.avif');
tex.wrapS = THREE.RepeatWrapping;
tex.repeat.set(3,1);
const cyl = new THREE.Mesh(new THREE.CylinderGeometry(3,3,2,60,40,true), new THREE.MeshBasicMaterial({color: 'green', side:THREE.DoubleSide, map: tex}));
scene.add(cyl);

function animate() {
  controls.update();
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

