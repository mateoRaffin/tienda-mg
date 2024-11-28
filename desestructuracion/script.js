// Desestructurando arrays
// let nombres = ['Mateo', 'Marcos', 'Lucas', 'Juan', 'Pablo'];

// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);
// console.log(nombres[4]);


// let [nombre1,nombre2,nombre3,nombre4,nombre5]  = nombres;

// console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);
// console.log(nombre5);


// // Quiero desestructurar el primero y el tercero nada mas
// let [primero,,tercero,,] = nombres;

// console.log(primero);
// console.log(tercero);

// let [first,...otros]=nombres;

// console.log(first);
// console.log(otros);


// Desestructurando objetos - usamos {}

// En objetos no tenemos "posiciones", tenemos "propiedades"
let estudiante = {
    nombre:'Marta',
    apellido:'Pino',
    curso:'React'
}

console.log(estudiante.curso);

// Para desestructurar hacemos:

let {nombre,apellido,curso}=estudiante;

console.log(nombre);
console.log(`Hola ${nombre} ${apellido} Bienvenida al curso de ${curso}`);

let {nombre:name,apellido:surname}=estudiante;

console.log(name);
console.log(surname);
