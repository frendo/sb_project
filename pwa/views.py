from django.shortcuts import render

def app_shell(request):
    return render(request, 'pwa/app_shell.html', {})
