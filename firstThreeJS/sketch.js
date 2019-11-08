//based on https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

let scene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight; //set aspect for camera below
let camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 ); 
let renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 1, 1, 1 ); //1 because all sides of a cube are the same length
let material = new THREE.MeshNormalMaterial(); 
let cube = new THREE.Mesh( geometry, material ); 

scene.add( cube );
camera.position.z = 5;

let render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render( scene, camera );
};

render();