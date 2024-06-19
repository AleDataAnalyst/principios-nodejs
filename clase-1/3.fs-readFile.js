const fs = require('node:fs')

// readFile lee el archivo de forma no bloqueante.
// El código continúa ejecutandose mientras se lee el archivo.
// Devuelve el contenido del archivo a través de un callback.
// El callback recibe dos argumentos: err (en caso de error) y text (el contenido del archivo).

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})