1.- Consumir una API y generar un token de consulta. Para ello, dirígete a https://postulaciones.solutoria.cl/index.html y ve a la sección "Token". Debes solicitar un token utilizando el método POST en /api/acceso. Tus credenciales para solicitar el token son las siguientes:
{
"userName": "@usuario",
"flagJson": true
}

2.- Con el token creado, debes importar la información histórica de la UF desde la API a una base de datos de tu elección. La información se encuentra en /api/indicadores.

3.- Crea un CRUD (Create, Read, Update, Delete) de los datos importados en la base de datos que hayas utilizado. El CRUD debe implementarse utilizando cualquier framework de React y axios.

4.- Crea un gráfico que muestre los datos importados, y agrega un filtro de fecha que permita visualizar los datos en un rango específico.

Tus compañeros evaluarán tu tarea, y si le dedicas un poco de cariño, tendrás una mejor evaluación.

Tiempo estimado para completar la tarea: 3 a 5 horas.

Debes realizar la tarea descrita, subirla a un repositorio público de Git que sea de tu propiedad y enviarnos la URL del repositorio a postulaciones@solutoria.help. El asunto del correo debe ser "TAREA DESARROLLADOR REACT". Te responderemos en un plazo máximo de 5 días hábiles después de que hayas enviado la tarea (generalmente, respondemos al día siguiente).
