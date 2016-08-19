from django.conf.urls import include, url
from .views import app_shell, sw_js

urlpatterns = [
    url(r'^$', app_shell, name='app_shell'),
	url(r'^service-worker(.*.js)$', sw_js, name='sw_js'),
    ]
