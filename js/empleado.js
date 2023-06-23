class Empleado{
    constructor (nombre,apellido,genero,fecha_nacimiento,foto,fecha_ingreso,salario){
        this.nombre=nombre;
        this.apellido=apellido;
        this.genero=genero;
        this.fecha_nacimiento=fecha_nacimiento;
        this.foto=foto;
        this.fecha_ingreso=fecha_ingreso;
        this.salario=salario;
    }
    darNombre(){
        return this.nombre;
    }

    darApellido(){
        return this.apellido;
    }

    darGenero(){
        return this.genero;
    }

    darFecha_Nacimiento(){
        return this.fecha_nacimiento;
    }

    darFoto(){
        return this.foto;
    }

    darFecha_Ingreso(){
        return this.fecha_ingreso;
    }

    darSalario(){
        return this.salario;
    }

}

let e = new Empleado();

function modificar(){
    //INGRESO DE DATOS
    let nombre_emp = document.getElementById("nombre").value;
    let apellido_emp = document.getElementById("apellido").value;
    let genero_emp = document.getElementById("genero").value;
    let fechaN_emp = document.getElementById("fecha_nacimiento").value;
    // let foto_emp = document.getElementById("nombre").value;
    let fechaI_emp = document.getElementById("fecha_ingreso").value;
    let salario_emp = document.getElementById("salario").value;

    if(nombre_emp=="" || apellido_emp=="" || genero_emp=="" || fechaN_emp=="" || fechaI_emp=="" || salario_emp==""){
        alert("Debe ingresar todos los campos");
    }
    else{
        alert("Datos corectos");
        //Debemos validar que no ingrese numeros en nombre, apellido,...

        e.nombre=nombre_emp;
        e.apellido=apellido_emp;
        e.genero=genero_emp;
        e.fecha_nacimiento=fechaN_emp;
        e.foto="foto";
        e.fecha_ingreso=fechaI_emp;
        e.salario=salario_emp;
        console.log(e);
        let f=fecha_nacimiento;
    }
}

function showHelp(){
    let texto=document.getElementById("help");
    let mensaje="Calcular edad del empleado";
    texto.textContent=mensaje;
}
function hideHelp(){
    let texto=document.getElementById("help");
    let mensaje="";
    texto.textContent=mensaje;
}