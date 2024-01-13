# API-clean-architecture

API REST desarrollada en Node.js, TypeScript y Docker, que implementa un sistema de autenticación utilizando Clean Architecture, JSON Web Tokens (JWT) y como bases de datos, se emplea MongoDB con Mongoose y PostgreSQL con Prisma ORM ☘️.

## Instalación y Uso

1. Clona el repositorio: `git clone https://github.com/Mayer-04/API-clean-architecture.git`
2. Instalar las dependencias: `pnpm install`
3. Clonar .env.template a .env para configurar las variables de entorno. Credenciales de la base de datos y la clave secreta para JWT.
4. En caso de necesitar base de datos, configurar el docker-compose.yml y ejecutar `docker-compose up -d` para levantar los servicios deseados.
5. Ejecutar `pnpm run dev` para levantar el proyecto en modo desarrollo.
6. Accede a la API desde `http://localhost:[puerto]`
