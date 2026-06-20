FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html gallery.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY images/ /usr/share/nginx/html/images/

EXPOSE 80
