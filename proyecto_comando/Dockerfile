##Descargamos una version concreta de UBUNTU, a traves del tag
FROM ubuntu
MAINTAINER elitemaat5 Formacion "elitemaat5@gmail.com"
##Actualizamos el sistema
RUN apt-get update

##instalamos nginx
RUN apt-get install -y nginx

##instalamos apache
RUN apt-get install -y apache2

##Creamos un lanzador para apache
ADD apache.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/apache.sh

##Creamos un lanzador para nginx
ADD nginx.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/nginx.sh

##Ponemos cualquier CMD, no es importante el ejemplo
CMD ["echo","Prueba de comando"]

##Exponemos el Puerto 80
EXPOSE 80
