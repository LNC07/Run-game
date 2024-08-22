// Scene, Camera, Renderer Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game').appendChild(renderer.domElement);

// Create a simple plane as the road
const roadGeometry = new THREE.PlaneGeometry(100, 200);
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;
scene.add(road);

// Create a simple cube as the character
const characterGeometry = new THREE.BoxGeometry(1, 2, 1);
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
character.position.y = 1;
scene.add(character);

// Position the camera
camera.position.z = 5;
camera.position.y = 2;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Character movement logic (basic example)
    character.position.z -= 0.05;

    renderer.render(scene, camera);
}

animate();
