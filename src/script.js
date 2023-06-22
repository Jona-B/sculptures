import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function buu() {
  // scène, caméra, rendu
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('.buu').appendChild(renderer.domElement);

  // background
  renderer.setClearColor(0x151515);

  // Modèle 3D, avec Scaniverse
  var loader = new GLTFLoader();
  loader.load('./assets/buu/scene.gltf', function (gltf) {
    var model = gltf.scene;
    model.position.x = 0.04;
    scene.add(model);
  });

  // Position de la caméra
  camera.position.y = 0.6;
  camera.position.z = 0;

  // Contrôles
  var controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true; // Rotation automatique
  controls.enableZoom = false; // Désactivation du zoom
  controls.minPolarAngle = Math.PI / 2;
  controls.maxPolarAngle = Math.PI / 2;

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

buu();


function goku_ssj3() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.goku_ssj3').appendChild(renderer.domElement);

    renderer.setClearColor(0xffffff);

    var loader = new GLTFLoader();
    loader.load('./assets/goku_ssj3/scene.gltf', function (gltf) {
        var model = gltf.scene;
        model.position.x = -0.2;
        model.position.y = -0.26;
        scene.add(model);
    });

    var clock = new THREE.Clock();
    var rotationSpeed = 0.02;
    function animateModel() {
        var delta = clock.getDelta();
        model.rotation.y += rotationSpeed * delta;
    }

    camera.position.y = 0.6;
    camera.position.z = 0;

    // Contrôles
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true; // Activation de la rotation automatique
    controls.autoRotateSpeed = 10.0; // Augmentation de la vitesse de rotation automatique
    controls.enableZoom = false; // Désactivation du zoom
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minAzimuthAngle = -Math.PI / 7; // Limite de rotation horizontale à gauche
    controls.maxAzimuthAngle = Math.PI / 2; // Limite de rotation horizontale à droite

    function animate() {
        requestAnimationFrame(animate);
        controls.update(); 
        renderer.render(scene, camera);
    }

    animate();
    }

goku_ssj3();


function dragon_radar() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.dragon_radar').appendChild(renderer.domElement);

    // Changer la couleur du fond
    renderer.setClearColor(0x151515);

    var loader = new GLTFLoader();
    loader.load('./assets/dragon_radar/scene.gltf', function (gltf) {
        var model = gltf.scene;
        model.position.y = 5;
        scene.add(model);
    });

    camera.position.x = -1;
    camera.position.y = 1;
    camera.position.z = 6;

    // Contrôles
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Désactivation du zoom
    controls.autoRotate = true; // Activation de la rotation automatique
    controls.autoRotateSpeed = 10.0; // Augmentation de la vitesse de rotation automatique
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;


    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    function animate() {
        requestAnimationFrame(animate);
        controls.update(); // Mettre à jour les contrôles d'orbite
        renderer.render(scene, camera);
    }

    animate();
    }

dragon_radar();


function luffy() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.luffy').appendChild(renderer.domElement);

    // Background image texture
    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('./img/one_piece_bg.jpg', function (texture) {
    scene.background = texture;

    var loader = new GLTFLoader();
    loader.load('./assets/luffy/scene.gltf', function (gltf) {
        var model = gltf.scene;
        model.position.y = 0.08;
        scene.add(model);
    });

    camera.position.y = 0.6;
    camera.position.z = 0;

    // Contrôles 
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true; // zoom
    controls.minDistance = 0.45; // Distance minimale de zoom
    controls.maxDistance = 0.70; // Distance maximale de zoom
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    // Boucle d'animation
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
    });
}

luffy();
