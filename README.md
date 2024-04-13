# README

# Frogmi API 📝

Hola Frogmi! soy Alex Farfán y esta es mi prueba técnica para el puesto de Software Development Engineer.

## Tech stack:

- **PostgreSQL**: For save data and better scalability.
- **Ruby on Rails**: For backend and database administration.
- **React**: For crafting a modern, interactive UI.
- **TailwindCSS**: For beautiful, responsive designs without the headache.

## Quick Start

Para este proyecto usé Windows 11 y WSL para trabajar en un entorno de Linux (Ubuntu 22.04) ya que Linux es más compatible con Ruby on Rails y PostgreSQL, recuerda tener instalado Yarn 1.22.22, NodeJS 20.8.0, Ruby 3.2.3, Rails 7.1.3.2 y PostgreSQL 14.11 en tu máquina local o contenedor.

1. Clone this repo:

```bash
git clone https://github.com/loweffort-alt/FrogmiAPI.git
cd FrogmiAPI
```

2. Install gems:

```bash
bundle install
```

3. Tailwind configuration:

```bash
rails tailwindcss:install
```

4. React configuration:

```bash
npm install react react-dom
```

5. Migrate database

```bash
rails db:migrate
```

6. Esbuild configuration
   Puedes consultar la documentación por si no tienes la gema instalado localmente en https://www.rubydoc.info/gems/esbuild-rails/0.1.4.

```bash
rails esbuild:install
```

7. Hacer el build
   Necesitamos compilar para que use app/javascript/aplication.js como carpeta raíz de javascript

```bash
rails assets:precompile
```

8. Correr el servidor
   Ya estamos listos para abrir nuestra aplicación en el navegador

```bash
rails s
```

## ¿Cómo usar la app?

### Paso 1:

Carga los datos en la base de datos haciendo clic en el botón "Load Data" situado en la esquina superior derecha. Esperamos el mensaje de confirmación y estamos listos!

### Paso 2:

Usa el buscador principal para escribir los links que quieres probar. Primero probaremos que funciona correctamente haciendo una consulta a [http://127.0.0.1:3000/api/features](http://127.0.0.1:3000/api/features).

### Paso 3:

Ahora probaremos la paginación, para esto tenemos que modificar el número en pages, también podemos limitar la cantidad de datos por página en per_page [http://127.0.0.1:3000/api/features?page=6&per_page=250](http://127.0.0.1:3000/api/features?page=6&per_page=250).

### Paso 4:

También podemos filtrar la data por mg_type escribiendo los tipos que quieres separados por una coma, por ejemplo: [http://127.0.0.1:3000/api/features?page=1&per_page=1000&mag_type=md,ml](http://127.0.0.1:3000/api/features?page=1&per_page=1000&mag_type=md,ml).
