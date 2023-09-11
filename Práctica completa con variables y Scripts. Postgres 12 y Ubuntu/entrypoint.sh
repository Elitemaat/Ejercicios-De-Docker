##Arrancamos la Base de Datos para el procedimiento inicial
/etc/init.d/postgresql start
##Creamos el usuario, la pass y la Base de datos, por supuesto con variables
psql --command "CREATE USER ${USER} WITH SUPERUSER PASSWORD '${PASS}';"
createdb -O pguser ${BBDD}
##PAramos la instancia
/etc/init.d/postgresql stop
##Arrancamos de forma normal
exec /usr/lib/postgresql/12/bin/postgres -D /var/lib/postgresql/12/main -c config_file=/etc/postgresql/12/main/postgresql.conf

