var teclas = document.querySelectorAll('button');

teclas.forEach(tecla => {
tecla.addEventListener('click',e=>{
    e.preventDefault();
    console.log("Clique na tecla" + tecla.dataset.nota)
})
});