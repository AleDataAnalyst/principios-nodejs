// 1. Importaciones:
// servidor web simple utilizando el módulo http de Node.js
const http = require('node:http')
const fs = require('node:fs')


// 2. Puerto del servidor:
/* Define el puerto en el que se escuchará el servidor.
Si la variable de entorno PORT está definida, se usará su valor.
Si PORT no está definida, se utilizará el puerto predeterminado 1234. */
const desiredPort = process.env.PORT ?? 1234

// 3. Manejador de peticiones (processRequest):
const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8') // Establece la cabecera Content-Type en la respuesta para indicar que el contenido es HTML con codificación UTF-8.

    if (req.url === '/') {
        res.end('<h1>Mi página</h1>') // Verifica si la URL solicitada es la raíz (/). Si es así, envía la respuesta con el título "Mi página" en HTML.
    } else if (req.url === '/imagen.png') {
        fs.readFile('./img.png', (err, data) => {
            if (err) { // Si hay un error al leer el archivo, establece el código de estado de la respuesta a 500 (Error interno del servidor) y envía un mensaje de error.
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>')
            } else { // Si la lectura del archivo es exitosa, establece la cabecera Content-Type en la respuesta para indicar que el contenido es una imagen PNG y luego envía el contenido del archivo como respuesta.
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else if (req.url === '/contacto') { // Verifica si la URL solicitada es /contacto. Si es así, envía la respuesta con el título "Contacto" en HTML.
        res.statusCode = 404 // Not Found
        res.end('<h1>404</h1>') // Si la URL solicitada no coincide con ninguna de las anteriores, establece el código de estado de la respuesta a 404 (No encontrado) y envía la respuesta con el mensaje "404".
    }
}

// 4. Creación del servidor:
const server = http.createServer(processRequest) // Crea un servidor HTTP utilizando la función http.createServer y pasa la función processRequest como manejador de peticiones.

// 5. Arranque del servidor:
server.listen(desiredPort, () => { // Pone el servidor a la escucha en el puerto especificado por desiredPort
    console.log(`server listening on port http://localhost:${desiredPort}`) //  Imprime un mensaje en la consola indicando que el servidor está escuchando en la dirección
})

// 