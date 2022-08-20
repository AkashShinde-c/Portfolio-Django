from django.shortcuts import render
from .models import projectsCard

def home(request):
    return render(request, 'index.html')

def portfolio(request):
    projectDetails = projectsCard.objects.all()
    
    return render(request, 'Portfolio.html',{'projectDetails':projectDetails})    

def projectDetails(request):
    searchId = request.GET.get('searchId')
    projectInfo = projectsCard.objects.get(id__exact=searchId)
    print(projectInfo.projectName)
    return render(request, 'project_details.html',{'projectInfo':projectInfo})
