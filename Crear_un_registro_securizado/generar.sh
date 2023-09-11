#!/bin/bash
## Comando para revisar el nombre de maquina: uname -n
##Generamos una clave con certificado autofirmado
openssl req  -newkey rsa:4096 -nodes -sha256 -keyout registry.key -x509 -days 365 -out registry.crt  -subj "/CN=DESKTOP-UD0HP17/C=MX/ST=CM/L=Ciudad_de_Mexico/O=Azael/OU=elitemaat" -addext "subjectAltName = DNS:DESKTOP-UD0HP17"


##Creamos un directorio en este PATH que se llame como nuestro nodo:puerto
mkdir -p /etc/docker/certs.d/DESKTOP-UD0HP17:443
cp /root/seguridad/registry.crt /etc/docker/certs.d/DESKTOP-UD0HP17:443

#Generamos un fichero de usuario/password de tipo htpasswd
docker run --rm --entrypoint htpasswd httpd -Bbn elite password > 9097
#### htpasswd -Bbn admin password > htpasswd


##Generamos el contenedor
docker run -d -p 443:443 --restart=always --name registro_privado \
  -v /imagenes_docker:/var/lib/registry \
  -v /root/seguridad:/auth \
  -e REGISTRY_AUTH=htpasswd \
  -e REGISTRY_AUTH_HTPASSWD_REALM="Mi reino de Seguridad" \
  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \
   -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -v /root/seguridad:/certs \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/registry.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/registry.key \
  registry:2
