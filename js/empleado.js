class Empleado {
    constructor(nombre, apellido, genero, fecha_nacimiento, foto, fecha_ingreso, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.fecha_nacimiento = fecha_nacimiento;
        this.foto = foto;
        this.fecha_ingreso = fecha_ingreso;
        this.salario = salario;
    }
    darNombre() {
        return this.nombre;
    }

    darApellido() {
        return this.apellido;
    }

    darGenero() {
        return this.genero;
    }

    darFecha_Nacimiento() {
        return this.fecha_nacimiento;
    }

    darFoto() {
        return this.foto;
    }

    darFecha_Ingreso() {
        return this.fecha_ingreso;
    }

    darSalario() {
        return this.salario;
    }

}

let e = new Empleado();

function validarNombre() {
    let nombre_emp = document.getElementById("nombre").value;
    if (/\d/.test(nombre_emp.trim())) {//validar si hay un campo vacio para el nombre
        document.getElementById("texto_nombre").innerHTML = '*Este campo no puede contener numeros';
    } else {
        document.getElementById("texto_nombre").innerHTML = '';

    }
}

function validarCampos(nombre_emp, apellido_emp, genero_emp, fechaN_emp, fechaI_emp, salario_emp) {
    //lIMPIAREMOS LOS SPAN DE TEXTO DE DATOS INCORRECTOS
    document.getElementById("texto_nombre").innerHTML = '';
    document.getElementById("texto_apellido").innerHTML = '';
    document.getElementById("texto_fechaN").innerHTML = '';
    document.getElementById("texto_fechaI").innerHTML = '';
    document.getElementById("texto_salario").innerHTML = '';

    console.log(nombre_emp, apellido_emp, genero_emp, fechaN_emp, fechaI_emp, salario_emp);

    let esta_correcto = false;

    if (nombre_emp == "") {//validar si hay un campo vacio para el nombre
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_nombre").innerHTML = '*Este campo no puede estar vacío';
    } else if (/\d/.test(nombre_emp.trim())) {//validar si hay un digito en el nombre
        alert("No se permite números en este campo");
        document.getElementById("texto_nombre").innerHTML = '*Este campo no puede contener números';
    } else if (apellido_emp == "") {//validar si hay un campo vacio para el nombre
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_apellido").innerHTML = '*Este campo no puede estar vacío';
    } else if (/\d/.test(apellido_emp.trim())) {//validar si hay un digito en el nombre
        alert("No se permite números en este campo");
        document.getElementById("texto_apellido").innerHTML = '*Este campo no puede contener números';
    } else if (fechaN_emp == "") {//validar si hay un campo vacio para el nombre
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_fechaN").innerHTML = '*Este campo no puede estar vacío';
    } else if (fechaI_emp == "") {//validar si hay un campo vacio para el nombre
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_fechaI").innerHTML = '*Este campo no puede estar vacío';
    } else if (salario_emp == "") {//validar si hay un campo vacio para el nombre
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_salario").innerHTML = '*Este campo no puede estar vacío';
    }else if (isNaN(salario_emp)==true) {//validar si no es un numero
        alert("Debe ingresar todos los campos correctos");
        document.getElementById("texto_salario").innerHTML = '*Este campo no puede contener letras';
    } else {
        //Esta todo correcto
        esta_correcto = true;
    }
    return esta_correcto;


}

function modificar() {
    //INGRESO DE DATOS
    let nombre_emp = document.getElementById("nombre").value;
    let apellido_emp = document.getElementById("apellido").value;
    let genero_emp = document.getElementById("genero").value;
    let fechaN_emp = document.getElementById("fecha_nacimiento").value;
    // let foto_emp = document.getElementById("nombre").value;
    let fechaI_emp = document.getElementById("fecha_ingreso").value;
    let salario_emp = document.getElementById("salario").value;

    console.log(nombre_emp, apellido_emp, genero_emp, fechaN_emp, fechaI_emp, salario_emp);

    if (validarCampos(nombre_emp, apellido_emp, genero_emp, fechaN_emp, fechaI_emp, salario_emp) == true) {
        alert("Datos correctos");
        //Debemos validar que no ingrese numeros en nombre, apellido,...


        e.nombre = nombre_emp;
        e.apellido = apellido_emp;
        e.genero = genero_emp;
        e.fecha_nacimiento = fechaN_emp;
        e.foto = "foto";
        e.fecha_ingreso = fechaI_emp;
        e.salario = salario_emp;
        console.log(e);
        // let f=fecha_nacimiento;
    } else {
        console.log("Datos incorrectos");
    }
}

function calcular_edad() {
    //INGRESO DE DATOS
    let nombre_emp = document.getElementById("nombre").value;
    let apellido_emp = document.getElementById("apellido").value;
    let genero_emp = document.getElementById("genero").value;
    let fechaN_emp = document.getElementById("fecha_nacimiento").value;
    // let foto_emp = document.getElementById("nombre").value;
    let fechaI_emp = document.getElementById("fecha_ingreso").value;
    let salario_emp = document.getElementById("salario").value;

    console.log(nombre_emp, apellido_emp, genero_emp, fechaN_emp, fechaI_emp, salario_emp);

    if (validarCampos(nombre_emp, apellido_emp, genero_emp, fechaN_emp, fechaI_emp, salario_emp) == true) {
        let fechaNacimiento=new Date(fechaN_emp)
        let fechaActual = new Date();//Creamos una variable con la fecha de hoy
        let diferenciaMilisegundos=fechaActual-fechaNacimiento;

        //Convertir los milisegundos a años, el numero 31557600000 es una aproximacion de la cantidad de milisegundos en un año
        let edad=Math.floor(diferenciaMilisegundos/31557600000);
        console.log(edad);
        document.getElementById("edad").value=edad;

    } else {
        console.log("Datos incorrectos");
    }
}


function showHelp() {
    let texto = document.getElementById("help");
    let mensaje = "Calcular edad del empleado";
    texto.textContent = mensaje;
}
function hideHelp() {
    let texto = document.getElementById("help");
    let mensaje = "";
    texto.textContent = mensaje;
}