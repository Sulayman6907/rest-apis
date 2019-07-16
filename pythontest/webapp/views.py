from django.http import JsonResponse

def index(request):
    responseData = {
        
        'language': 'Python',
        
    }

    return JsonResponse(responseData)
