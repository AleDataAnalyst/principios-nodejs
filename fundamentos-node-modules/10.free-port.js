const net = require('node:net')

function findAvailablePort (desiredPort) { // Función para encontrar puerto disponible
  return new Promise((resolve, reject) => { // Promesa para handling asíncrono
    const server = net.createServer()

    server.listen(desiredPort, () => { // Escuchar el puerto deseado
      const { port } = server.address() // Obtener el puerto asignado del servidor
      server.close(() => { // Cerrar el servidor temporal (no necesitado más)
        resolve(port) // Resolver la promesa con el puerto encontrado
      })
    })

    server.on('error', (err) => { // Manejar errores durante escucha
      if (err.code === 'EADDRINUSE') { // Si el puerto está en uso
        findAvailablePort(0).then(port => resolve(port)) // Encontrar otro puerto (empezando por 0)
      } else {
        reject(err) // Si no, rechazar promesa con el error
      }
    })
  })
}

module.exports = { findAvailablePort }