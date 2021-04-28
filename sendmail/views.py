from django.shortcuts import render
from django.http import JsonResponse
import smtplib
from email.message import EmailMessage

def instance():
    ec2s=["inst1","inst2","inst3"]
    return ec2s

def my_def_in_view(request):
    recep = request.GET.get('recep', None)
    message = request.GET.get('message', None)
    # Any process that you want
    print("****************************************************",message)
    EMAIL_ADDRESS = "bsainaveenkumar@gmail.com"
    EMAIL_PASSWORD = "NavKum@123"
    contacts = recep
    msg = EmailMessage()
    msg['Subject'] = 'MAIL SENDED THROUGH DJANGOO'
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = contacts
    msg.add_alternative(message, subtype='html')
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)
        print("data sended")
    data = {
        "program": recep,
    }
    return JsonResponse(data)
def index(request):
    print("Current View: Index View")
    return render(request, 'sendmail/index.html',{'ec2s': instance() })
