
// Propiedades nv. 3
// Renderizado y desestructuración en el parámetro
// como es un objeto lo puedo desestructurar en el parámetro.
export const Usuario = ( {nombre, edad, rol} ) => {
    comsole.log(nombre, edad, rol)

    return (
        <div>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Rol: {rol}</p>
        </div>
    )
}

// Propiedades nv. 2
// Renderizado y desestructuración
// export const Usuario = (props) => {
//     const { nombre, edad, rol} = props
//     comsole.log(props)

//     return (
//         <div>
//             <h3>{nombre}</h3>
//             <p>Edad: {edad}</p>
//             <p>Rol: {rol}</p>
//         </div>
//     )
// }

// Propiedades nv. 1
// export const Usuario = (props) => {
//     comsole.log(props)

//     return (
//         <div>
//             <h3>{props.nombre}</h3>
//             <p>Edad: {props.edad}</p>
//             <p>Rol: {props.rol}</p>
//         </div>
//     )
// }