let fechaNacimiento=document.getElementById("fecha_nacimiento");
let fechaIngreso=document.getElementById("fecha_ingreso");
let fechaActual=new Date();//Creamos una variable con la fecha de hoy

//Obtener la fecha actual en formato ISO (YYYY-MM-DD)
let fechaActualIso=fechaActual.toISOString().split('T')[0];

//Establecer la fecha actual como el  valor maximo de los input type date
fechaNacimiento.setAttribute('max',fechaActualIso);
fechaIngreso.setAttribute('max',fechaActualIso);

const imagenInput = document.getElementById('imagen');
const imagenDiv = document.getElementById('imagenDiv');

imagenInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  if (file && file.type.startsWith('image/')) {
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      imagenDiv.innerHTML = `<img src="${imageUrl}" alt="Imagen seleccionada">`;
    };

    reader.readAsDataURL(file);
  } else {
    imagenDiv.innerHTML = 'Error: Selecciona un archivo de imagen válido.';
  }
});