### Requerimientos

- NodeJS
- Docker
- Docker Compose
- Npm

### INIT
Para levantar todo en local basta con ejecutar `docker-compose up` e ir a localhost:8085

### Base de datos
- Postgres
- El archivo de base de datos esta en `StockMarketBack/db.sql`
- Se puede correr la base de datos como contenedor pero recomiendo levantar una instancia de postgress en el server e importar la bd. Luego usar
las mismas variables de entorno que se muestran en el `docker-compose.yml`

### Backend 
El código está ya compilado en la carpetas `StockMarketBack/dist`
Se necesitan 2 puertos abiertos. 1 para el API y otro para el socket. EL código ya está modificado para que use las
variables de entorno del contenedor. Puedes ver las variables en el archivo `docker-compose.yml`

### Front end
El código ya esta compilado en `StockMarket/server/dist`. 
Sin embargo y dependiendo del subdominio/dominio que se le asigne al backend deberás compilar todo el código de front nuevamente
cambiando las variables de entorno de este mismo.
Para ello modificar el archivo `StockMarket/webpack/plugins/plugins.prod.js` y editar las variables `API_URL` y `SOCKET_URL`.
Una vez modificado solo ir a la carpeta `StockMarket` y ejecutar `npm run build` una vez que termine este proceso el código ya estará compilado
en la carpeta `StockMarket/server/dist/public` y puedes continuar con la creación del contenedor de front. 
No olvidar ejecutar npm install en la carpeta `StockMarket` si es que no ya no ejecutaste antes `sh ./install_dependencies.sh`

### Docker
Puedes utilizar en archivo `build_release.sh` para solo construir las imágenes de ambos contenedores. 

### Consideraciones
- El código no está refactorizado.
- Tiene cors pero practicamente está descativado ya que está con wildcard *. 
- Solo cuenta con seguridad básica.
- No cuenta con tests.
