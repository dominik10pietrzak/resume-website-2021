from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponse
from django.conf import settings
import json

from decouple import config


from django.views.decorators.csrf import csrf_exempt


# Create your views here.

@csrf_exempt
def send_email_message(request):
    
    data = request.body

    message_title = 'Wiadomość ze strony portfolio od - ' + data.POST.get('message_name')
    message = data.POST.get('message')

    send_mail(
        message_title,
        message,
        settings.EMAIL_HOST_USER,
        [settings.EMAIL_TARGET],
        fail_silently=False,
    )

    return HttpResponse("Email succesfully sent!")

    # return HttpResponse('ok')
    
