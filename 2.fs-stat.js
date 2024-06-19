const fs = require('node:fs') // a partir de Node 16 se recomienda poner node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es directorio
    stats.isSymbolicLink(), // es enlace simbólico
    stats.size, // tamaño en bytes
    stats.
    stats.mode,
    stats.atime,
    stats.birthtime,
    stats.blocks
)