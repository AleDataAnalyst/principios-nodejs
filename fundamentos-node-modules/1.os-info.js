const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('----------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria libre', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() /60 /60)
console.log('Available Parallelism', os.availableParallelism)
console.log('Endianness', os.endianness)
console.log('Get Priority', os.getPriority)
console.log('Directorio', os.homedir)
console.log('Máquina', os.machine)
console.log('Interfaz de red', os.networkInterfaces)
console.log('Tipo', os.type)
console.log('Info de usuario', os.userInfo)