let fechaNacimiento=document.getElementById("fecha_nacimiento");
let fechaIngreso=document.getElementById("fecha_ingreso");
let fechaActual=new Date();//Creamos una variable con la fecha de hoy

//Obtener la fecha actual en formato ISO (YYYY-MM-DD)
let fechaActualIso=fechaActual.toISOString().split('T')[0];

//Establecer la fecha actual como el  valor maximo de los input type date
fechaNacimiento.setAttribute('max',fechaActualIso);
fechaIngreso.setAttribute('max',fechaActualIso);