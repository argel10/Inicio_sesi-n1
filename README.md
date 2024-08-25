# Proyecto: Inicio de Sesión

## Descripción

Este proyecto es una aplicación web básica de inicio de sesión y registro desarrollada en Node.js y Express. Permite a los usuarios registrarse, iniciar sesión y acceder a un panel de usuario. Los datos se almacenan temporalmente en una simulación de base de datos en memoria.

## Características

- **Registro de Usuario:** Los usuarios pueden crear una cuenta con un nombre de usuario y una contraseña.
- **Inicio de Sesión:** Los usuarios registrados pueden iniciar sesión.
- **Panel de Usuario:** Después de iniciar sesión, los usuarios acceden a un panel donde se muestra su nombre de usuario.
- **Cerrar Sesión:** Los usuarios pueden cerrar sesión y regresar a la página principal.

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **EJS (Embedded JavaScript)**
- **CSS personalizado**
- **Express-session**

## Instalación y Ejecución
Sigue estos pasos para instalar y ejecutar el proyecto localmente:

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```
Navega al directorio del proyecto:

```bash
cd "Inicio de Sesion"
```
Instala las dependencias:

```bash
npm install
```

Inicia la aplicación:

```bash
node app.js
```
Accede a la aplicación:

Abre tu navegador y ve a http://localhost:3001 (o el puerto configurado).


## Uso de la Aplicación

## Registro de Usuario
Ve a la ruta /register o haz clic en el enlace "Registrar" en la página principal.
Ingresa un nombre de usuario y una contraseña.
Haz clic en "Registrar". Serás redirigido a la página de inicio de sesión.

## Inicio de Sesión
Ve a la ruta /login o haz clic en el enlace "Iniciar Sesión" en la página principal.
Ingresa tu nombre de usuario y contraseña.
Haz clic en "Iniciar Sesión". Serás redirigido a tu panel de usuario si las credenciales son correctas.

## Panel de Usuario
Después de iniciar sesión, accederás a /dashboard, donde verás un mensaje de bienvenida con tu nombre de usuario.

## Cerrar Sesión
Para cerrar sesión, haz clic en "Cerrar Sesión" en el panel de usuario. Esto te redirigirá a la página principal.

## Notas Importantes
Simulación de Base de Datos: Este proyecto utiliza un objeto en memoria para almacenar usuarios, lo que significa que todos los datos se pierden cuando el servidor se detiene.
Persistencia de Datos: Si deseas persistencia, considera integrar una base de datos real como MongoDB o MySQL.
