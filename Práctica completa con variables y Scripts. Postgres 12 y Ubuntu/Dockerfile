##Si seleccionamos otra versión de Ubuntu o de Postgres puede que
##tengamos que modificar el fichero para adaptarlo
FROM ubuntu
LABEL "Creador"="Apasoft Training apasoft.training@gmail.com"
##Actualizamos
RUN apt-get update
##Instalamos WGET para el repositorio
RUN apt-get install -y wget
##Instalamos lsb-release para conocer la relesase del ubuntu
RUN apt-get install -y lsb-release
##Instalamos gpg2 para descargar la clave GPG
RUN apt-get install -y gnupg2
##Instalamos tzdata, porque Ubuntu ahora la pide de forma interactiva
RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get -y install tzdata
##Configuramos el repositorio
RUN echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list
## Descargamos la clave
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
##Actualizamos el sistema
RUN apt-get update
##Instalamos Postgres
RUN apt-get -y install postgresql-12
##Nos cambiamos al usuario postgres, que se ha creado
##al instalar postgreSQL
USER postgres
##Creamos un usuario denominado “pguser” con password
##”secret” y creamos una base de datos llamada “pgdb”
RUN /etc/init.d/postgresql start \
 && psql --command "CREATE USER pguser WITH SUPERUSER PASSWORD 'secret';" \
 && createdb -O pguser pgdb
##Nos cambiamos a usuario ROOT
USER root
##Permitimos que se puede acceder a PostgreSQL
##desde clientes remotos
RUN echo "host all all 0.0.0.0/0 md5" >> /etc/postgresql/12/main/pg_hba.conf
##PErmitimos que se pueda acceder por cualquier

##IP que tenga el contenedor
RUN echo "listen_addresses='*'" >> /etc/postgresql/12/main/postgresql.conf
##Exponemos el Puerto de la Base de Datos
EXPOSE 5432
##Creamos un directorio en /var/run y le damos permisos
##para el usuario postgres
RUN mkdir -p /var/run/postgresql && chown -R postgres /var/run/postgresql
##Creamos los volúmenes necesarios para guardar
##el backup de la configuración, logs y bases de datos
##y poder acceder desde fuera del contenedor
VOLUME ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]
##Nos cambiamos al usuario postgres
USER postgres
##Indicamos el comando a ejecutar al crear el contenedor
##Básicamente arrancar posrtgres con la configuración
##adecuada
CMD ["/usr/lib/postgresql/12/bin/postgres", "-D", "/var/lib/postgresql/12/main", "-c", "config_file=/etc/postgresql/12/main/postgresql.conf"]

