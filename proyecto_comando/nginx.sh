#!/bin/bash
echo "Estoy en nginx" > /var/www/html/index.html
nginx -g "daemon off;"
