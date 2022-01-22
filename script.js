

//Scene
const scene = new THREE.Scene() // Must always create a scene when working with three.js

//Red cube
const cube = new THREE.BoxGeometry(1, 1, 1) // The 1's are the size of the cube, unit can be anything (km, meters, etc.) - Geometry
const mat = new THREE.MeshBasicMaterial( { color: 'red'} ) // Create the material and color for the cube - Material
const mesh = new THREE.Mesh(cube, mat) // Combine the Geometry (cube) and Material into a Mesh
scene.add(mesh) // Add the Mesh object to the scene


// Sizes
// General size of the page
const sizes = {
    width: 800, 
    height: 600
}
// Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height) // First parameter is the fov, second is the aspect ratio (width/height) of the camera view
camera.position.z = 3 // This moves the CAMERA back 3 units.  Positive Z for the camera will be moving towards the user, negative Z is moving away from the user.
camera.position.x = 0.75 // This moves the camera to the right if it's positive x
camera.position.y = 0.5 // This moves the camera up if it's positive y
scene.add(camera)  // Add the camera to the scene


// Renderer
const canvas = document.querySelector('.webgl') // Grab the DOM canvas from the HTML file.
console.log(canvas)
const renderer = new THREE.WebGLRenderer ({canvas: canvas}) // Can also just be canvas instead of "canvas: canvas" since it's the same variable. (JS thing)
renderer.setSize(sizes.width, sizes.height) // Renderer will resize

renderer.render(scene, camera) // Renderer needs to render the scene and the camera
