const path = require('node:path')

// barra separadora de carpetas según SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = basename('/tmp/secret-files'/password.txt)
console.log(base)

const filename = path.basename('/tmp/secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('img.jpg')
console.log(extension)