// /*===== MENU SHOW =====*/ 
// For the mobile view, adds the hamburger menu button but we don't have that shown atm
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }
// showMenu('nav-toggle','nav-menu')

// /*==================== REMOVE MENU MOBILE ====================*/
// This is code for when viewing the website on a mobile device, and removing the header when clicking on a section
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
 


// ================== NAV TOGGLE ==================
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// ================== THREE.JS BROWN DWARF ==================
const container = document.getElementById("planet-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / 400,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, 400);
container.appendChild(renderer.domElement);

// Planet geometry + material
const geometry = new THREE.SphereGeometry(2, 64, 64);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("assets/img/brown_dwarf_texture.jpg"); // Add your texture
const material = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 1,
  metalness: 0.3,
});
const planet = new THREE.Mesh(geometry, material);
scene.add(planet);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xff8844, 1);
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  planet.rotation.y += 0.003;
  planet.rotation.x += 0.0008;
  renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / 400;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, 400);
});
