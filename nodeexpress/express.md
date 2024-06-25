# Express: Capas que mejoran las funciones nativas de Node.js
Express es un framework popular para crear servidores web en Node.js. Proporciona una serie de capas que mejoran las funciones nativas de Node.js para el desarrollo web, simplificando tareas comunes y facilitando la organización del código.

## Funciones de Express
Validación de datos: Validar formatos de entrada, valores permitidos, etc.
Sanitización de datos: Eliminar caracteres peligrosos, prevenir ataques XSS, etc.
Subida de archivos: Manejar la carga de archivos al servidor.
Cacheo: Almacenar respuestas en caché para mejorar el rendimiento.
Sesiones: Almacenar información de usuario entre peticiones.
Enrutamiento avanzado: Manejar rutas complejas con parámetros, expresiones regulares, etc.

## Beneficios
Simplificación del código: Reduce la cantidad de código repetitivo y complejo.
Reutilización: Se puede usar en diferentes partes de la aplicación.
Modularidad: Mejora la organización del código y la separación de responsabilidades.
Seguridad: Ayuda a prevenir vulnerabilidades y errores comunes.

Capas principales de Express:

### Rutas y métodos HTTP:
Express define una estructura clara para manejar peticiones HTTP, utilizando rutas y métodos (GET, POST, PUT, DELETE, etc.). Esto simplifica la organización del código y facilita la creación de APIs RESTful.

Ejemplo:

```
app.get('/users', (req, res) => {
  // Obtener usuarios de la base de datos
  // ...
  res.json(usuarios);
});

app.post('/users', (req, res) => {
  // Crear nuevo usuario
  // ...
  res.status(201).json(nuevoUsuario);
});

```

### Plantillas de vista:
Express permite utilizar diferentes motores de plantillas (EJS, Pug, Handlebars) para generar respuestas HTML dinámicas. Esto facilita la creación de interfaces de usuario web.

```
app.get('/productos', (req, res) => {
  // Obtener productos de la base de datos
  // ...
  res.render('productos', { productos: productos });
});
```

### Manejo de errores:
Express proporciona un manejo de errores integrado, permitiendo interceptar y gestionar errores de manera centralizada.
```
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
```

### Middlewares:
Express permite crear middleware, que son funciones que se ejecutan antes o después de manejar una petición. Se utilizan para tareas transversales como autenticación, validación de datos, registro de peticiones, etc.

#### Middleware para autenticación básica
```
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send('Unauthorized');
    return;
  }

  // Validar la cabecera de autorización
  // ...

  next();
});
```

#### Otro ejemplo de valudación con Middleware
```
const expressValidator = require('express-validator');

app.use(expressValidator());

app.post('/users', (req, res) => {
  // Validar campos del formulario
  req.check('nombre').notEmpty().isLength({ min: 3, max: 20 });
  req.check('email').isEmail();

  // Obtener errores de validación
  const errors = req.validationErrors();

  if (errors) {
    res.status(400).json({ errors });
    return;
  }

  // Crear nuevo usuario
  // ...
});
```

## Identificando middlewares:

Para identificar si un método de Express implica el uso de middlewares, hay que prestar atención a algunos aspectos:

### Ubicación:
Los middlewares se definen utilizando el método app.use(). Este método recibe como parámetro una o más funciones middleware.

### Firma de la función:
Las funciones middleware siguen una estructura específica. Reciben tres argumentos: req (la petición HTTP), res (la respuesta HTTP) y next (una función para pasar al siguiente middleware o al manejador de la ruta).

### Comportamiento:
Los middlewares interceptan y modifican las peticiones HTTP antes de que lleguen al manejador de la ruta o a la respuesta final. Pueden realizar diversas tareas como autenticación, validación de datos, registro de peticiones, etc.

Ejemplos:
#### Es middleware
```
app.use((req, res, next) => {
  // Validar la cabecera de autorización
  if (!req.headers.authorization) {
    res.status(401).send('Unauthorized');
    return;
  }

  // Continuar al siguiente middleware o al manejador de la ruta
  next();
});
```

No es middleware
```
app.get('/users', (req, res) => {
  // Obtener usuarios de la base de datos
  // ...
  res.json(usuarios);
});
```

En este segundo ejemplo, app.get('/users', ...) define una ruta para la petición GET /users. La función que se pasa como segundo argumento no es un middleware, sino el manejador de la ruta, que se encarga de procesar la petición y generar la respuesta.

app.use() se utiliza para definir y configurar middlewares.
Sin embargo, no todos los métodos de Express que comienzan con app. son middlewares.
Los middlewares tienen una firma de función específica con tres argumentos: req, res y next.
Los middlewares interceptan y modifican las peticiones HTTP antes de que lleguen al manejador de la ruta o a la respuesta final.

En resumen, Express proporciona capas y herramientas que mejoran las funciones nativas de Node.js para el desarrollo web, facilitando la creación de APIs RESTful, la gestión de peticiones HTTP, el manejo de plantillas de vista, la validación de datos, el control de errores y la reutilización de código. Los snippets y middlewares predefinidos simplifican el desarrollo y promueven buenas prácticas, ahorrando tiempo y mejorando la calidad del código.

https://expressjs.com/en/guide/using-middleware.html
