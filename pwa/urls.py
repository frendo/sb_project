from django.conf.urls import include, url
from .views import app_shell, sw_js, ssl_ca

urlpatterns = [
    url(r'^$', app_shell, name='app_shell'),
	url(r'^service-worker(.*.js)$', sw_js, name='sw_js'),
	url(r'^www.geewatt.pythonanywhere.com.html$', ssl_ca, name='ssl_ca'),
    ]
