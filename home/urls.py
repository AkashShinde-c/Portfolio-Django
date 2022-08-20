from django.conf.urls import url
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('',views.home,name = 'home'),
    path('Portfolio/',views.portfolio,name = 'Portfolio'),
    path('project_details/',views.projectDetails,name = 'project_details'),
    url('About/',TemplateView.as_view(template_name = 'About.html'),name = 'About'),
    #url('Portfolio/',TemplateView.as_view(template_name = 'Portfolio.html'),name = 'Portfolio'),
    url('Home/',TemplateView.as_view(template_name = 'index.html'),name = 'Home')
   

]
urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

