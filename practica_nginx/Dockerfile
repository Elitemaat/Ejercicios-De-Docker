##Descargamos una version concreta de UBUNTU, a traves del tag
FROM ubuntu
MAINTAINER elitemaat5 Formacion "elitemaat5@gmail.com"
##Actualizamos el sistema
RUN apt-get update
##instalamos nginx
RUN apt-get install -y nginx
##Creamos un fichero index.html en la Carpeta por defecto de nginx
RUN echo 'Mi Dockerfile' > /var/www/html/index.html
##Arrancamos NHNIX a travez de ENTRYPOINT para que pueda se ##modificar en la creacion del contenedor
ENTRYPOINT ["/usr/sbin/nginx","-g","daemon off;"]
##Exponemos el Puerto 80
EXPOSE 80
