const cube= document.getElementById('animatedCube');
const optionsContainer = document.getElementById('options');
const option1 = document.getElementById('animatedCubeA');
const option2 = document.getElementById('animatedCubeB');
const option3 = document.getElementById('animatedCubeC');
let animationPaused = false;

/* Funcipon que detiene y reactiva el movimiendo del cubo */
cube.addEventListener('click', () => {
    console.log('di click en el cubo');
    if (!animationPaused) {
        console.log( 'Animación pausada');
        cube.style.animationPlayState = 'paused';
        optionsContainer.style.display= "flex";
        optionsContainer.style.flexDirection = "column";
        animationPaused = true;
        setTimeout (() => {
            cube.style.animationPlayState = "running";
            animationPaused = false;
            optionsContainer.style.display= "none";
        }, 5000);
    }
});

/* Función para páginas */
option1.addEventListener("click", () =>{
    console.log("Di click en la opción 1");
    window.location.href ="../pages/services.html";
});
option2.addEventListener("click", () =>{
    console.log("Di click en la opción 2");
    window.location.href ="../pages/newsletter.html";
});
option3.addEventListener("click", () =>{
    console.log("Di click en la opción 3");
    window.location.href ="../pages/contact.html";
});