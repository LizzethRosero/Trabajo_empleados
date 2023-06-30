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


function calcular_anti() {
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
        let fechaIngreso=new Date(fechaI_emp)
        let fechaActual = new Date();//Creamos una variable con la fecha de hoy
        let diferenciaMilisegundos=fechaActual-fechaIngreso;

        //Convertir los milisegundos a años, el numero 31557600000 es una aproximacion de la cantidad de milisegundos en un año
        let antiguedad=Math.floor(diferenciaMilisegundos/31557600000);
        console.log(antiguedad);
        document.getElementById("antiguedad").value=antiguedad;

    } else {
        console.log("Datos incorrectos");
    }
}


function datos_acad() {
    document.getElementById("datos_academicos").style="block";
    
}

function validar_datos_academicos(codigo, Universidad, programa) {
    //lIMPIAREMOS LOS SPAN DE TEXTO DE DATOS INCORRECTOS
    document.getElementById("texto_codigo").innerHTML = '';
    document.getElementById("texto_Uni").innerHTML = '';
    document.getElementById("texto_programa").innerHTML = '';

    let esta_correcto = false;

    if (codigo == "") {//validar si hay un campo vacio para el codigo
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_codigo").innerHTML = '*Este campo no puede estar vacío';
    } else if (isNaN(codigo) == true) {//validar si el codigo no es un numero
        alert("Ingrese datos correctos");
        document.getElementById("texto_codigo").innerHTML = '*Este campo debe ser un número';
    } else if (Universidad == "") {//validar si hay un campo vacio para Universidad
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_Uni").innerHTML = '*Este campo no puede estar vacío';
    } else if (/\d/.test(Universidad.trim())) {//validar si hay un digito en Universidad
        alert("No se permite números en este campo");
        document.getElementById("texto_Uni").innerHTML = '*Este campo no puede contener números';
    } else if (programa == "") {//validar si hay un campo vacio para programa
        alert("Debe ingresar todos los campos");
        document.getElementById("texto_programa").innerHTML = '*Este campo no puede estar vacío';
    } else if (/\d/.test(programa.trim())) {//validar si hay un digito en el programa
        alert("No se permite números en este campo");
        document.getElementById("texto_programa").innerHTML = '*Este campo no puede contener números';
    } else {
        esta_correcto = true;
    }
    return esta_correcto;
}

function datos_academicos() {
    //INGRESO DE DATOS
    let codigo = document.getElementById("codigo").value;
    let Universidad = document.getElementById("Universidad").value;
    let programa = document.getElementById("programa").value;

    if (validar_datos_academicos(codigo,Universidad,programa)==true){
        let arreglo_datos=[codigo,Universidad,programa];
        document.getElementById("mensaje_datos").innerHTML="Se obtuvo información exitosamente";

        document.getElementById("mostrar_codigo").innerHTML="Código Estudiantil: "+arreglo_datos[0];
        document.getElementById("mostrar_programa").innerHTML="Programa Académico: "+arreglo_datos[2];
        document.getElementById("mostrar_universidad").innerHTML="Universidad: "+arreglo_datos[1];
    }else{
        console.log("Hay datos incorrectos en académicos");
        document.getElementById("mensaje_datos").innerHTML="No se logró obtener información";
        document.getElementById("mostrar_codigo").innerHTML="Hay campos incorrectos, por favor verifique";

    }

}

function visualizar_datos(){
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
        e.nombre = nombre_emp;
        e.apellido = apellido_emp;
        e.genero = genero_emp;
        e.fecha_nacimiento = fechaN_emp;
        e.foto = "foto";
        e.fecha_ingreso = fechaI_emp;
        e.salario = salario_emp;
       document.getElementById("mensaje_principal").innerHTML="Los datos que has ingresado son:";
       document.getElementById("mostrar_nombre").innerHTML="Nombre: "+e.nombre;
       document.getElementById("mostrar_apellido").innerHTML="Apellido: "+e.apellido;
       document.getElementById("mostrar_genero").innerHTML="Género: "+e.genero;
       document.getElementById("mostrar_fechaN").innerHTML="Fecha de nacimiento: "+e.fecha_nacimiento;
       document.getElementById("mostrar_fechaI").innerHTML="Fecha de ingreso: "+e.fecha_ingreso;
       document.getElementById("mostrar_salario").innerHTML="Salario: "+e.salario;
    }else{
       console.log("Hay datos incorrectos");
       document.getElementById("mensaje_principal").innerHTML="Los datos no se ingresaron correctamente";

    }
}