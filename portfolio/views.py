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

    data = json.loads(request.body)

    if request.method == "POST":

        message_title = 'Wiadomość od - ' + data['message_name'] 

        if data['message_company'] != '':
            message_title += ' (' + data['message_company'] + ')'

        
        message = data['message'] + '\n\n Kontakt: ' + data['message_email']

        send_mail(
            message_title,
            message,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_TARGET],
            fail_silently=False,
        )

        return HttpResponse("Email succesfully sent!")

    # return HttpResponse('ok')
    
