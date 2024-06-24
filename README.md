# Módulos principales de Node.js para sistemas de archivos, redes y gestión de procesos

Este README.md sirve como una guía completa de los módulos centrales esenciales de Node.js para interactuar con el sistema operativo, el sistema de archivos, la red y los procesos.
Cubre los siguientes temas:

## Información del sistema operativo (OS)
El módulo os proporciona acceso a información básica sobre el sistema operativo subyacente. A continuación se muestran algunos métodos utilizados habitualmente:

**os.arch()**: Devuelve la arquitectura de la CPU (por ejemplo, 'x64', 'arm64').
**os.cpus()**: Devuelve una matriz de objetos que describen las CPU disponibles.
**os.endianness()**: Devuelve el orden de bytes del sistema ('BE' para big-endian, 'LE' para little-endian).
**os.freemem()**: Devuelve la cantidad de memoria libre del sistema en bytes.
**os.homedir()**: Devuelve la ruta del directorio de inicio del usuario.
**os.hostname()**: Devuelve el nombre de host de la máquina.
**os.loadavg()**: Devuelve una matriz que contiene los promedios de carga de 1, 5 y 15 minutos.
**os.platform()**: Devuelve la plataforma del sistema operativo (por ejemplo, 'linux', 'darwin', 'win32').
**os.release()**: Devuelve la versión de lanzamiento del sistema operativo.
**os.tmpDir()**: Devuelve la ruta del directorio temporal del sistema.
**os.type()**: Devuelve el nombre del sistema operativo (por ejemplo, 'Linux', 'Darwin', 'Windows_NT').
**os.uptime()**: Devuelve el tiempo de actividad del sistema en segundos.

## Interacción del sistema de archivos (fs)
El módulo fs ofrece un rico conjunto de funciones para interactuar con el sistema de archivos. A continuación se ofrece una descripción general de sus funcionalidades:

### Operaciones sincrónicas (bloqueo del bucle de eventos):
**fs.readFileSync(ruta, [opciones])**: lee un archivo de forma sincrónica y devuelve su contenido como una cadena o un búfer (según las opciones).
**fs.writeFileSync (ruta, datos, [opciones])**: escribe datos en un archivo de forma sincrónica.
**fs.existsSync(ruta)**: comprueba si un archivo o directorio existe de forma sincrónica.
**fs.statSync(ruta)**: devuelve información estadística sobre un archivo o directorio de forma sincrónica.

### Operaciones asincrónicas (sin bloqueo):
**fs.readFile(ruta, [opciones], callback)**: Lee un archivo de forma asincrónica e invoca la devolución de llamada con el contenido (cadena o búfer) o un error.
**fs.writeFile (ruta, datos, [opciones], callback)**: escribe datos en un archivo de forma asincrónica e invoca la devolución de llamada al finalizar o producirse un error.
**fs.exists (ruta, callback)**: comprueba si un archivo o directorio existe de forma asincrónica e invoca la devolución de llamada con un resultado booleano.
**fs.stat(ruta, callback)**: devuelve información estadística sobre un archivo o directorio de forma asincrónica e invoca la devolución de llamada con un objeto.

### Promesas (enfoque moderno):
Desde Node.js v10, el módulo fs/promises proporciona alternativas basadas en Promise para operaciones de sistemas de archivos asincrónicos. Por ejemplo:
**fs.promises.readFile(ruta, [opciones])**: Lee un archivo de forma asincrónica y devuelve una Promesa que se resuelve con el contenido (cadena o Buffer) o lo rechaza con un error.
**fs.promises.writeFile(ruta, datos, [opciones])**: escribe datos en un archivo de forma asincrónica y devuelve una Promesa que se resuelve al finalizar o se rechaza con un error.
**fs.promises.exists(ruta)**: comprueba si un archivo o directorio existe de forma asincrónica y devuelve una Promesa que se resuelve con un resultado booleano.
**fs.promises.stat(ruta)**: devuelve información estadística sobre un archivo o directorio de forma asincrónica y devuelve una promesa que se resuelve con un objeto.

### Métodos fs adicionales:
**fs.access (ruta, modo, callback)**: verifica los permisos del sistema de archivos para una ruta de forma asincrónica.
**fs.appendFile (ruta, datos, [opciones], callback)**: agrega datos a un archivo de forma asíncrona.
**fs.chmod (ruta, modo, callback)**: cambia los permisos del sistema de archivos de una ruta de forma asincrónica.
**fs.chown(ruta, uid, gid, callback)**: cambia la propiedad de una ruta de forma asincrónica.
**fs.createReadStream (ruta, [opciones])**: crea una secuencia legible para un archivo.
**fs.createWriteStream (ruta, [opciones])**: crea una secuencia de escritura para un archivo.
**fs.readdir(ruta, [opciones], callback)**: lee el contenido de un directorio de forma asincrónica y devuelve una matriz de nombres de archivos a través de la función de devolución de llamada.
  **opciones**: puede ser un objeto que especifica codificación, withFileTypes (booleano para devolver objetos **fs.Dirent** en lugar de solo nombres de archivos), etc.
**fs.rename(oldPath, newPath, callback)**: cambia el nombre o mueve un archivo o directorio de forma asincrónica.
**fs.rmdir (ruta, callback)**: elimina un directorio vacío de forma asincrónica.
**fs.unlink (ruta, callback)**: elimina un archivo de forma asincrónica.

### Módulo de ruta (path)
El módulo path ofrece utilidades para trabajar con rutas de archivos y directorios. A continuación se muestran algunas funciones de uso común:

**path.join(...paths)**: une todos los segmentos de ruta dados en una única ruta canónica.
**path.normalize(path)**: normaliza una ruta (resuelve los segmentos ".." y ".").
**path.parse(path)**: analiza una ruta en un objeto con componentes como root, dir, base, ext, etc.
**path.basename(ruta, [ext])**: devuelve la última parte de una ruta, eliminando opcionalmente una extensión especificada.
**path.dirname(ruta)**: devuelve el nombre del directorio de una ruta.
**path.extname(ruta)**: devuelve la extensión de una ruta (la parte después del último punto).
**path.isAbsolute(path)**: comprueba si una ruta es absoluta.

### Listado de contenidos del directorio (ls)
Puede recorrer directorios y enumerar sus contenidos utilizando la función fs.readdir mencionada anteriormente o fs.promises.readdir para el enfoque asincrónico basado en promesas.

### Módulo de proceso (process)
El módulo de proceso proporciona información y control sobre el proceso actual de Node.js. He aquí un vistazo a algunas propiedades y métodos útiles:

**process.argv**: una matriz que contiene argumentos de línea de comandos pasados ​​al iniciar el script.
**process.cwd()**: Devuelve el directorio de trabajo actual del proceso.
**process.env**: un objeto que contiene variables de entorno.
**process.exit (código)**: finaliza el proceso con un código de salida específico (0 para éxito, distinto de cero para error).
**process.stdout**: un flujo grabable para salida estándar.
**process.stderr**: una secuencia de escritura para error estándar.

### Módulo HTTP (http)
El módulo http se utiliza para crear servidores y clientes HTTP. A continuación se muestra un desglose de sus funcionalidades:
#### Crear servidor HTTP:
```
  const http = require('http');
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, HTTP World!');
  });
  
  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

```

#### Hacer petición HTTP como cliente:
```
const http = require('http');

const options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk.toString()}`);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();

```

# Propósito de process.env

El objeto Process.env en Node.js es un objeto global que proporciona acceso a variables de entorno. Estas variables se configuran fuera de la aplicación Node.js, generalmente mediante el sistema operativo, el shell o mediante el uso de un archivo .env. Las variables de entorno son una forma conveniente de almacenar y administrar los ajustes de configuración de su aplicación, ya que se pueden modificar fácilmente sin cambiar el código de la aplicación.

## Variables de entorno en el contexto de Node.js

En el contexto de Node.js, las variables de entorno desempeñan un papel crucial en la configuración e implementación de la aplicación. Le permiten separar los detalles de configuración del código de la aplicación, lo que facilita la administración y adaptación de la aplicación a diferentes entornos. Por ejemplo, puede configurar variables de entorno para detalles de conexión de bases de datos, claves API o configuraciones específicas de la aplicación.

### Beneficios de utilizar variables de entorno:##
**Separación de preocupaciones**: desvincula la configuración del código, promoviendo un código más limpio y un mantenimiento más sencillo.
**Configuraciones específicas del entorno**: adapta el comportamiento de la aplicación a diferentes entornos (desarrollo, preparación, producción).
**Gestión de Configuración Externa**: Facilita los cambios de configuración sin modificar el código de la aplicación.
**Seguridad**: protege la información confidencial (por ejemplo, claves API) almacenándolas en variables de entorno.
