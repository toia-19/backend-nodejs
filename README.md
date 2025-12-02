# Programación Backend + NODE JS

Proyecto final de **Programación Backend**, Desarrollo de Software Full Stack II.
---

## Tecnologías Utilizadas
- **Node.js** (v22)
- **Express** (framework web)
- **TypeORM** (ORM para MySQL)
- **MySQL** (base de datos relacional)
- **Joi** (validación de DTOs y variables de entorno)
- **Passport + JWT** (autenticación)
- **Nodemon** (desarrollo con recarga automática)
---

## Instalación
1. **Clona el repositorio**
```bash
git clone https://github.com/toia-19/backend-nodejs.git
cd backend-nodejs
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Crea un archivo .env en la raíz del proyecto:**
```bash
PORT=3000
DATABASE=its_nodejs
DB_USER=root
DB_PASS=tu_password
DB_PORT=3306
DB_HOST=localhost
JWT_SECRET=password_secreto
```

4. **Ejecuta la aplicación**
```bash
`nodemon index.js` - Ejecuta la aplicación
```
---

## Endpoints principales
1. **Creación de usuario**
```bash
POST: http://localhost:3000/register
BODY (JSON):
{
    "name": "username",
    "email": "useremail@gmail.com",
    "password": "userpassword"
}
```

2. **Inicio de sesión**
```bash
POST: http://localhost:3000/login
BODY (JSON):
{
    "email": "useremail",
    "password": "userpassword"
}
```

3. **Obtener usuarios por token de autorización**
```bash
GET: http://localhost:3000/users
HEADERS:
key: Authorization
Value: Bearer <token>
```