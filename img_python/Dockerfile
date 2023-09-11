FROM ubuntu
RUN apt-get update
RUN apt-get install -y python3
RUN echo 1.0 >> /etc/version && apt-get install -y git \
    && apt-get install -y iputils-ping

##WORKDIR##
RUN mkdir /datos
WORKDIR /datos
RUN touch f01.txt
RUN mkdir /datos1
WORKDIR /datos1
RUN touch f02.txt

##COPY##
COPY index.html .
COPY app.log /datos

##ADD##
ADD docs docs
ADD f* /datos/
ADD f.tar .

##ENV##
ENV dir=/data dir1=/data1
RUN mkdir $dir && mkdir $dir1

#ENV TEXTO=" Esto es un ejemplo de Texto"

#CMD ["echo","$TEXTO"] #No Funciona corectamente 
#CMD echo $TEXTO       
#CMD mkdir $dir1; ls -l /
#ADD crear_dir.sh .
#RUN chmod +x /datos1/crear_dir.sh
#CMD /datos1/crear_dir.sh

##ARG##
#ARG dir2
#RUN mkdir $dir2
#ARG user
#ENV user_docker $user
#ADD add_user.sh /datos1
#RUN /datos1/add_user.sh

##EXPOSE##
RUN apt-get install -y apache2
EXPOSE 80
ADD entrypoint.sh /datos1

##VOLUME##
ADD paginas /var/www/html 
VOLUME ["/var/www/html"]

##CMD##
CMD /datos1/entrypoint.sh


##ENTRYPOINT##
##ENTRYPOINT ["/bin/bash"]
