#Docker yml setup for react, php, node, mysql and nginx 

### GET STARTED

#### Git Clone
```
git clone https://github.com/pompy/react_php_node_mysql_nginx_setup
```
#### Make sure docker, docker-compose is installed
Installations depends on whether your os is based on windows or linux distribution

#### Docker Compose Up/Build

```
// create and start containers
docker-compose up

docker-compose build
```

#### Docker Compose other handy command

```
// create and start containers
docker-compose up
// start services with detached mode
docker-compose -d up
// start specific service
docker-compose up <service-name>
// list images
docker-compose images
// list containers
docker-compose ps
// start service
docker-compose start
// stop services
docker-compose stop
// display running containers
docker-compose top
// kill services
docker-compose kill
// remove stopped containers
docker-compose rm
// stop all contaners and remove images, volumes
docker-compose down
```

#### Placement of files

##### PHP
```
app/public/public
Place your php files. You can install laravel here if you want to.
You can place adminer file to open mysql admin.
```
Access
<http://localhost:81/api.php>
<http://localhost:81/test.php>


##### NODE.js
```
appnode/
All node js modules and files
```

Access
<http://localhost:5000/api>
<http://localhost:5000/>

##### Reactjs
```
appreact/
Place your reactjs  files here
```

Access
<http://localhost:3000/>
You will reactjs code local api is consumed.
