const ENDPOINT = process.env.REACT_APP_ENDPOINT_API;


export function getProfesoresFromCurso (id_materia) {
  return fetch(`${ENDPOINT}/administrador/licenciatura/materias/consultarProfesores/`+id_materia, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }).then(response => response.json())
  .then(res => {
    return res;
  }).catch(err => {
    console.warn("Posible fallo de conexion")
    return null;
  })

}

