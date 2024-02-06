# API-clean-architecture

API REST desarrollada en Node.js, TypeScript y Docker, que implementa un sistema de autenticación utilizando Clean Architecture, JSON Web Tokens (JWT) y como bases de datos, se emplea MongoDB con Mongoose y PostgreSQL con Prisma ORM ☘️

## Requisitos Previos

- [Node.js](https://nodejs.org/en) (v16.0.0 o superior)
- [pnpm](https://pnpm.io/es/) (Puedes instalarlo globalmente con `npm install -g pnpm` o habilitando Corepack con `corepack enable pnpm` desde la v16.13 de Node.js)
- [Docker](https://www.docker.com) (Se requiere Docker para ejecutar los servicios deseados, base de datos MongoDB y PostgreSQL)

## Instalación y Uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Mayer-04/API-clean-architecture.git
   ```

2. Instalar las dependencias: `pnpm install`
3. Clonar el archivo **.env.template** a **.env** para configurar las variables de entorno. Credenciales de la base de datos y la clave secreta para JWT.
4. Configurar el **docker-compose.yml** y ejecutar:

   ```bash
   docker-compose up -d
   ```

5. Ejecutar `pnpm run dev` para levantar el proyecto en modo desarrollo.
6. Accede a la API desde `http://localhost:[puerto]`
