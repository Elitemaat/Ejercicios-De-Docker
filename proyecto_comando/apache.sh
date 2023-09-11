#!/bin/bash
echo "Estoy en apache" > /var/www/html/index.html
apachectl -D FOREGROUND
