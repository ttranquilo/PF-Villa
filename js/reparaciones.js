const inputImagen = document.getElementById('adjuntarImagen');
const imagenElegida = document.getElementById('imagenElegida');

inputImagen.addEventListener('change', function() {
  if (inputImagen.files.length > 0) {
    imagenElegida.textContent = inputImagen.files[0].name;
  } else {
    imagenElegida.textContent = 'No has elegido imagen';
  }
});