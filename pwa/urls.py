from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.app_shell, name='app_shell'),
    ]
