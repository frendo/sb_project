from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.template.loader import get_template
from django.http import HttpResponse
from django_user_agents.utils import get_user_agent

def app_shell(request):
    return render(request, 'pwa/app_shell.html', {})

@never_cache
def sw_js(request, js):
    template = get_template('pwa/service-worker.js')
    html = template.render()
    return HttpResponse(html, content_type="application/x-javascript")

@never_cache
def ssl_ca(request):
    template = get_template('pwa/www.geewatt.pythonanywhere.com.html')
    html = template.render()
    return HttpResponse(html) 
