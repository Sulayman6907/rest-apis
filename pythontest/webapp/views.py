from django.http import JsonResponse
import json
import requests
from django.http import HttpResponse


def index(request):
    responseData = {
        'language': 'Python',
    }

    return JsonResponse(responseData)


def get(request, type):

    if (type == "node"):
        responseData = requests.get('http://localhost:3000').json()
        responseData['from'] = 'Python'
        return JsonResponse(responseData)

    else:
        return HttpResponse(status=404)
