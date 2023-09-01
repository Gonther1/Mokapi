let obtener = async()=> {
    let peticion = await fetch("https://64f202d20e1e60602d2490a1.mockapi.io/usuario");
    let res = await peticion.json();
    console.log(res);
}
let enviar = async()=> {
    let obj = {
        "cedula": 1098650643,
        "nombre": "Andrés",
        "apellido": "Alvarez",
        "edad": 17,
        "id": 999
    };
    let peticion = await fetch("https://64f202d20e1e60602d2490a1.mockapi.io/usuario",{
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
    });
    let res= await peticion.json()
    console.log(res)
}

enviar()
// obtener()
//Funcion eliminar 
let eliminar = async(id)=> {
    let peticion = await fetch(`https://64f202d20e1e60602d2490a1.mockapi.io/usuario/${id}`,{
        method:"DELETE",
        headers: {'Content-Type':'application/json'},
    });
    let res= await peticion.json()
    console.log(res)
}
eliminar(10)
eliminar(11)

//https://64f202d20e1e60602d2490a1.mockapi.io/usuario
// {
//     "casas": [],
//     "departamentos": [],
//     "id": "1",
//     "usuarioId": "4"
//    },
//    {
//     "casas": [],
//     "departamentos": [],
//     "id": "2",
//     "usuarioId": "5"
//    },
//    {
//     "casas": [],
//     "departamentos": [],
//     "id": "3",
//     "usuarioId": "6"
//    },
//    {
//     "casas": [],
//     "departamentos": [],
//     "id": "4",
//     "usuarioId": "7"
//    }
// let enviarDireccion = async()=> {
//     let obj =   {
//         "casas": [],
//         "departamentos": [],
//         "id": "1",
//         "usuarioId": "4"
//       },
//       {
//         "casas": [],
//         "departamentos": [],
//         "id": "2",
//         "usuarioId": "5"
//       },
//       {
//         "casas": [],
//         "departamentos": [],
//         "id": "3",
//         "usuarioId": "6"
//       },
//       {
//         "casas": [],
//         "departamentos": [],
//         "id": "4",
//         "usuarioId": "7"
//       };
//     let peticion = await fetch("https://64f202d20e1e60602d2490a1.mockapi.io/usuario",{
//         method:"POST",
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify(obj)
//     });
//     let res= await peticion.json()
//     console.log(res)
// }
// obtener()