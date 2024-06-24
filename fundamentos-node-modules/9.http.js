const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')

/*
Registra las variables de entorno actuales en la consola para fines de depuración,
especialmente cuando se implementa una aplicación en diferentes entornos (pej, desarrollo, ensayo, producción).
Al registrar las variables de entorno, se comprueban variables disponibles y sus valores,
útil para solucionar problemas de configuración o comprender cómo se ejecuta la aplicación.
*/
console.log(process.env)

// Comprobar si hay una variable de entorno PORT; de lo contrario, utilizar 3000 como predeterminada
const desiredPort = process.env.PORT ?? 3000

// Crear servidor HTTP usando http module
const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
    server.listenerCount(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    })
})