from django.urls import path,include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from projects import views
#api versioning
router = routers.DefaultRouter()
router.register(r'projects', views.ProjectView,'projects')
urlpatterns = [
    path("api/v1/",include(router.urls)),
    path("docs/",include_docs_urls(title="Project API")),    
]
